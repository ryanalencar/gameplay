import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.secondary100};
`;
export const Content = styled.View`
  margin-top: -40px;
  padding: 0px 50px;
`;
export const IllustrationImage = styled.Image`
  width: 100%;
  height: 360px;
`;
export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  font-size: 40px;
  margin-bottom: 16px;
`;
export const SubTitle = styled.Text`
  color: ${({ theme }) => theme.colors.heading};
  text-align: center;
  font-size: 15px;
  margin-bottom: 64px;
`;
