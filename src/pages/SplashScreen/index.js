import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Logo} from '../../assets';
import style from './style';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 3000);
  });

  return (
    <View style={style.containerBody}>
      <Logo />
      <Text style={style.textBody}>FoodMarket</Text>
    </View>
  );
};

export default SplashScreen;
