import React, { Component } from "react";
import { KeycloakType } from "./types";

interface UserInfoProps {
  keycloak: KeycloakType;
}

interface UserInfoState {
  name: string;
  email: string;
  id: string;
}

interface UserInfo {
  name: string;
  email: string;
  sub: string;
}

class UserInfo extends Component<UserInfoProps, UserInfoState> {
  constructor(props: UserInfoProps) {
    super(props);
    this.state = {
      name: "",
      email: "",
      id: "",
    };
    this.props.keycloak.loadUserInfo().then((userInfo: UserInfo) => {
      this.setState({
        name: userInfo.name,
        email: userInfo.email,
        id: userInfo.sub,
      });
    });
  }

  render() {
    return (
      <div className="UserInfo">
        <p>Name: {this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <p>ID: {this.state.id}</p>
      </div>
    );
  }
}
export default UserInfo;
