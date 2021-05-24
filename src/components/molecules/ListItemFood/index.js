import React from 'react';
import Rating from '../Rating';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';

const ListItemFood = ({
  onPress,
  image,
  items,
  rating,
  paddingHorizontal = 24,
  paddingVertical = 2,
}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={style.viewContainer(paddingHorizontal, paddingVertical)}>
        <Image source={image} style={style.imageContent} />
        <View style={style.viewContent}>
          <Text style={style.textMenuContent}>Soup Bumil</Text>
          <Text style={style.subTextMenuContent}>IDR 900.000</Text>
        </View>
        {items && !rating && (
          <Text style={style.textItems}>{items} Items </Text>
        )}
        {rating && !items && <Rating />}
      </View>
    </TouchableOpacity>
  );
};

export default ListItemFood;
