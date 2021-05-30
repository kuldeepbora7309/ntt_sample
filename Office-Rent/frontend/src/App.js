import React from "react";
import { Provider } from "react-redux";
import PropTypes from "prop-types";
import Routes from "./routes";

const App = ({ store }) => {
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
  );
};

App.propTypes = {
  store: PropTypes.object.isRequired,
};

export default App;
