export interface KeycloakType {
  logout: () => void;
  loadUserInfo: () => Promise<any>;
}