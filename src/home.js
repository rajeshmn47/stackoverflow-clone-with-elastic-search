import Question from './question'
import PublicIcon from '@material-ui/icons/Public'
import Answer from './answers'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Usercard from './Usercard'
import { useNavigate } from 'react-router-dom'
import {
  CircularProgress,
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";

export const Home = () => {
  const navigate=useNavigate()
  const [questions, setQuestions] = useState([])
  useEffect(async () => {
    const { data } = await axios.get(
      'https://stackoverflowclonerajesh.herokuapp.com/question/getquestions'
    )
    console.log(data)
    setQuestions(data.questions)
  }, [])
  return (
    <>
      <div className='home'>
        <div className='homeone'>
          <div className='homebtn'>
            <h2>Home</h2>
          </div>
          <h5 style={{ margin: '1vmax 1vmax' }} className='ml-3 opacity-50'>
            Public
          </h5>
          <h1 className='ml-3 opacity-50 flex content-center'>
            <PublicIcon /> Questions
          </h1>
          <h1 style={{ margin: '1vmax 3vmax',}}>Tags</h1>
          <h1 style={{ margin: '1vmax 3vmax',}}>Users</h1>
          <h1 className='ml-3 opacity-50 flex content-center'>COLLECTIVES</h1>
          <h1 style={{ margin: '1vmax 3vmax', }}>
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
        <div className='homemiddle'>
          <div>
            <div className='topcontainer'>
              <div className='topcontainerbottom'>
                <h1>Top Questions</h1>
                <button className='askque' onClick={()=>navigate('/askquestion')}>Ask Question</button>
              </div>
              <div>
                <div className='box'>
                  <div className='smallbox selected'>Interesting</div>
                  <div className='smallbox'>
                    {' '}
                    <span className='bount'>556</span>Bountied
                  </div>
                  <div className='smallbox'>Hot</div>
                  <div className='smallbox'>Week</div>
                  <div className='last'>Month</div>
                </div>
              </div>
            </div>
          </div>

          <div></div>
          {questions.length>0?questions?.map((q) => (
              <>
                <Question text={q.text} tags={q.tags} id={q._id} userid={q.author} 
                answers={q.answers.length} votes={q.votes} views={q.views} createdat={q.created}/>
              </>
            )):<CircularProgress/>}
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
export default Home
