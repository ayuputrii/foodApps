import React from 'react';
import {FoodDummy1} from '../../../assets';
import Rating from '../Rating';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';

const ListItemFood = ({onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={style.viewContainer}>
        <Image source={FoodDummy1} style={style.imageContent} />
        <View style={style.viewContent}>
          <Text style={style.textMenuContent}>Soup Bumil</Text>
          <Text style={style.subTextMenuContent}>IDR 900.000</Text>
        </View>
        <Rating />
      </View>
    </TouchableOpacity>
  );
};

export default ListItemFood;
