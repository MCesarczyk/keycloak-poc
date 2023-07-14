import { useEffect, useState } from 'react';
import { KeycloakType } from './types';
import { KeycloakResourceAccess, KeycloakRoles } from 'keycloak-js';

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
    name: '',
    email: '',
    id: '',
  });

  const [accessInfo, setAccessInfo] = useState<
    KeycloakResourceAccess | undefined
  >();

  useEffect(() => {
    setAccessInfo(keycloak?.tokenParsed);

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
      <p>Access info:</p>
      <ul>
        {accessInfo &&
          accessInfo['resource_access'] &&
          Object.entries(accessInfo['resource_access'])?.map(([key, value]) => (
            <li key={key}>
              {key}
              <ul>
                {value?.roles?.map((role: keyof KeycloakRoles) => (
                  <li key={role}>{role}</li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </div>
  );
};
