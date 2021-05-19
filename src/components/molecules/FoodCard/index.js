import React from 'react';
import {View, Text, Image} from 'react-native';
import Rating from '../Rating';
import style from './style';

const FoodCard = ({image, nameTitle}) => {
  return (
    <View style={style.container}>
      <Image source={image} style={style.image} />
      <View style={style.content}>
        <Text style={style.text}>{nameTitle}</Text>
        <Rating />
      </View>
    </View>
  );
};

export default FoodCard;
