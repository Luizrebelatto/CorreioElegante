import styled from "styled-components/native";
import { LinearGradient } from 'expo-linear-gradient';
import theme from "../../global/styles/theme";

export const Circle = styled(LinearGradient)`
  width: 308px;
  height: 308px;
  border-radius: 164px;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.Image`
  width: 227px;
  height: 252px;
  margin-left: 20px;
`;

export const WrapperCircle = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const Content = styled.View`
  width: 100%;
  height: 80%;
  margin-top: 40px;
  background-color: ${({ theme }) => theme.colors.background_light};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 37px;
  color: ${({ theme }) => theme.colors.text_title};
  text-align: center;
  margin-top: 25px;
`;

export const TextContent = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 18px;
  color: rgba(141, 141, 141, 0.74);
  font-weight: 500;
  text-align: center;
`;

export const TextView = styled.View`
    width: 80%;
`;

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