import "./Logmenu.scss";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import firebase from "firebase";
import { useState } from "react";
import GoogleLogo from "icons/GoogleLogo.jsx";

function LogmenuBtn(props) {
  let { loggedIn, setLoggedIn, setLogmenuOpen, currentLogmenuPage } = props;
  
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

  if (loggedIn) {
    return "Already Logged In.";
  } else if (currentLogmenuPage === 0) {
    return (
      <Button variant="contained" className="MethodBtn" onClick={loginGoogle}>
        Continue with Google
      </Button>
    );
  } else if (currentLogmenuPage === 1) {
    return "This will eventually be an email form.";
  } else if (currentLogmenuPage === 2) {
    return (
      <Button variant="contained" className="MethodBtn" onClick={loginAnon}>
        Continue Anonymously
      </Button>
    );
  }
}

function Logmenu(props) {
  let { drawerOpen, logmenuOpen, setLogmenuOpen } = props;
  
  const [currentLogmenuPage, setCurrentLogmenuPage] = useState(0);

  const backdropClicked = (event) => {
    const isBackdrop = event.target.id === "backdroptest";
    if (isBackdrop) setLogmenuOpen(false);
  };

  if (logmenuOpen) {
    return (
      <div className="Logmenu">
        <div
          className={`Backdrop ${drawerOpen ? "draweropen" : "drawerclosed"} ${
            logmenuOpen ? "canclick" : "cantclick"
          }`}
          id="backdroptest"
          onClick={backdropClicked}
        >
          <Paper className="LogmenuPaper" elevation={20}>
            <LogmenuBtn
              {...props}
              currentLogmenuPage={currentLogmenuPage}
            />
            <BottomNavigation
              value={currentLogmenuPage}
              onChange={(_, newValue) => {
                setCurrentLogmenuPage(newValue);
              }}
              showLabels
              className="BottomNav"
            >
              <BottomNavigationAction label="Google" icon={<GoogleLogo />} />
              <BottomNavigationAction label="Email" icon={<EmailIcon />} />
              <BottomNavigationAction label="Anonymous" icon={<PersonIcon />} />
            </BottomNavigation>
          </Paper>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export default Logmenu;
