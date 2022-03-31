import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-top: 30px;
`;

export const InputName = styled.TextInput`
  width: 323px;
  height: 48px;
  padding-left: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`;

export const ViewInput = styled.View`
  margin-top: 21px;
  margin-bottom: 26px;
  align-items: center;
`;

export const Content = styled.View`
  width: 100%;
  height: 80%;
  background-color: ${({ theme }) => theme.colors.background_light};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const TitleView = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.grey_dark};
  text-align: center;
  margin-top: 20px;
`;

export const TitleInput = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.grey_dark};
  margin-left: 55px;
  margin-top: 20px;
`

export const Button = styled.TouchableOpacity``;

export const Retangle = styled(LinearGradient)`
  width: 295px;
  height: 60px;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  font-size: 20px;
`;

export const InputMessage = styled.TextInput`
  width: 323px;
  height: 95px;
  padding-left: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`