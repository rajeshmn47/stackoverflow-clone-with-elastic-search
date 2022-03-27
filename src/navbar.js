import SearchIcon from '@material-ui/icons/Search';
import stack from './images/stackoverflow.jpeg'
import {useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import {loadUser} from './actions/userAction'
import MenuIcon from '@material-ui/icons/Menu';

export const Navbar=()=>{
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const {user,isAuthenticated,loading,error}=useSelector(
        (state) => state.user
      );

      const logout=()=>{
        localStorage.removeItem('server_token')
        dispatch(loadUser())
        navigate('/')
      }
    return(
<>


<div className="navbar flex align-center justify-center">
<div className='menuicon'><MenuIcon/></div>
    <img src={stack}  alt='stacl' className='image'/>
    <h5 className='m-1 stackoverflow'>Stack<span className='font-bold'>Overflow</span></h5>
   
    <p className='opacity-50 m-1'>Products</p>
    <div className='navbarinputcontainer'>
        <SearchIcon style={{opacity:'0.5'}}/>
    <input className="navbarinput" placeholder="search..."/>
    </div>
    {user?.username?<><div className='auth'>
    <button className='loginbtn logout' onClick={()=>logout()} >Logout</button>
    <h5 className='username'>{user.username}</h5>
    <img src={user.profilePhoto} alt='' width='20'/>
    </div>
    </>:
    <>
    <button className='loginbtn' onClick={()=>navigate('login')}>Login</button>
    <button className='signupbtn' onClick={()=>navigate('/signup')}>Signup</button>
    </>
    }
</div>
</>
    )
}
export default Navbar