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
        <div className='w-1/5 homeone'>
          <div className='homebtn'>
            <h2>Home</h2>
          </div>
          <h5 style={{ margin: '1vmax 1vmax' }} className='ml-3 opacity-50'>
            Public
          </h5>
          <h1 className='ml-3 opacity-50 flex content-center'>
            <PublicIcon /> Questions
          </h1>
          <h1 style={{ margin: '1vmax 3vmax', fontSize: '1vmax' }}>Tags</h1>
          <h1 style={{ margin: '1vmax 3vmax', fontSize: '1vmax' }}>Users</h1>
          <h1 className='ml-3 opacity-50 flex content-center'>COLLECTIVES</h1>
          <h1 style={{ margin: '1vmax 3vmax', fontSize: '1vmax' }}>
            Explore Collectives
          </h1>

          <h1 className='ml-3 opacity-50 flex content-center'>FIND A JOB</h1>
          <h1 style={{ margin: '1vmax 3vmax', fontSize: '1vmax' }}>Jobs</h1>
          <h1 style={{ margin: '1vmax 3vmax', fontSize: '1vmax' }}>
            Companies
          </h1>
          <h1 className='ml-3 opacity-50 flex content-center'>TEAMS</h1>
          <h1 style={{ margin: '1vmax 3vmax', fontSize: '1vmax' }}>Jobs</h1>
        </div>
        <div>
          <h1>answers</h1>
        </div>
        <div className='w-1/4 border-2 border-orange-200 shadow-xl m-1 overflowblog'>
          <div className='bg-orange-200 p-2 text-sm font-bold'>
            <h2 className='opacity-50'>The Overflow Blog</h2>
          </div>
          <div className='bg-orange-100 p-2 text-xs'>
            <p>
              Celebrating the Stack Exchange sites that turned ten years old in
              Q1 2022
            </p>
            <p>New data: What makes developers </p>
          </div>
          <div className='bg-orange-200 p-2 text-sm font-bold'>
            <h2 className='opacity-50'>Featured On Meta</h2>
          </div>
          <div className='bg-orange-100 p-2 text-xs'>
            <p className='p-1'>What goes into site sponsorships on SE?</p>
            <p className='p-1'>
              Stack Exchange Q&A access will not be restricted in Russia
            </p>
            <p className='p-1'>
              Announcing an A/B test for a Trending sort option New User
              Experience: Deep Dive into our Research on the Staging Ground –
              How...
            </p>
          </div>
          <div className='bg-orange-200 p-2 text-sm font-bold'>
            <h2 className='opacity-50'>Hot Meta Posts</h2>
          </div>
          <div className='bg-orange-100 p-2 text-xs'>
            <p>
              74 Declined flag on plagiarised answer which copied a comment in
              verbatim...
            </p>
            <p>10 Un[global]ise this tag Looking for a job?</p>
            <p>New data: What makes developers </p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Answerscontainer
