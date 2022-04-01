import React, { useState } from 'react';
import { View, Image, Text } from 'react-native';
import { Container } from '../../shared/generals'
import { Title, InputName, ViewInput, Content, TitleView, TitleInput, InputMessage, Button, ButtonText, Retangle, InputEmail, ViewButton, ListIcons, ViewImages, ViewIcon, ViewGradient } from './registerMessage.styles';

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

        <ViewImages>
        <ListIcons>
          <ViewGradient>
          <ViewIcon 
              colors={['#FFFFFF','#9CABC259']}
              start={{x: 0.5, y:0 }}
              end={{x: 0.5, y: 1}}
            >
            <Image source={FastFood} style={{width:50, height:55}}/>
          </ViewIcon>
          </ViewGradient>

          <ViewGradient>
          <ViewIcon 
              colors={['#FFFFFF','#9CABC259']}
              start={{x: 0.5, y:0 }}
              end={{x: 0.5, y: 1}}
            >
            <Image source={Beer} style={{width:50, height:55}}/>
          </ViewIcon>
          </ViewGradient>

          <ViewGradient>
          <ViewIcon 
              colors={['#FFFFFF','#9CABC259']}
              start={{x: 0.5, y:0 }}
              end={{x: 0.5, y: 1}}
            >
            <Image source={Champagne} style={{width:50, height:55}}/>
          </ViewIcon>
          </ViewGradient>

          <ViewGradient>
          <ViewIcon 
              colors={['#FFFFFF','#9CABC259']}
              start={{x: 0.5, y:0 }}
              end={{x: 0.5, y: 1}}
            >
            <Image source={Cheese} style={{width:50, height:55}}/>
          </ViewIcon>
          </ViewGradient>

          <ViewGradient>
          <ViewIcon 
              colors={['#FFFFFF','#9CABC259']}
              start={{x: 0.5, y:0 }}
              end={{x: 0.5, y: 1}}
            >
            <Image source={FrenchFries} style={{width:50, height:55}}/>
          </ViewIcon>
          </ViewGradient>

          <ViewGradient>
          <ViewIcon 
              colors={['#FFFFFF','#9CABC259']}
              start={{x: 0.5, y:0 }}
              end={{x: 0.5, y: 1}}
            >
            <Image source={lollipop} style={{width:50, height:55}}/>
          </ViewIcon>
          </ViewGradient>

          <ViewGradient>
          <ViewIcon 
              colors={['#FFFFFF','#9CABC259']}
              start={{x: 0.5, y:0 }}
              end={{x: 0.5, y: 1}}
            >
            <Image source={Wine} style={{width:50, height:55}}/>
          </ViewIcon>
          </ViewGradient>
          
        </ListIcons>
      </ViewImages>

      <TitleInput>Email</TitleInput>
      <ViewInput>
        <InputEmail
          placeholder='Digite o email'
          value={email}
          onChangeText={(value) => handleEmail(value)}
        />
      </ViewInput>

      <TitleInput>Surprenda</TitleInput>
      <ViewInput>
        <InputMessage
          placeholder='Solte o verbo'
          value={message}
          onChangeText={(value) => handleMessage(value)}
        />
      </ViewInput>

      <ViewButton>
        <Button activeOpacity={0.8}>
            <Retangle
              colors={['#E06C88','#B73058']}
              start={{x: 0.5, y:0 }}
              end={{x: 0.5, y: 1}}
            >
              <ButtonText>ENVIAR CORREIO</ButtonText>
            </Retangle>
        </Button>
      </ViewButton>
      
      </Content>
      
    </Container>
  )
}