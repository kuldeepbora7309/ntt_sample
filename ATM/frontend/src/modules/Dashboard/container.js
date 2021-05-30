import { connect } from "react-redux";
import Dashboard from "./Dashboard";

import { getDashboardList } from "./action";
const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  userBalance: state.dashboard.userBalance,
  atmBalance: state.dashboard.atmBalance,
  atmCurrencyStatus: state.dashboard.atmCurrencyStatus,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getDashboardList: () => dispatch(getDashboardList(ownProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
