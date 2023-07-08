import React, { Component } from "react";
import Keycloak from "keycloak-js";
import UserInfo from "./UserInfo";
import Logout from "./Logout";
import { KeycloakType } from "./types";

interface SecuredState {
  keycloak: KeycloakType | null;
  authenticated: boolean;
}

interface SecuredProps {}

class Secured extends Component<SecuredProps, SecuredState> {
  constructor(props: SecuredProps) {
    super(props);
    this.state = { keycloak: null, authenticated: false };
  }

  componentDidMount() {
    const keycloak = new Keycloak("/keycloak.json");
    keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
      this.setState({ keycloak: keycloak, authenticated: authenticated });
    });
  }

  render() {
    if (this.state.keycloak) {
      if (this.state.authenticated)
        return (
          <div>
            <p>
              This is a Keycloak-secured component of your application. You
              shouldn't be able to see this unless you've authenticated with
              Keycloak.
            </p>
            <UserInfo keycloak={this.state.keycloak} />
          <Logout keycloak={this.state.keycloak} history={undefined} />
          </div>
        );
      else return <div>Unable to authenticate!</div>;
    }
    return <div>Initializing Keycloak...</div>;
  }
}
export default Secured;
