import React, { ReactNode } from "react";
import { Image, View } from "react-native";
import theme from "../../styles/theme";

import { AvatarGradient, AvatarImage } from "./styles";

interface IAvatarProps {
  urlImage: string;
}

export default function Avatar({ urlImage }: IAvatarProps) {
  const { secondary50, secondary70 } = theme.colors;
  return (
    <AvatarGradient colors={[secondary50, secondary70]}>
      <AvatarImage source={{ uri: urlImage }}></AvatarImage>
    </AvatarGradient>
  );
}
