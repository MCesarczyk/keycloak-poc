import { KeycloakTokenParsed } from "keycloak-js";

export interface KeycloakType {
  logout: () => void;
  loadUserInfo: () => Promise<any>;
  tokenParsed?: KeycloakTokenParsed;
}
