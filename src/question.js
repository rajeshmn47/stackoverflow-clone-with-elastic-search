import { useNavigate } from 'react-router-dom'
import Usercard from './Usercard'
import bottomicon from './images/bottomdown.jpeg'
import upicon from './images/upperup.jpeg'

export const Question = ({ text, tags, id,userid,answers,views,votes }) => {
  const navigate = useNavigate()
  return (
    <>
      <div
        className='question'
        onClick={() =>
          navigate(
            `/answers/${id}`
          )
        }
      >
        <div className='questio'>
          <h5 style={{ marginRight: '2vmax', fontSize: '1vmax' }}>{votes} votes</h5>
          <h5 style={{ marginRight: '2vmax', fontSize: '1vmax' }}>{answers} answers</h5>
          
            <h5 style={{ marginRight: '2vmax', fontSize: '1vmax' }}>{views} views</h5>
      
        </div>
        <div className='questi'>
       
        <div style={{ color: 'blue',  }}>{text}</div>
        <div style={{ color: 'blue', display: 'flex' }} className='tags'>
            {tags.map((t) => (
              <>
                <div className='tag'>{t.text}</div>
              </>
            ))}

            <div>
              {' '}
              <span
                style={{
                  color: 'blue',
                  fontSize: '1vmax',
                  marginLeft: '5vmax',
                }}
              >
                {}
              </span>
              <span
                style={{
                  color: 'black',
                  fontSize: '1vmax',
                  marginLeft: '1vmax',
                }}
              >
            <div style={{display:'flex'}}><Usercard id={userid}/>    1 hour ago dec</div>
              </span>
            </div>
          </div>
     
        </div>
      </div> 

        
    </>
  )
}
export default Question
