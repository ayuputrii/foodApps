import React from 'react';
import {Text, View, Image} from 'react-native';
import style from './style';
import {ProfileDummy} from '../../../assets';

const HeaderProfile = () => {
  return (
    <View style={style.headerProfile}>
      <View style={style.flexColumn}>
        <Text style={style.title}>Food Market</Text>
        <Text style={style.subTitle}>Let's go some foods</Text>
      </View>
      <Image source={ProfileDummy} style={style.image} />
    </View>
  );
};

export default HeaderProfile;
