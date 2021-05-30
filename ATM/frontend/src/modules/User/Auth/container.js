import { connect } from "react-redux";
import Login from "./Login";

import { loginUser, formFieldChange, generateOtpNumber } from "./action";

const mapStateToProps = (state) => ({
  ...state.user.auth,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  loginUser: () => dispatch(loginUser(ownProps)),
  onFieldChange: (field, value) => dispatch(formFieldChange(field, value)),
  generateOtpNumber: () => dispatch(generateOtpNumber(ownProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
