import React from 'react';

import ImageSticker from '../../assets/png/GroupDiningTable.png';
import { Container } from '../../shared/generals'
import { Circle, Image } from './home.styles';

import { View } from 'react-native';

export default function Home(){
  return(
    <Container>
      <View style={{alignItems:'center', marginTop: 30}}>
      <Circle
        colors={['#C4C4C4','#FFFFFF']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
      >
        <Image source={ImageSticker}/>
      </Circle>

      </View>
    </Container>
  )
}