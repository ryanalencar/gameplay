import React from "react";
import { TouchableOpacityProps } from "react-native";

import { ButtonTitle, ButtonWrapper, Icon, IconWrapper } from "./styles";
import DiscordImg from "../../assets/discord.png";

interface IButtonIconProps extends TouchableOpacityProps {
  title: string;
}

export default function ButtonIcon({ title, ...rest }: IButtonIconProps) {
  return (
    <ButtonWrapper {...rest}>
      <IconWrapper>
        <Icon source={DiscordImg} />
      </IconWrapper>
      <ButtonTitle>{title}</ButtonTitle>
    </ButtonWrapper>
  );
}
