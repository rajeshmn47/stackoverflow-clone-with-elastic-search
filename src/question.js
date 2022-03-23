import { useNavigate } from 'react-router-dom'

export const Question = ({ text, tags, id }) => {
  const navigate = useNavigate()
  return (
    <>
      <div
        className='question'
        onClick={() =>
          navigate(
            `https://stackoverflowclonefrontend.netlify.app/answers/${id}`
          )
        }
      >
        <div className='questio'>
          <h5 style={{ marginRight: '2vmax', fontSize: '1vmax' }}>o votes</h5>
          <h5 style={{ marginRight: '2vmax', fontSize: '1vmax' }}>o answers</h5>
          <div className='que'>
            <h5 style={{ marginRight: '2vmax', fontSize: '1vmax' }}>1 view</h5>
          </div>
        </div>
        <div className='questi'>
          <div style={{ color: 'blue', fontSize: '1vmax' }}>{text}</div>

          <div style={{ color: 'blue', display: 'flex' }}>
            {tags.map((t) => (
              <>
                <div className='tag'>{t}a</div>
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
                rajesh
              </span>
              <span
                style={{
                  color: 'black',
                  fontSize: '1vmax',
                  marginLeft: '1vmax',
                }}
              >
                1 hour ago dec
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
