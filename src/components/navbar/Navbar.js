import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Logmenu from "../logmenu/Logmenu";
import { withStyles } from "@material-ui/core/styles";
import firebase from "firebase";
import { Component } from "react";

const styles = (theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  draweropen: {
    width: "calc(100% - 240px)",
    left: "240px",
    transition: theme.transitions.create(["left", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerclosed: {
    width: "100%",
    left: "0px",
    transition: theme.transitions.create(["left", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logmenuOpen: false,
    };
  }

  render() {
    const classes = this.props.classes;
    let {
      currentPage,
      loggedIn,
      drawerOpen,
      setLoggedIn,
      setDrawerOpen,
    } = this.props;

    const handleLoginLogout = () => {
      if (loggedIn) {
        firebase
          .auth()
          .signOut()
          .then(() => setLoggedIn(false));
      } else {
        this.setState({ logmenuOpen: true });
      }
    };

    return (
      <>
        <AppBar
          position="absolute"
          className={drawerOpen ? classes.draweropen : classes.drawerclosed}
        >
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              onClick={() => setDrawerOpen(true)}
              style={{ padding: "6px 6px", margin: "0px 2px" }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              style={{ flexGrow: 1, paddingLeft: "24px" }}
            >
              {currentPage}
            </Typography>
            <Button color="inherit" onClick={handleLoginLogout}>
              {loggedIn ? "Logout" : "Login"}
            </Button>
          </Toolbar>
        </AppBar>
        <Logmenu
          loggedIn={loggedIn}
          drawerOpen={drawerOpen}
          logmenuOpen={this.state.logmenuOpen}
          setLoggedIn={(newLogState) => setLoggedIn(newLogState)}
          setLogmenuOpen={(newLogmenuState) =>
            this.setState({ logmenuOpen: newLogmenuState })
          }
        />
      </>
    );
  }
}

export default withStyles(styles)(Navbar);
