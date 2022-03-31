import React, { useState } from 'react';
import { Text } from 'react-native';
import { Container } from '../../shared/generals'
import { Title, InputName, ViewInput, Content, TitleView } from './registerMessage.styles';

import FastFood from '../../assets/png/fast-food.png';
import Beer from '../../assets/png/beer.png';
import Champagne from '../../assets/png/champagne.png';
import Cheese from '../../assets/png/cheese.png';
import FrenchFries from '../../assets/png/french-fries.png';
import lollipop from '../../assets/png/lollipop.png';
import Wine from '../../assets/png/wine.png'

export default function RegisterMessage(){
  const [name, setName] = useState('');

  function handleName(text: string){
    setName(text)
  }
  return(
    <Container>
      <Title>Você gostaria de se identificar?</Title>
      <ViewInput>
        <InputName
          placeholder='Digite seu nome ou apelido'
          value={name}
          onChangeText={(value) => handleName(value)}
        />
      </ViewInput>
      <Content>
        <TitleView>Escolha uma refeição abaixo</TitleView>

      </Content>
      
    </Container>
  )
}