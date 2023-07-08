import { useEffect, useState } from "react";
import { KeycloakType } from "./types";

interface UserInfoState {
  name: string;
  email: string;
  id: string;
}

interface KeycloakUserInfo {
  name: string;
  email: string;
  sub: string;
}

interface UserInfoProps {
  keycloak: KeycloakType;
}

export const UserInfo = ({ keycloak }: UserInfoProps) => {
  const [userInfo, setUserInfo] = useState<UserInfoState>({
    name: "",
    email: "",
    id: "",
  });

  useEffect(() => {
    keycloak.loadUserInfo().then((userInfo: KeycloakUserInfo) => {
      setUserInfo({
        name: userInfo.name,
        email: userInfo.email,
        id: userInfo.sub,
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="UserInfo">
      <p>Name: {userInfo.name}</p>
      <p>Email: {userInfo.email}</p>
      <p>ID: {userInfo.id}</p>
    </div>
  );
};
