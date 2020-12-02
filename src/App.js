import { connect } from "react-redux";
import PropTypes from "prop-types";

import Navbar from "./components/navbar/Navbar";
import NavDrawer from "./components/navbar/NavDrawer";
import Logmenu from "./components/logmenu/Logmenu";

import { Route, Switch, withRouter } from "react-router-dom";
import { makeStyles, withStyles, withTheme } from "@material-ui/core/styles";

import "./App.css";

import { Component, useState } from "react";

import firebase from "firebase";

const styles = (theme) => ({
  draweropen: {
    padding: "10px",
    position: "fixed",
    width: "calc(100% - 240px)",
    left: "240px",
    transition: theme.transitions.create(["left", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerclosed: {
    padding: "10px",
    position: "fixed",
    width: "100%",
    left: "0px",
    transition: theme.transitions.create(["left", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    /*
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
    */

    this.state = {
      loggedIn: false,
      currentPage: "Hub",
      drawerOpen: false,
    };

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        var uid = user.uid;
        var isAnonymous = user.isAnonymous;

        if (isAnonymous) {
          firebase
            .auth()
            .signInAnonymously()
            .then(() => {
              this.setState({ loggedIn: true });
            });
        }
      }
    });
  }

  render() {
    const classes = this.props.classes;

    return (
      <>
        <NavDrawer
          currentPage={this.state.currentPage}
          loggedIn={this.state.loggedIn}
          drawerOpen={this.state.drawerOpen}
          setLoggedIn={(newLogState) =>
            this.setState({ loggedIn: newLogState })
          }
          setDrawerOpen={(newDrawerState) =>
            this.setState({ drawerOpen: newDrawerState })
          }
        />
        <Navbar
          currentPage={this.state.currentPage}
          loggedIn={this.state.loggedIn}
          drawerOpen={this.state.drawerOpen}
          setLoggedIn={(newLogState) =>
            this.setState({ loggedIn: newLogState })
          }
          setDrawerOpen={(newDrawerState) =>
            this.setState({ drawerOpen: newDrawerState })
          }
        />

        <div
          className={
            this.state.drawerOpen ? classes.draweropen : classes.drawerclosed
          }
          id="appcontent"
        >
          <Switch>
            <Route path="/">{this.state.loggedIn.toString()}</Route>
          </Switch>
        </div>
      </>
    );
  }
}
export default withTheme(withStyles(styles)(withRouter(App)));
