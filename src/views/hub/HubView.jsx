import "./HubView.scss";
import { Component } from "react";

class HubView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { drawerOpen } = this.props;

    return (
      <div className={`HubView ${drawerOpen ? "draweropen" : "drawerclosed"}`}>
        DOOMFIST BUGS WILL BE ELIMATED
      </div>
    );
  }
}
export default HubView;
