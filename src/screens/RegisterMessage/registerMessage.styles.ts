import styled from "styled-components/native";

export const Title = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-top: 30px;
  margin-bottom: 21px;
`;

export const InputName = styled.TextInput`
  width: 323px;
  height: 48px;
  padding-left: 15px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px;
`;

export const ViewInput = styled.View`
  align-items: center;
`;