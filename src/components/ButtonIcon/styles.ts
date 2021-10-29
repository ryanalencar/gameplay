import styled from "styled-components/native";

export const ButtonWrapper = styled.TouchableOpacity`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
`;
export const IconWrapper = styled.View`
  width: 56px;
  height: 56px;
  justify-content: center;
  align-items: center;
  border-right-width: 1;
  border-color: ${({ theme }) => theme.colors.line};
`;

export const Icon = styled.Image``;

export const ButtonTitle = styled.Text`
  flex: 1;
  color: ${({ theme }) => theme.colors.heading};
  font-size: 15px;
  text-align: center;
`;
