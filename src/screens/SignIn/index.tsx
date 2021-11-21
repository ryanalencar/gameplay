import React from "react";
import { Image, Text, View } from "react-native";

import IllustrationImg from "../../assets/illustration.png";
import ButtonIcon from "../../components/ButtonIcon";
import {
  Container,
  Content,
  IllustrationImage,
  SubTitle,
  Title,
} from "./styles";

export default function SignIn() {
  return (
    <Container>
      <IllustrationImage source={IllustrationImg} resizeMode="stretch" />
      <Content>
        <Title>
          Conecte-se {"\n"}e organize suas{"\n"}
          jogatinas{"\n"}
        </Title>
        <SubTitle>
          Crie grupos para jogar seus games{"\n"}
          favoritos com seus amigos
        </SubTitle>
        <ButtonIcon title="Entrar com Discord" activeOpacity={0.8} />
      </Content>
    </Container>
  );
}
