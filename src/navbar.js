import SearchIcon from '@material-ui/icons/Search';
import stack from './images/stackoverflow.jpeg'
import {useNavigate} from 'react-router-dom'

export const Navbar=()=>{
    const navigate=useNavigate()
    return(
<>
<div className="navbar flex align-center justify-center">
    <img src={stack}  alt='stacl'/>
    <h5 className='m-1'>Stack<span className='font-bold'>Overflow</span></h5>
    <p className='opacity-50 m-1'>Products</p>
    <div className='bg-white w-1/2 height-5 p-1 m-2 border-2 border-white-600'>
        <SearchIcon style={{opacity:'0.5'}}/>
    <input className="w-30 h-5 navbarinput" placeholder="search..."/>
    </div>
    <button className='loginbtn' onClick={()=>navigate('login')}>Login</button>
    <button className='signupbtn' onClick={()=>navigate('/signup')}>Signup</button>
</div>
</>
    )
}
export default Navbar