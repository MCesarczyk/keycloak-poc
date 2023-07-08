import { Component } from "react";
import { History } from "history";
import { KeycloakType } from "./types";
import { withRouter } from "./WithRouterHoc";

interface LogoutProps {
  history: History | undefined;
  keycloak: KeycloakType;
}

interface LogoutState {}

class Logout extends Component<LogoutProps, LogoutState> {
  logout() {
    this.props.history && this.props.history.push("/");
    this.props.keycloak.logout();
  }

  render() {
    return <button onClick={() => this.logout()}>Logout</button>;
  }
}
export default withRouter(Logout);
