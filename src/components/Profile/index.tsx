import React from "react";
import { Text, View } from "react-native";

import Avatar from "../Avatar";

import { Greeting, Message, ProfileContainer, User, Username } from "./styles";

export default function Profile() {
  return (
    <ProfileContainer>
      <Avatar urlImage="https://github.com/ryanalencar.png" />
      <View>
        <User>
          <Greeting>Olá,</Greeting>
          <Username>Ryan</Username>
        </User>
        <Message>Hoje é dia de vitória</Message>
      </View>
    </ProfileContainer>
  );
}
