import { connect } from "react-redux";
import Dashboard from "./Dashboard";
import { getDashboardList, searchOfficeWithFilter } from "./action";
const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  items: state.dashboard.items,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getDashboardList: () => dispatch(getDashboardList(ownProps)),
  searchOfficeWithFilter: (filter) =>
    dispatch(searchOfficeWithFilter(filter, ownProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
