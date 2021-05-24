import React from 'react';
import {View, Text} from 'react-native';
import style from './style';

const ItemsValue = ({label, value, color = '#22211f'}) => {
  return (
    <View style={style.content}>
      <Text style={style.label}>{label}</Text>
      <Text style={style.value(color)}>{value}</Text>
    </View>
  );
};

export default ItemsValue;
