import './askquestion.css'

export const Askquestion=()=>{
    return(
        <>
<div className="askquestioncontainer">
    <h1 style={{fontSize:'2vmax',padding:'2vmax 10vmax'}}>Ask a Public Question</h1>
    <div className="askquestions">
<div className="questionform">
<h2>Title</h2>
<p style={{fontSize:'1vmax'}}>Be specific and imagine you’re asking a question to another person</p>
<input placeholder='e.g. is their r function to find elements' className='inputtitle'/>
<h2>Body</h2>
<p style={{fontSize:'1vmax'}}>Include all the information someone would need to answer your question</p>
<input className='inputbody'/>
<h2>Tags</h2>
<p style={{fontSize:'1vmax'}}>Add up to 5 tags to describe what your question is about</p>
<input className='inputtag'/>
</div>
<div>
<div className="procedure">
<div className='procedureheading'><h2>Step 1:Draft your question</h2></div>
<div className='procedures'>
<p style={{margin:'0vmax 0vmax',padding:'1vmax'}}>
    The community is here to help you with specific coding, algorithm, or language problems.</p>

<p style={{padding:'1vmax'}}>Avoid asking opinion-based questions.</p>
<h5 className='font-bold cautions'><span style={{color:'#0A95FF;'}}>1.</span>
Summarize The Problem</h5>
<h5 className='font-bold cautions'><span style={{color:'#0A95FF;'}}>2.</span>
Describe what you’ve tried</h5>
<h5 className='font-bold cautions'><span style={{color:'#0A95FF;'}}>3.</span>
Show some code</h5>
</div>

</div>
<div className='ques'>
    <h2>Have a programming question?</h2>
</div>
<div className='ques'>
    <h2>More Helpful Links</h2>
</div>
</div>
</div>

<button style={{marginLeft:'10vmax',marginTop:'2vmax'}} className='askquestion'>Review Your Question</button>
</div>
        </>
    )
}
export default Askquestion