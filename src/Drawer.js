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
import Sidebar from './sidebar'
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 250,
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
    <div>
<Sidebar/>
    </div>
     
  );
const handleclick=()=>{
setOpen(true)
}
  return (
    <div>
    
        <React.Fragment>
          <MenuIcon onClick={()=>handleclick()}/>
          <Drawer anchor='top' open={open} onClose={toggleDrawer(false)}>
            <Sidebar/>
          </Drawer>
        </React.Fragment>
    </div>
  );
}