import { connect } from "react-redux";

import { cashDeposit } from "./action";

import Deposit from "./Deposit";

const mapDispatchToProps = (dispatch, ownProps) => ({
  cashDeposit: (formData) => dispatch(cashDeposit(formData, ownProps)),
});

export default connect("", mapDispatchToProps)(Deposit);
