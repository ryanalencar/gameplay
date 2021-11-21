import React from "react";
import { View } from "react-native";

import Profile from "../../components/Profile";

import { Header } from "./styles";

export default function Home() {
  return (
    <View>
      <Header>
        <Profile></Profile>
      </Header>
    </View>
  );
}
