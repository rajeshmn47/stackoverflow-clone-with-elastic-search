import Usercard from './Usercard'
import bottomicon from './images/bottomdown.jpeg'
import upicon from './images/upperup.jpeg'
import {format} from 'timeago.js'
import {useEffect,useState} from 'react'

export const Answer=({answer,id,ans,questionid})=>{
const[votes,setVotes]=useState()
    useEffect(()=>{
  const y= ans.votes.reduce((k,a)=>a.vote)
setVotes(y)
    },[ans])
 const increasevotes=(id,questionid)=>{
console.log(id,questionid)
 }
 const decreasevotes=(id,questionid)=>{
console.log(id,questionid)
 }
    return(
        <>
        <div className='answer'>
    <div style={{display:'flex',alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <img src={upicon} alt='' width='40' onClick={()=>increasevotes(id,questionid)}/>
        <h1 style={{fontSize:'2vmax'}}>{votes}</h1>
        <img src={bottomicon} alt='' width='40' onClick={()=>decreasevotes(id,questionid)}/>
        </div>
        <div>
        <p>{answer}</p>
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