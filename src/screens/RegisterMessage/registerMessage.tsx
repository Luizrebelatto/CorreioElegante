import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { Container } from '../../shared/generals'
import { Title, InputName, ViewInput, Content, TitleView, TitleInput, InputMessage } from './registerMessage.styles';

import FastFood from '../../assets/png/fast-food.png';
import Beer from '../../assets/png/beer.png';
import Champagne from '../../assets/png/champagne.png';
import Cheese from '../../assets/png/cheese.png';
import FrenchFries from '../../assets/png/french-fries.png';
import lollipop from '../../assets/png/lollipop.png';
import Wine from '../../assets/png/wine.png'

export default function RegisterMessage(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function handleName(text: string){
    setName(text);
  }

  function handleEmail(text: string){
    setEmail(text);
  }

  function handleMessage(text: string){
    setMessage(text);
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
        <TitleInput>Email</TitleInput>
      <View style={{alignItems: 'center'}}>
        <InputName
          placeholder='Digite o email'
          value={email}
          onChangeText={(value) => handleEmail(value)}
        />
      </View>

      <TitleInput>Surprenda</TitleInput>
      <View style={{alignItems: 'center'}}>
        <InputMessage
          placeholder='Solte o verbo'
          value={message}
          onChangeText={(value) => handleMessage(value)}
        />
      </View>
     

      </Content>
      
    </Container>
  )
}