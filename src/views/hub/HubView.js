import { Route, Switch, withRouter } from "react-router-dom";
import { withStyles, withTheme } from "@material-ui/core/styles";
import "./HubView.css";
import { Component } from "react";
import firebase from "firebase";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CharacterComp from "../../components/character/CharacterComp";

const styles = (theme) => ({
  hubview: {
    position: "absolute",
    width: "100%",
  },
  papercharacters: {
    position: "absolute",
    width: "75%",
    left: "12.5%",
    padding: "5px",
    display: "flex"
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
          <CharacterComp charType={"warlock"} />
          <div className={classes.characterdivider} />
          <CharacterComp charType={"titan"} />
          <div className={classes.characterdivider} />
          <CharacterComp charType={"hunter"} />
        </Paper>
      </div>
    );
  }
}
export default withTheme(withStyles(styles)(HubView));
