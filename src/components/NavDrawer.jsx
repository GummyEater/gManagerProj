import { connect } from "react-redux";
import "./NavDrawer.scss";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

import { useTheme } from "@material-ui/core/styles";

function NavDrawer({ drawerOpen, setDrawerOpen }) {
  const theme = useTheme();

  return (
    <Drawer
      className={`NavDrawer`}
      variant="persistent"
      anchor="left"
      open={drawerOpen}
      classes={{
        paper: "NavDrawerPaper",
      }}
    >
      <div className={"Header"}>
        <IconButton
          onClick={() => setDrawerOpen(false)}
          className={"ChevronBtn"}
        >
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
}

export default NavDrawer;
