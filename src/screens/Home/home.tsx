import React from 'react';
import { View } from 'react-native';
import ImageSticker from '../../assets/png/GroupDiningTable.png';
import { Container } from '../../shared/generals'
import { Circle, Image, WrapperCircle, Content, Title, TextContent, Button, ButtonText, Retangle, TextView } from './home.styles';

export default function Home(){
  return(
    <Container>
      <WrapperCircle>
        <Circle
          colors={['#C4C4C4','#FFFFFF']}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 1}}
        >
          <Image source={ImageSticker}/>
        </Circle>
      </WrapperCircle>
      <Content>
        <Title>Surpreenda seu amor</Title>

        <TextView>
          <TextContent>Envie mensagens e presentes incríveis</TextContent>
        </TextView>
        
        <Button activeOpacity={0.8}>
          <Retangle
            colors={['#E06C88','#B73058']}
            start={{x: 0.5, y:0 }}
            end={{x: 0.5, y: 1}}
          >
            <ButtonText>COMEÇAR</ButtonText>
          </Retangle>
        </Button>
      </Content>
    </Container>
  )
}