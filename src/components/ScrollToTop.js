import React from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
      console.log("HOASDKSDLJ");
      console.log(this.props.location);
      console.log(prevProps.location);
      console.log(this.props.location.pathname);
      console.log(prevProps.location.pathname);

    if (this.props.location.pathname !== prevProps.location.pathname) {
        document.getElementById('scrollToTop').scrollIntoView();
    }
  }
  render() {
    return null
  }
}
export default withRouter(ScrollToTop);
