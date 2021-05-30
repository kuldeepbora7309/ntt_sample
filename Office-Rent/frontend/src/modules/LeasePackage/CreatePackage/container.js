import { connect } from "react-redux";

import CreatePackage from "./CreatePackage";

import { addPackage, formFieldChange, getOfficeList } from "./action";

const mapStateToProps = (state) => ({
  ...state.newLeasePackage,
  officeListing: state.dashboard.items,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getOfficeList: () => dispatch(getOfficeList(ownProps)),
  addPackage: () => dispatch(addPackage(ownProps)),
  onFieldChange: (field, value) => dispatch(formFieldChange(field, value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatePackage);
