import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navbar from './components/navbar/Navbar';
import Logmenu from './components/logmenu/Logmenu';

import { Route, Switch, withRouter } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';

import { setUserLoggedIn, setPageName, setLogmenuOpen, setLogmenuMethod, setNavdrawerOpen } from "./redux/actions";
import { Component } from 'react';

import firebase from 'firebase';

const styles = theme => ({
  app: {
    height: '100%',
    width: '100%'
  },
  contentopen: {
    position: "absolute",
    width: "calc(100% - 240px)",
    left: "240px",
    transition: theme.transitions.create(['left', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  contentclosed: {
    position: "absolute",
    width: "calc(100% - 0px)",
    left: "0px",
    transition: theme.transitions.create(['left', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }
});

class App extends Component {
  constructor(props) {
    // Initialize State
    props.setUserLoggedIn(false);
    props.setLogmenuOpen(false);
    props.setLogmenuMethod("guest");
    props.setNavdrawerOpen(false);
    switch (props.location.pathname.substring(1)) {
      case "":
        props.setPageName("Hub");
        break;
      case "loadouts":
        props.setPageName("Loadouts");
        break;
      case "vendors":
        props.setPageName("Vendors");
        break;
      default:
        props.setPageName("Unknown Page");
    }

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        var isAnonymous = user.isAnonymous;

        if (isAnonymous) {
          firebase.auth().signInAnonymously().then(() => {
            props.setUserLoggedIn(true);
            props.setLogmenuOpen(false);
          }).catch((error) => {
              var errorCode = error.code;
              var errorMessage = error.message;
          })
        }
      }
    });

    super(props);
  }

  render() {
    const classes = this.props.classes;

    return (
      <div className={classes.app}>
        <Navbar />
        <Logmenu />

        <div className={this.props.navdraweropen ? classes.contentopen : classes.contentclosed}>
          <Switch>
            <Route path="/">
              {this.props.loggedin === undefined ? "Null" : this.props.loggedin.toString()}
            </Route>
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
      loggedin: state.loggedin,
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
  setLogmenuMethod: (newLogmenumethod) => {
      dispatch(setLogmenuMethod(newLogmenumethod));
  },
  setNavdrawerOpen: (newNavdraweropen) => {
      dispatch(setNavdrawerOpen(newNavdraweropen));
  }
});

let exportComp = withRouter(App);
exportComp = connect(mapStateToProps, mapDispatchToProps)(exportComp);
exportComp = withStyles(styles)(exportComp);

export default exportComp
