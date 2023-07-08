import { Component } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export function withRouter<T>(
  Component: new (props: T) => Component<any,any>
): (props: T | undefined) => JSX.Element {
  function ComponentWithRouterProp(props: T | undefined) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}
