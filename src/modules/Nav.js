import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/Home';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import ReplayIcon from '@material-ui/icons/Replay';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import SettingsIcon from '@material-ui/icons/Settings';



const useStyles = makeStyles({
  root: {
    width: '92%',
    padding: '5px',
    position: 'fixed',
    bottom: 0
  },
  menuIcon: {
    minWidth: '75px'
  }
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction className={classes.menuIcon} label="Start" icon={<HomeIcon />} />
      <BottomNavigationAction className={classes.menuIcon} label="ToDo" icon={<DoneAllIcon />} />
      <BottomNavigationAction className={classes.menuIcon} label="Routine" icon={<ReplayIcon />} />
      <BottomNavigationAction className={classes.menuIcon} label="Wissen" icon={<EmojiObjectsIcon />} />
      <BottomNavigationAction className={classes.menuIcon} label="Einstellungen" icon={<SettingsIcon />} />
 
     
    </BottomNavigation>
  );
}
