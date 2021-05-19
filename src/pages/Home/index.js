import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import style from './style';
import {FoodDummy6, ProfileDummy} from '../../assets';
import {FoodCard, Gap} from '../../components';

const Home = () => {
  return (
    <View style={style.container}>
      <View style={style.headerProfile}>
        <View style={style.flexColumn}>
          <Text style={style.title}>Food Market</Text>
          <Text style={style.subTitle}>Let's go some foods</Text>
        </View>
        <Image source={ProfileDummy} style={style.image} />
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={style.foodCardContainer}>
          <Gap width={40} />
          <FoodCard image={FoodDummy6} nameTitle="Food Dummy" />
          <FoodCard image={FoodDummy6} nameTitle="Food Dummy" />
          <FoodCard image={FoodDummy6} nameTitle="Food Dummy" />
          <FoodCard image={FoodDummy6} nameTitle="Food Dummy" />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
