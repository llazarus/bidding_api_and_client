import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = (props) => {
  const { isAuth, component, ...restProps } = props;

  return <Route render={
    routeProps => {
      if (isAuth) {
        return React.createElement(component, routeProps);
      } else {
        return <Redirect to="/session/new" />
      }
    }} {...restProps} 
  />
}

export default AuthRoute;