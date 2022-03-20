import './loginsignup.css'
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import google from '../images/googleicon.jpeg'

export const Signup=()=>{
    return(
        <>
<div className="signup">
<div className="joinup">
<h1 className="joint">Join the Stack Overflow community</h1>
<p className="joinone">Get unstuck — ask a question</p>
<p className="joinone">Unlock new privileges like voting and commenting</p>
<p className="joinone">Save your favorite tags, filters, and jobs</p>
<p className="joinone">Earn reputation and badges</p>
<p className="joinonelast">Collaborate and share knowledge with a private group for FREE.</p>
<p style={{color:'blue'}}>Get Stack Overflow for Teams free for</p>
            </div>
            <div className="signupbox">
    <div className='sociallogin google'><img src={google} alt='' style={{marginRight:'5px'}}/>
    Sign up with google</div>
    <div className='sociallogin git'><GitHubIcon style={{marginRight:'5px'}}/>
    Sign up with google</div>
    <div className='sociallogin fb'><FacebookIcon style={{marginRight:'5px'}}/>
    Sign up with facebook</div>
<form className='signupform'>
    <div>
    <h5 className='font-bold'>username</h5>
    <input type='text' className='inputs' />
    </div>
    <div>
    <h5 className='font-bold'>email</h5>
    <input type='text' className='inputs'/>
    </div>
    <div>
    <h5 className='font-bold'>password</h5>
    <input type='text' className='inputs'/>
    </div>
    <input type='submit' className='submitbutton' value='Sign up'/>
</form>
            </div>
        </div>

        </>
    )
}
export default Signup