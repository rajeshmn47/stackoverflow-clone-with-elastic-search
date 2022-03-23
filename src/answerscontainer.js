import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const Answerscontainer = () => {
  const id = useParams()
  useEffect(async() => {
    const { data } =await axios.get(`https://stackoverflowclonerajesh.herokuapp.com/question/getonequestion/${id}`
      console.log(data)
    )
  }, [id])
  const handlesubmit = () => {}
  return <></>
}
export default Answerscontainer
