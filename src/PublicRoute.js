import React from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { connect } from "react-redux";

const PublicRoute = ({
  component: Component,
  isLogin,
  loading,
  isRestricted,
  ...rest
}) => {
  const location = useLocation();

  if (isLogin === true && loading === false) {
    return (
      <Route {...rest}>
        <Component />
      </Route>
    );
  } else {
    return (
      <Route {...rest}>
        <Redirect to={{ pathname: "/login", state: { from: location } }} />
      </Route>
    );
  }
};

const mapStateToProps = (state) => ({
  isLogin: state.tech.isLogin,
  loading: state.tech.loading,
});

export default connect(mapStateToProps, null)(PublicRoute);
