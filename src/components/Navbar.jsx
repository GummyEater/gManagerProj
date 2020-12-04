import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Logmenu from "./Logmenu";
import firebase from "firebase";
import { Component } from "react";
import "./Navbar.scss";
import { useState } from "react";

function Navbar({
  currentPage,
  loggedIn,
  drawerOpen,
  setLoggedIn,
  setDrawerOpen,
}) {
  let [logmenuOpen, setLogmenuOpen] = useState(false);

  const handleLoginLogout = () => {
    if (loggedIn) {
      firebase
        .auth()
        .signOut()
        .then(() => setLoggedIn(false));
    } else {
      setLogmenuOpen(true);
    }
  };

  return (
    <div className="Navbar">
      <AppBar
        position="absolute"
        className={`AppBar ${drawerOpen ? "draweropen" : "drawerclosed"}`}
      >
        <Toolbar>
          <IconButton onClick={() => setDrawerOpen(true)} className={"IconBtn"}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={"CurrentPageText"}>
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
        logmenuOpen={logmenuOpen}
        setLoggedIn={(newLogState) => setLoggedIn(newLogState)}
        setLogmenuOpen={(newLogmenuState) => setLogmenuOpen(newLogmenuState)}
      />
    </div>
  );
}

export default Navbar;
