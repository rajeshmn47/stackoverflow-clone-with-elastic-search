import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from './sidebar'
import Rightbar from './rightbar'
import PublicIcon from '@material-ui/icons/Public'

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
      <h1>asdfghjkl</h1>
    </>
  )
}
export default Answerscontainer
