import { connect } from "react-redux";

import { beneficiaryList, fundTransfer } from "./action";

import FundTransfer from "./FundTransfer";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  beneficiaryUserList: state.beneficiary.beneficiaryList,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fundTransfer: (formData) => dispatch(fundTransfer(formData, ownProps)),
  beneficiaryList: () => dispatch(beneficiaryList(ownProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FundTransfer);
