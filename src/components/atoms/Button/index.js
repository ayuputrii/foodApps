import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';

const Button = ({
  labelButton,
  onPress,
  color = '#EFC700',
  textColor = '#020202',
}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      <View style={style.container(color)}>
        <Text style={style.text(textColor)}>{labelButton}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;
