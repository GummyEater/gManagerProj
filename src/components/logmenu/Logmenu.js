import "./Logmenu.css";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import { withStyles } from "@material-ui/core/styles";
import firebase from "firebase";
import { Component } from "react";

const styles = (theme) => ({
  draweropen: {
    position: "fixed",
    width: "calc(100% - 240px)",
    left: "240px",
    transition: theme.transitions.create(["left", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerclosed: {
    position: "fixed",
    width: "100%",
    left: "0px",
    transition: theme.transitions.create(["left", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  realmenu: {
    position: "absolute",
    width: "50%",
  },
  bottomnav: {
    width: "100%",
    position: "absolute",
    bottom: "0px",
  },
  btn: {
    width: "75%",
    height: "25%",
    position: "absolute",
    top: "37.5%",
    left: "12.5%",
  },
  emailform: {},
});

class Logmenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentLogmenuPage: 0,
    };
  }

  render() {
    const classes = this.props.classes;
    let {
      loggedIn,
      drawerOpen,
      logmenuOpen,
      setLoggedIn,
      setLogmenuOpen,
    } = this.props;

    const backdropClicked = (event) => {
      const isBackdrop = event.target.id === "logmenucontent";
      if (isBackdrop) setLogmenuOpen(false);
    };

    const loginGoogle = (event) => {};
    //const loginEmail = (event) => {};
    const loginAnon = (event) => {
      firebase
        .auth()
        .signInAnonymously()
        .then(() => {
          setLoggedIn(true);
          setLogmenuOpen(false);
        });
    };

    const googleBtn = (
      <Button
        variant="contained"
        className={classes.btn}
        onClick={(event) => {
          loggedIn ? setLogmenuOpen(false) : loginGoogle(event);
        }}
      >
        {loggedIn ? "Already Logged In." : "Continue with Google"}
      </Button>
    );

    const emailForm = "login form";

    const anonBtn = (
      <Button
        variant="contained"
        className={classes.btn}
        onClick={(event) => {
          loggedIn ? setLogmenuOpen(false) : loginAnon(event);
        }}
      >
        {loggedIn ? "Already Logged In." : "Continue Anonymously"}
      </Button>
    );

    const realMenu = (
      <Paper className={classes.realmenu} id="logmenurealmenu" elevation={20}>
        {this.state.currentLogmenuPage === 0 ? googleBtn : null}
        {this.state.currentLogmenuPage === 1 && loggedIn
          ? "Already Logged In."
          : null}
        {this.state.currentLogmenuPage === 1 && !loggedIn ? emailForm : null}
        {this.state.currentLogmenuPage === 2 ? anonBtn : null}
        <BottomNavigation
          value={this.state.currentLogmenuPage}
          onChange={(event, newValue) => {
            this.setState({ currentLogmenuPage: newValue });
          }}
          showLabels
          className={classes.bottomnav}
        >
          <BottomNavigationAction
            label="Google"
            icon={
              <svg
                className="MuiSvgIcon-root"
                viewBox="0 0 24 24"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  d="M19.6 10.23c0-.82-.1-1.42-.25-2.05H10v3.72h5.5c-.15.96-.74 2.31-2.04 3.22v2.45h3.16c1.89-1.73 2.98-4.3 2.98-7.34z"
                  fill="#4285F4"
                ></path>
                <path
                  d="M13.46 15.13c-.83.59-1.96 1-3.46 1-2.64 0-4.88-1.74-5.68-4.15H1.07v2.52C2.72 17.75 6.09 20 10 20c2.7 0 4.96-.89 6.62-2.42l-3.16-2.45z"
                  fill="#34A853"
                ></path>
                <path
                  d="M3.99 10c0-.69.12-1.35.32-1.97V5.51H1.07A9.973 9.973 0 000 10c0 1.61.39 3.14 1.07 4.49l3.24-2.52c-.2-.62-.32-1.28-.32-1.97z"
                  fill="#FBBC05"
                ></path>
                <path
                  d="M10 3.88c1.88 0 3.13.81 3.85 1.48l2.84-2.76C14.96.99 12.7 0 10 0 6.09 0 2.72 2.25 1.07 5.51l3.24 2.52C5.12 5.62 7.36 3.88 10 3.88z"
                  fill="#EA4335"
                ></path>
              </svg>
            }
          />
          <BottomNavigationAction label="Email" icon={<EmailIcon />} />
          <BottomNavigationAction label="Anonymous" icon={<PersonIcon />} />
        </BottomNavigation>
      </Paper>
    );

    return (
      <div
        className={drawerOpen ? classes.draweropen : classes.drawerclosed}
        id="logmenucontent"
        onClick={backdropClicked}
      >
        {logmenuOpen ? realMenu : null}
      </div>
    );
  }
}

export default withStyles(styles)(Logmenu);