import Usercard from './Usercard'

export const Answer=({answer,id})=>{
    return(
        <>
        <div className='answer'>
        <p>{answer}</p>
<Usercard id={id}/>
</div>
        </>
    )
}
export default Answer