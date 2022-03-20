import './loginsignup.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import google from '../images/googleicon.jpeg'


export const Login=()=>{
    return(
        <>
  <div className="signup">

            <div className="signupbox">
    <div className='sociallogin google'><img src={google} alt='' style={{marginRight:'5px'}}/>
    Sign up with google</div>
    <div className='sociallogin git'><GitHubIcon style={{marginRight:'5px'}}/>
    Sign up with google</div>
    <div className='sociallogin fb'><FacebookIcon style={{marginRight:'5px'}}/>
    Sign up with facebook</div>
<form className='loginform'>
  
    <div>
    <h5 className='font-bold'>email</h5>
    <input type='text' className='inputs'/>
    </div>
    <div>
    <h5 className='font-bold'>password</h5>
    <input type='text' className='inputs'/>
    </div>
    <input type='submit' className='submitbutton' value='Log in'/>
</form>
            </div>
        </div>

        
        </>
    )
}
export default Login