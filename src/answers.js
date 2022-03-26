import Usercard from './Usercard'
import bottomicon from './images/bottomdown.jpeg'
import upicon from './images/upperup.jpeg'

export const Answer=({answer,id,ans})=>{
    console.log(ans)
    return(
        <>
        <div className='answer'>
    <div style={{display:'flex',alignItems:'center'}}>
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <img src={upicon} alt='' width='40' />
        <h1 style={{fontSize:'2vmax'}}>{ans.votes.length}</h1>
        <img src={bottomicon} alt='' width='40'/>
        </div>
        <div>
        <p>{answer}</p>
        </div>
        </div>
        <div style={{display:'flex',justifyContent:'space-between',opacity:'0.7',marginTop:'1.5vmax'}}>
        <p style={{opacity:'0.7'}}> share edit follow</p>     
<Usercard id={id}/>
</div>
<div style={{margin:'1vmax 1vmax'}}>
<input type='text' placeholder='addcomment' style={{outline:'none'}} />
</div>
</div>
        </>
    )
}
export default Answer