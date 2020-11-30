import { connect } from 'react-redux';

import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { makeStyles } from '@material-ui/core/styles';

import { setUserLoggedIn, setPageName, setLogmenuOpen, setNavdrawerOpen } from "../../redux/actions";

import firebase from 'firebase';

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: "200px",
        flexShrink: "0px",
    },
    drawerPaper: {
        width: "240px",
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
}));

function NavDrawer({ setNavdrawerOpen, navdraweropen }) {
    const classes = useStyles();

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={navdraweropen}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={() => setNavdrawerOpen(false)}>
                    <ChevronLeftIcon />
                </IconButton>
            </div>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Mail Test"} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Inbox Test"} />
                </ListItem>
            </List>
        </Drawer>
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

export default connect(mapStateToProps, mapDispatchToProps)(NavDrawer)
