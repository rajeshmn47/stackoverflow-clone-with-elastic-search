import { useEffect,useState } from "react"
import axios from 'axios'

export const Usercard=({id})=>{
    const [user,setUser]=useState()
    console.log(id)
    useEffect(async()=>{
const data=await axios.get(`http://localhost:8000/auth/getoneuser/${id}`)
console.log(data)
setUser(data.data.message)
    },[])
    return(
<>
<div style={{display:'flex'}}>
{user?.username}
<img style={{marginLeft:'1vmax'}} src={user?.profilePhoto} alt=''  width='20'/>
</div>
</>
    )
}
export default Usercard