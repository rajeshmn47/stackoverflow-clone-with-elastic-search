import './askquestion.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import {useSelector} from 'react-redux'
import {useAlert} from 'react-alert'

export const Askquestion=()=>{
    const alert=useAlert()
    const[title,setTitle]=useState()
    const[tags,setTags]=useState([])
    const[text,setText]=useState()
    const {user,isAuthenticated,loading,error}=useSelector(
        (state) => state.user
      );
const handlesubmit= async(e)=>{
    e.preventDefault()
    console.log(tags)
  await  axios.post('http://localhost:8000/question/question',
  {title:title,tags:tags,author:user._id,text:text})
  alert.success('posted succesfully')
}
    return(
        <>
<div className="askquestioncontainer">
    <h1 style={{fontSize:'2vmax',padding:'2vmax 10vmax'}}>Ask a Public Question</h1>
    <div className="askquestions">
<div className="questionform">
<h2>Title</h2>
<p style={{fontSize:'1vmax'}}>Be specific and imagine you’re asking a question to another person</p>
<input placeholder='e.g. is their r function to find elements' 
className='inputtitle' value={title} onChange={(e)=>setTitle(e.target.value)}/>
<h2>Body</h2>
<p style={{fontSize:'1vmax'}}>Include all the information someone would need to answer your question</p>
<input className='inputbody' value={text} onChange={(e)=>setText(e.target.value)}/>
<h2>Tags</h2>
<p style={{fontSize:'1vmax'}}>Add up to 5 tags to describe what your question is about</p>
<input className='inputtag' value={tags.map((t)=>t)} onChange={(e)=>setTags([e.target.value])}/>
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

<button style={{marginLeft:'10vmax',marginTop:'2vmax'}} onClick={(e)=>handlesubmit(e)} type='submit'
className='askquestion'>Review Your Question</button>
</div>
        </>
    )
}
export default Askquestion