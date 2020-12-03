import { Route, Switch, withRouter } from "react-router-dom";
import { withStyles, withTheme } from "@material-ui/core/styles";
import { Component } from "react";
import firebase from "firebase";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const styles = (theme) => ({
  papercharacter: {
    padding: "5px",
    height: "100%",
    flexGrow: 1,
  },
  upper: {
    height: "calc(50% - 2.5px)",
  },
  lower: {
    marginTop: "5px",
    height: "calc(50% - 2.5px)",
  },
});

class CharacterComp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      charTypeProper: "Unknown",
    };
  }

  render() {
    const classes = this.props.classes;
    let { charType } = this.props;

    return (
      <div className={classes.papercharacter}>
        <Paper className={classes.upper}>
          <Typography variant="h6" component="h6" gutterBottom>
            {charType === undefined ? "Unknown" : (charType.charAt(0).toUpperCase() + charType.slice(1))}
          </Typography>
        </Paper>
        <Paper className={classes.lower}>
          <Typography variant="h6" component="h6" gutterBottom>
          {charType === undefined ? "Unknown" : (charType.charAt(0).toUpperCase() + charType.slice(1))} Loadouts
          </Typography>
        </Paper>
      </div>
    );
  }
}
export default withTheme(withStyles(styles)(CharacterComp));
