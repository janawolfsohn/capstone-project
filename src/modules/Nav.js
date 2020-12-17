import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import DoneAllIcon from "@material-ui/icons/DoneAll";
import StarHalfIcon from '@material-ui/icons/StarHalf';
import EmojiObjectsIcon from "@material-ui/icons/EmojiObjects";
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: "92%",
    position: "fixed",
    bottom: 0,
    justifyContent: "end",
    
    
  },
  menuIcon: {
    minWidth: "50px",
    backgroundColor: "lightpink",
    color: "ivory",
    
  },
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
      <BottomNavigationAction
        component={Link}
        to="/home"
        className={classes.menuIcon}
        label="Start"
        icon={<HomeIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/todos"
        className={classes.menuIcon}
        label="ToDo"
        icon={<DoneAllIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/journal"
        className={classes.menuIcon}
        label="Jornal"
        icon={<StarHalfIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/wissen"
        className={classes.menuIcon}
        label="Wissen"
        icon={<EmojiObjectsIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/einstellungen"
        className={classes.menuIcon}
        label="Einstellungen"
        icon={<SettingsIcon />}
      />
    </BottomNavigation>
  );
}

