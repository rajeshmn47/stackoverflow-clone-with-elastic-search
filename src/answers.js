import Usercard from './Usercard'
import bottomicon from './images/bottomdown.jpeg'
import upicon from './images/upperup.jpeg'
import {format} from 'timeago.js'
import {useEffect,useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios'

export const Answer=({answer,id,ans,questionid})=>{
    console.log(ans)
    const {user,isAuthenticated,loading,error}=useSelector(
        (state) => state.user
      );
const[votes,setVotes]=useState()
const[voted,setVoted]=useState()

    useEffect(()=>{      
    console.log(ans.votes.length)
  setVotes(ans.votes.length>0?(ans.votes.reduce((a,b)=>a+b.vote,0)):0)
const z=ans?.votes?.find((a)=>a?.user===user._id)
if(z){
if(z?.vote===1){
    setVoted('upvoted')
}
else{
    if(z?.vote===-1)
    setVoted('downvoted')
}
}
else{
console.log('ok bro')
}
    },[ans])

 const increasevotes=(id,questionid)=>{
console.log(id,questionid)
if(!(voted==='upvoted')){
setVotes(votes+1)
setVoted('upvoted')
axios.post(`https://stackoverflowclonerajesh.herokuapp.com/question/upvoteanswer/${questionid}`,
{user:user._id,vote:1,answerid:ans._id})
}
else{
    axios.post(`https://stackoverflowclonerajesh.herokuapp.com/question/upvoteanswer/${questionid}`,
{user:user._id,vote:-1,answerid:ans._id})

    setVotes(votes-1)
    setVoted()
}
 }
 const decreasevotes=(id,questionid)=>{
console.log(id,questionid)
if(!(voted==='downvoted')){
    setVotes(votes-1)
    setVoted('downvoted')
    axios.post(`https://stackoverflowclonerajesh.herokuapp.com/question/upvoteanswer/${questionid}`,
{user:user._id,vote:-1,answerid:ans._id})
    }
    else{
        axios.post(`https://stackoverflowclonerajesh.herokuapp.com/question/upvoteanswer/${questionid}`,
        {user:user._id,vote:1,answerid:ans._id})
        setVotes(votes+1)
        setVoted()

    }
 }
    return(
        <>
        <div className='answer'>
    <div style={{display:'flex',alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',marginRight:'1vmax'}}>
    
        <div className={voted==='upvoted'?'votedarrow-up':'arrow-up'} onClick={()=>increasevotes(id,questionid)} />
        <h1 style={{fontSize:'2vmax'}}>{votes}</h1>
        <div className={voted==='downvoted'?'votedarrow-down':'arrow-down'}  onClick={()=>decreasevotes(id,questionid)} />
      
        </div>
        <div>
        <p>{answer}</p>
        {user._id===ans.author.toString()?
        <>
        <button>edit</button><button>delete</button></>:null}
        </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',opacity:'0.7',marginTop:'1.5vmax'}}>
        <p style={{opacity:'0.7'}}> share edit follow</p> 
        <div>
<Usercard id={id}/>
{format(ans.created)}
</div>    
</div>
<div style={{margin:'1vmax 1vmax'}}>
<input type='text' placeholder='addcomment' style={{outline:'none'}} />
</div>
</div>

        </>
    )
}
export default Answer