import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import NavDrawer from './NavDrawer';

import { makeStyles } from '@material-ui/core/styles';

import { setUserLoggedIn, setPageName, setLogmenuOpen, setNavdrawerOpen } from "../../redux/actions";

import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    ...theme.mixins.toolbar,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appbaropen: {
    position: "absolute",
    width: "calc(100% - 240px)",
    left: "240px",
    transition: theme.transitions.create(['left', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  appbarclosed: {
    position: "absolute",
    width: "calc(100% - 0px)",
    left: "0px",
    transition: theme.transitions.create(['left', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
}));

function Navbar({ loggedin, setUserLoggedIn, pagename, setPageName, logmenuopen, setLogmenuOpen, navdraweropen, setNavdrawerOpen }) {
  const classes = useStyles();

  const handleLoginLogout = () => {
    if (loggedin) {
      firebase.auth().signOut().then(function () {
        setUserLoggedIn(false);
      })
    } else {
      setLogmenuOpen(true);
    }
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" className={navdraweropen ? classes.appbaropen : classes.appbarclosed}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => setNavdrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {pagename}
          </Typography>
          <Button color="inherit" onClick={handleLoginLogout}>
            {loggedin ? "Logout" : "Login"}
          </Button>
        </Toolbar>
      </AppBar>
      <NavDrawer />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    loggedin: state.loggedin,
    logmenuopen: state.logmenuopen,
    pagename: state.pagename,
    navdraweropen: state.navdraweropen
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  setUserLoggedIn: (newLoggedin) => {
    dispatch(setUserLoggedIn(newLoggedin));
  },
  setPageName: (newPagename) => {
    dispatch(setPageName(newPagename));
  },
  setLogmenuOpen: (newLogmenuopen) => {
    dispatch(setLogmenuOpen(newLogmenuopen));
  },
  setNavdrawerOpen: (newNavdraweropen) => {
    dispatch(setNavdrawerOpen(newNavdraweropen));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
