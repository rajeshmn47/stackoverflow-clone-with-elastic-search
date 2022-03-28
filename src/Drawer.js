import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import PublicIcon from '@material-ui/icons/Public'

const useStyles = makeStyles({
  list: {
    width: 250,
    height:300,
  },
  fullList: {
    width: 'auto',
  },
  
});

export default function Krawer() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (open) => (event) => {
   setOpen(false)
  };

  const list = () => (
    <div className={classes.list}>
<div style={{width:'100vw'}}>
        <div>
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
    </div>
     
  );
const handleclick=()=>{
setOpen(!open)
}
  return (
    <div >
    
        
          <MenuIcon onClick={()=>handleclick()}/>
          <Drawer style={{height:'100vh'}} anchor='top' open={open} onClose={toggleDrawer(false)}>
          <div style={{marginTop:'10vmax'}}>
        <div>
          <h2 style={{margin: '1vmax 1vmax',opacity:'0.5'}}>Home</h2>
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
          </Drawer>
    
    </div>
  );
}