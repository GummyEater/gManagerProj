import Navbar from "./components/Navbar";
import NavDrawer from "./components/NavDrawer";
import HubView from "./views/hub/HubView.jsx";
import { Route, Switch, withRouter } from "react-router-dom";
import { withStyles, withTheme } from "@material-ui/core/styles";
import "./App.scss";
import { Component } from "react";
import firebase from "firebase";

class App extends Component {
  constructor(props) {
    super(props);

    let { history } = this.props;

    this.state = {
      loggedIn: false,
      currentPage: "Hub",
      drawerOpen: false,
    };

    history.listen((location) => {
      switch (location.pathname.substring(1)) {
        case "":
          this.setState({ currentPage: "Hub" });
          break;
        case "loadouts":
          this.setState({ currentPage: "Loadouts" });
          break;
        case "vendors":
          this.setState({ currentPage: "Vendors" });
          break;
        default:
          this.setState({ currentPage: "Unknown Page" });
      }
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        var isAnonymous = user.isAnonymous;

        if (isAnonymous) {
          firebase
            .auth()
            .signInAnonymously()
            .then(() => {
              this.setState({ loggedIn: true });
            });
        }
      }
    });
  }

  componentDidMount() {
    switch (this.props.location.pathname.substring(1)) {
      case "":
        this.setState({ currentPage: "Hub" });
        break;
      case "loadouts":
        this.setState({ currentPage: "Loadouts" });
        break;
      case "vendors":
        this.setState({ currentPage: "Vendors" });
        break;
      default:
        this.setState({ currentPage: "Unknown Page" });
    }
  }

  render() {
    const hubview = () => {
      return <HubView drawerOpen={this.state.drawerOpen} />;
    };

    return (
      <div className="AppPrimary">
        <NavDrawer
          drawerOpen={this.state.drawerOpen}
          setDrawerOpen={(newDrawerState) =>
            this.setState({ drawerOpen: newDrawerState })
          }
        />

        <div
          className={`AppContent ${
            this.state.drawerOpen ? "draweropen" : "drawerclosed"
          }`}
        >
          <Switch>
            <Route
              path="/"
              component={hubview}
              drawerOpen={this.state.drawerOpen}
            />
          </Switch>
        </div>
        <Navbar
          currentPage={this.state.currentPage}
          loggedIn={this.state.loggedIn}
          drawerOpen={this.state.drawerOpen}
          setLoggedIn={(newLogState) =>
            this.setState({ loggedIn: newLogState })
          }
          setDrawerOpen={(newDrawerState) =>
            this.setState({ drawerOpen: newDrawerState })
          }
        />
      </div>
    );
  }
}
export default withRouter(App);
