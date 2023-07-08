import { useEffect, useState } from "react";
import Keycloak from "keycloak-js";
import { UserInfo } from "./UserInfo";
import { Logout } from "./Logout";
import { KeycloakType } from "./types";

interface SecuredState {
  keycloak: KeycloakType | null;
  authenticated: boolean;
}

export const Secured = () => {
  const [state, setState] = useState<SecuredState>({
    keycloak: null,
    authenticated: false,
  });

  useEffect(() => {
    const keycloak = new Keycloak("/keycloak.json");
    keycloak.init({ onLoad: "login-required" }).then((authenticated) => {
      setState({ keycloak: keycloak, authenticated: authenticated });
    });
  }, []);

  if (state.keycloak) {
    if (state.authenticated)
      return (
        <div>
          <p>
            This is a Keycloak-secured component of your application. You
            shouldn't be able to see this unless you've authenticated with
            Keycloak.
          </p>
          <UserInfo keycloak={state.keycloak} />
          <Logout keycloak={state.keycloak} />
        </div>
      );
    else return <div>Unable to authenticate!</div>;
  }
  return <div>Initializing Keycloak...</div>;
};
