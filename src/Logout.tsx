import { KeycloakType } from "./types";
import { useNavigate } from "react-router-dom";

interface LogoutProps {
  keycloak: KeycloakType;
}

export const Logout = ({ keycloak }: LogoutProps) => {
  const navigate = useNavigate();

  const logout = () => {
    navigate("/");
    keycloak.logout();
  };

  return <button onClick={logout}>Logout</button>;
};
