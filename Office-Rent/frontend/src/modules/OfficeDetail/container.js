import { connect } from "react-redux";

import OfficeDetail from "./OfficeDetail";

import { getOfficeDetail, addFurniture } from "./action";

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
  detail: state.officeDetails,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  getOfficeDetail: () =>
    dispatch(getOfficeDetail(ownProps.match.params.id, ownProps)),
  addFurniture: (furnitureData) =>
    dispatch(addFurniture(furnitureData, ownProps)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OfficeDetail);
