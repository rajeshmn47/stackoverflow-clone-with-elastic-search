import SearchIcon from '@material-ui/icons/Search';
import stack from './images/stackoverflow.jpeg'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {loadUser} from './actions/userAction'
import MenuIcon from '@material-ui/icons/Menu';
import Krawer from './drawer'
import React from 'react';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export const Navbar=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {user,isAuthenticated,loading,error}=useSelector(
        (state) => state.user
      );
      const [anchorEl, setAnchorEl] = React.useState(null);

      const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
    
      const handleClose = () => {
        setAnchorEl(null);
        localStorage.removeItem('server_token')
        dispatch(loadUser())
        navigate('/')
      };
      const logout=()=>{
        localStorage.removeItem('server_token')
        dispatch(loadUser())
        navigate('/')
      }
    return(
<>


<div className="navbar flex align-center justify-center">
<div className='menuicon'><Krawer/></div>
    <img src={stack}  alt='stacl' className='image'/>
    <h5 className='m-1 stackoverflow'>Stack<span className='font-bold'>Overflow</span></h5>
   
    <p className='opacity-50 m-1'>Products</p>
    <div className='navbarinputcontainer'>
        <SearchIcon style={{opacity:'0.5'}}/>
    <input className="navbarinput" placeholder="search..."/>
    </div>
    {user?.username?<><div className='authresponsive'>

  <div style={{display:'flex',alignItems:'center'}}>
      <SearchIcon style={{opacity:'0.5'}}/>
  <img src={user.profilePhoto} alt='' width='20' onClick={handleClick} style={{marginLeft:'1vmax'}}/>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{zIndex:'102222222222222222222222222222222222222222222222222222'}}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  </div>
  </>:
  <>
  <div className='authresponsive'>
  <button className='loginbtn' onClick={()=>navigate('login')}>Login</button>
  <button className='signupbtn' onClick={()=>navigate('/signup')}>Signup</button>
  </div>
  </>
  }
    {user?.username?<><div className='auth'>
  
    <h5 className='username'>{user.username}</h5>
    <img src={user.profilePhoto} alt='' width='20'/>
    <button className='loginbtn logout' onClick={()=>logout()} >Logout</button>
    </div>
    </>:
    <>
    <div className='auth'>
    <button className='loginbtn' onClick={()=>navigate('login')}>Login</button>
    <button className='signupbtn' onClick={()=>navigate('/signup')}>Signup</button>
    </div>
    </>
    }
</div>
</>
    )
}
export default Navbar