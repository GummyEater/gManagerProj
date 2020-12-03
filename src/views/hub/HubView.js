import { Route, Switch, withRouter } from "react-router-dom";
import { withStyles, withTheme } from "@material-ui/core/styles";
import "./HubView.css";
import { Component } from "react";
import firebase from "firebase";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  hubview: {
    position: "absolute",
    width: "calc(100% - 20px)",
  },
  papercharacters: {
    position: "absolute",
    width: "75%",
    left: "12.5%",
    padding: "5px",
  },
  uppercharacters: {
    display: "flex",
    height: "50%",
    padding: "5px",
  },
  lowercharacters: {
    display: "flex",
    height: "50%",
    padding: "5px",
  },
  papercharacter: {
    padding: "5px",
    flexGrow: 1,
  },
  characterdivider: {
    flexGrow: 0.2,
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
        <Paper className={classes.papercharacters} id="papercharacters">
          <div className={classes.uppercharacters}>
            <Paper className={classes.papercharacter}>
              <Typography variant="h6" component="h6" gutterBottom>
                Warlock
              </Typography>
            </Paper>
            <div className={classes.characterdivider} />
            <Paper className={classes.papercharacter}>
              <Typography variant="h6" component="h6" gutterBottom>
                Titan
              </Typography>
            </Paper>
            <div className={classes.characterdivider} />
            <Paper className={classes.papercharacter}>
              <Typography variant="h6" component="h6" gutterBottom>
                Hunter
              </Typography>
            </Paper>
          </div>
          <div className={classes.lowercharacters}>
            <Paper className={classes.papercharacter}>
              <Typography variant="h6" component="h6" gutterBottom>
                Warlock Loadouts
              </Typography>
            </Paper>
            <div className={classes.characterdivider} />
            <Paper className={classes.papercharacter}>
              <Typography variant="h6" component="h6" gutterBottom>
                Titan Loadouts
              </Typography>
            </Paper>
            <div className={classes.characterdivider} />
            <Paper className={classes.papercharacter}>
              <Typography variant="h6" component="h6" gutterBottom>
                Hunter Loadouts
              </Typography>
            </Paper>
          </div>
        </Paper>
      </div>
    );
  }
}
export default withTheme(withStyles(styles)(HubView));
