import stack from './images/stackoverflow.jpeg'

const Footer=()=>{
    return(
        <>
        <div className="footer">
<div className="foot first">
<img src={stack} alt=''/>
</div>
<div className="foot">
    <div>
<h1>STACK OVERFLOW</h1>
</div>
<div className='footft'>
<p>Questions</p>
<p>Jobs</p>
<p>Developer Jobs Directory</p>
<p>Help</p>
</div>
</div>
<div className="foot">
<div>
<h1>PRODUCTS</h1>
</div>
<div className='footft'>
<p>Teams</p>
<p>Advertising</p>
<p>Collectives</p>
<p>Talent</p>
</div>
</div>
<div className="foot">
    <div>
<h1>COMPANY</h1>
</div>
<div className='footft'>
<p>About</p>
<p>Press</p>
<p>Work Here</p>
<p>Legal</p>
<p>Privacy Policy</p>
<p>Terms of Service</p>
<p>Contact Us</p>
<p>Cookie Settings</p>
<p>Cookie Policy</p>
</div>
</div>
<div className="foot">
    <div>
<h1>STACK EXCHANGE NETWORK</h1>
</div>
<div className='footft'>
<p>Technology</p>
<p>Culture & recreation</p>
<p>Life & arts</p>
<p>Science</p>
<p>Professional</p>
<p>Business</p>
<p>API</p>
<p>Data</p>
</div>
</div>
<div className="lastfoot">
    <div className='lastfootdivone'>
    <div className='footft'>
<p>Blog</p>
<p>Twitter</p>
<p>LinkedIn</p>
<p>Instagram</p>
</div>
</div>
<div className='lastfootdivone'>
<p>site design / logo © 2022 Stack Exchange Inc; user contributions licensed</p>
</div>
</div>
        </div>
        </>
    )
}

export default Footer