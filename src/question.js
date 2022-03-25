import { useNavigate } from 'react-router-dom'
import Usercard from './Usercard'

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
          <div className='que'>
            <h5 style={{ marginRight: '2vmax', fontSize: '1vmax' }}>{views} views</h5>
          </div>
        </div>
        <div className='questi'>
          <div style={{ color: 'blue', fontSize: '1vmax' }}>{text}</div>

          <div style={{ color: 'blue', display: 'flex' }}>
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
          <div style={{ fontSize: '1vmax', width: '1vmax', height: '1vmax' }}>
            {' '}
          </div>
        </div>
      </div>
    </>
  )
}
export default Question
