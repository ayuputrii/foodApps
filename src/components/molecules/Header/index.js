import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import style from './style';
import {IcBack} from '../../../assets';

const Header = ({nameHeader, nameLabel, onBack}) => {
  return (
    <View style={style.container}>
      {onBack && (
        <TouchableOpacity onPress={onBack}>
          <View style={style.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View style={style.flexColumn}>
        <Text style={style.title}>{nameHeader}</Text>
        <Text style={style.subTitle}>{nameLabel}</Text>
      </View>
    </View>
  );
};

export default Header;
