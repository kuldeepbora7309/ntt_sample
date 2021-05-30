import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Error from "./Error";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  error: state.error
});

const mapDispatchToProps = () => ({
 
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Error)
);