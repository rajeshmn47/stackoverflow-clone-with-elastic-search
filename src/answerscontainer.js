import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

export const Answerscontainer = () => {
  const id = useParams()
  useEffect(() => {
    const { data } = axios.get(
      `https://stackoverflowclonerajesh.herokuapp.com/question/getonequestion/${id}`
    )
  }, [id])
  const handlesubmit = () => {}
  return <></>
}
export default Answerscontainer
