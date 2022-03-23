import PublicIcon from '@material-ui/icons/Public'

export const Rightbar = () => {
  return (
    <>
      <div className='w-1/4 border-2 border-orange-200 shadow-xl m-1 overflowblog'>
        <div className='bg-orange-200 p-2 text-sm font-bold'>
          <h2 className='opacity-50'>The Overflow Blog</h2>
        </div>
        <div className='bg-orange-100 p-2 text-xs'>
          <p>
            Celebrating the Stack Exchange sites that turned ten years old in Q1
            2022
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
    </>
  )
}
export default Rightbar
