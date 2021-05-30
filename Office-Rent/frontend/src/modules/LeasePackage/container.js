import { connect } from "react-redux";

import LeasePackage from "./LeasePackage";

import { getLeasePackageList, addLeasePackage } from "./action";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  packageList: state.leasePackageList.leasePackageList,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getLeasePackageList: (duration, term) =>
    dispatch(getLeasePackageList(duration, term, ownProps)),
  addLeasePackage: (leasePackageData, term) =>
    dispatch(addLeasePackage(leasePackageData, term, ownProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LeasePackage);
