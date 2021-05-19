import React from 'react';
import {View, Text, Image} from 'react-native';
import {IcStarOff, IcStarOn} from '../../../assets';
import style from './style';

const FoodCard = ({image, nameTitle}) => {
  return (
    <View style={style.container}>
      <Image source={image} style={style.image} />
      <View style={style.content}>
        <Text style={style.text}>{nameTitle}</Text>
        <View style={style.ratingContent}>
          <View style={style.starContent}>
            <IcStarOn />
            <IcStarOn />
            <IcStarOn />
            <IcStarOn />
            <IcStarOff />
          </View>
          <Text style={style.textRate}>4.5</Text>
        </View>
      </View>
    </View>
  );
};

export default FoodCard;
