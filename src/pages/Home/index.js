import React from 'react';
import {View, ScrollView} from 'react-native';
import style from './style';
import {FoodDummy6, FoodDummy3, FoodDummy4, FoodDummy2} from '../../assets';
import {FoodCard, Gap, HeaderProfile, TabBarSection} from '../../components';

const Home = () => {
  return (
    <View style={style.container}>
      <HeaderProfile />
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={style.foodCardContainer}>
            <Gap width={40} />
            <FoodCard image={FoodDummy6} nameTitle="Dessert" />
            <FoodCard image={FoodDummy4} nameTitle="Coffe" />
            <FoodCard image={FoodDummy2} nameTitle="Food Dummy" />
            <FoodCard image={FoodDummy3} nameTitle="Food Dummy" />
          </View>
        </ScrollView>
      </View>
      <View style={style.tabContainer}>
        <TabBarSection />
      </View>
    </View>
  );
};

export default Home;
