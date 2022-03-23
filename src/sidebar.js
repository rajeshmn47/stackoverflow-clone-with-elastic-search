export const Sidebar = () => {
  return (
    <>
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
        <h1 style={{ margin: '1vmax 3vmax', fontSize: '1vmax' }}>Companies</h1>
        <h1 className='ml-3 opacity-50 flex content-center'>TEAMS</h1>
        <h1 style={{ margin: '1vmax 3vmax', fontSize: '1vmax' }}>Jobs</h1>
      </div>
    </>
  )
}
export default Sidebar
