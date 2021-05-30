import { connect } from "react-redux";

import { changePin } from "./action";

import ChangePin from "./ChangePin";

const mapDispatchToProps = (dispatch, ownProps) => ({
  changePin: (formData) => dispatch(changePin(formData, ownProps)),
});

export default connect("", mapDispatchToProps)(ChangePin);
