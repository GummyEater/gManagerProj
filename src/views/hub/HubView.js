import { Route, Switch, withRouter } from "react-router-dom";
import { withStyles, withTheme } from "@material-ui/core/styles";
import "./HubView.css";
import { Component } from "react";
import firebase from "firebase";
import Paper from "@material-ui/core/Paper";

const styles = (theme) => ({
  hubview: {
    position: "absolute",
    width: "calc(100% - 20px)",
  },
  papercharacter: {
    position: "absolute",
    width: "50%",
    left: "25%"
  },
});

class HubView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const classes = this.props.classes;
    let {} = this.props;

    return (
      <div className={classes.hubview} id="hubview">
        <Paper className={classes.papercharacter} id="papercharacter">ez</Paper>
      </div>
    );
  }
}
export default withTheme(withStyles(styles)(HubView));
