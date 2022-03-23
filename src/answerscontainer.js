import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from './sidebar'
import Rightbar from './rightbar'

export const Answerscontainer = () => {
  const id = useParams()
  useEffect(async () => {
    const { data } = await axios.get(
      `https://stackoverflowclonerajesh.herokuapp.com/question/getonequestion/${id}`
    )
    console.log(data)
  }, [id])
  const handlesubmit = () => {}
  return (
    <>
      <div className='flex justify-between m-50 p-2 home'>
        <Sidebar />
        <div>
          <h1>answers</h1>
        </div>
        <Rightbar />
      </div>
    </>
  )
}
export default Answerscontainer
