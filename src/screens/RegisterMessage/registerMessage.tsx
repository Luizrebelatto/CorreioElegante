import React, { useState } from 'react';
import { Text } from 'react-native';
import { Container } from '../../shared/generals'
import { Title, InputName, ViewInput, Content } from './registerMessage.styles';


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
      <Content></Content>
    </Container>
  )
}