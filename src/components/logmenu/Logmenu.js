import {connect} from 'react-redux';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {makeStyles} from '@material-ui/core/styles';

import {setUserLoggedIn, setPageName, setLogmenuOpen, setLogmenuMethod} from "../../redux/actions";

import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
  paperopen: {
    position: "fixed",
    top: "calc(50% + 64px)",
    left: "calc(50% + 240px)",
    width: '40vw',
    height: '30vh',
    transform: "translate(calc(-50% - 120px), calc(-50% - 32px))",
    padding: '20px',
    transition: theme.transitions.create(['left', 'width', 'top', 'transform'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  paperclosed: {
    position: "fixed",
    top: "calc(50% + 64px)",
    left: "50%",
    width: '40vw',
    height: '30vh',
    transform: "translate(-50%, calc(-50% - 32px))",
    padding: '20px',
    transition: theme.transitions.create(['left', 'width', 'top', 'transform'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  backdropopen: {
    position: "fixed",
    left: "240px",
    width: "calc(100% - 240px)",
    height: "100%",
    transition: theme.transitions.create(['left', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  backdropclosed: {
    position: "fixed",
    left: "0px",
    width: "100%",
    height: "100%",
    transition: theme.transitions.create(['left', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  methodbtns: {
    position: 'absolute',
    bottom: '20px',
    width: 'calc(100% - 40px)'
  },
  title: {
    textAlign: 'center'
  },
  methodbtn: {
    width: '100%'
  },
  method: {
    width: '15vw',
    position: 'absolute',
    left: 'calc(50% - 7.5vw)'
  },
  textfield: {
    width: '100%'
  },
  contentopen: {
    width: "calc(100% - 240px)",
    height: "100%",
    left: "240px",
    transition: theme.transitions.create(['left', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  contentclosed: {
    width: "calc(100% - 0px)",
    height: "100%",
    left: "0px",
    transition: theme.transitions.create(['left', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  }
}));

function Logmenu({setUserLoggedIn, logmenuopen, setLogmenuOpen, setLogmenuMethod, logmenumethod, navdraweropen}) {
  const classes = useStyles();

  const closeLogin = (event) => {
    const isBackdrop = event.target.classList[0].includes("backdrop");
    if (isBackdrop)
      setLogmenuOpen(false);
  }

  const loginGuest = () => {
    // const firestore = firebase.firestore();
    firebase.auth().signInAnonymously().then(() => {
      setUserLoggedIn(true);
      setLogmenuOpen(false);
    }).catch((error) => {
      // var errorCode = error.code;
      // var errorMessage = error.message;
    })
  }

  const guestBtn = (
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h6" className={classes.title}>
            Login
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" className={classes.method} onClick={loginGuest}>
            Continue as Guest
          </Button>
        </Grid>
      </Grid>
  )

  const emailBtn = (
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h6" className={classes.title}>
            Login
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <TextField label="Email" className={classes.textfield}/>
        </Grid>
        <Grid item xs={2}/>
        <Grid item xs={5}>
          <TextField label="Password" className={classes.textfield}/>
        </Grid>
      </Grid>
  )

  const googleBtn = (
      <Grid container spacing={0}>
        <Grid item xs={12} className={classes.title}>
          <Typography variant="h6" className={classes.title}>
            Login
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" className={classes.method}>
            Open External Login
          </Button>
        </Grid>
      </Grid>
  );

  const realMenu = (
      <div className={navdraweropen ? classes.backdropopen : classes.backdropclosed} onClick={closeLogin}>
        <Paper className={navdraweropen ? classes.paperopen : classes.paperclosed}>
          <div className={classes.methods}>
            {logmenumethod === "guest" ? guestBtn : null}
            {logmenumethod === "email" ? emailBtn : null}
            {logmenumethod === "google" ? googleBtn : null}
          </div>
          <Grid container spacing={0} className={classes.methodbtns}>
            <Grid item xs={12} className={classes.title}>
              <Typography variant="subtitle1" className={classes.title}>
                Login Method
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button variant={logmenumethod === "guest" ? "contained" : "outlined"} disableElevation
                      className={classes.methodbtn} onClick={() => setLogmenuMethod("guest")}>Guest</Button>
            </Grid>
            <Grid item xs={4}>
              <Button disabled={true} variant={logmenumethod === "google" ? "contained" : "outlined"} disableElevation
                      className={classes.methodbtn} onClick={() => setLogmenuMethod("google")}>Google</Button>
            </Grid>
            <Grid item xs={4}>
              <Button disabled={true} variant={logmenumethod === "email" ? "contained" : "outlined"} disableElevation
                      className={classes.methodbtn} onClick={() => setLogmenuMethod("email")}>Email</Button>
            </Grid>
          </Grid>
        </Paper>
      </div>
  );

  return (
      <div className={navdraweropen ? classes.contentopen : classes.contentclosed}>
        {logmenuopen ? realMenu : null}
      </div>
  );
};


const mapStateToProps = (state, ownProps) => {
  return {
    loggedin: state.loggedin,
    logmenuopen: state.logmenuopen,
    pagename: state.pagename,
    logmenumethod: state.logmenumethod,
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
});


export default connect(mapStateToProps, mapDispatchToProps)(Logmenu)
