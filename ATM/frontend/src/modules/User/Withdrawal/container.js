import { connect } from "react-redux";

import { withdrawal } from "./action";

import Withdrawal from "./Withdrawal";

const mapDispatchToProps = (dispatch, ownProps) => ({
  withdrawal: (formData) => dispatch(withdrawal(formData, ownProps)),
});

export default connect("", mapDispatchToProps)(Withdrawal);
