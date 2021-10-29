import React from "react";

import { ButtonTitle, ButtonWrapper, Icon, IconWrapper } from "./styles";
import DiscordImg from "../../assets/discord.png";

export default function ButtonIcon() {
  return (
    <ButtonWrapper>
      <IconWrapper>
        <Icon source={DiscordImg} />
      </IconWrapper>
      <ButtonTitle>Entre com Discord</ButtonTitle>
    </ButtonWrapper>
  );
}
