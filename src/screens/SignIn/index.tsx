import React from "react";
import { Image, Text, View } from "react-native";

import IllustrationImg from "../../assets/illustration.png";

export default function SignIn() {
  return (
    <View>
      <Text>SignIn Screen</Text>
      <Image source={IllustrationImg}></Image>
    </View>
  );
}
