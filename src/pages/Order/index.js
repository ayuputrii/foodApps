import React from 'react';
import {Text, View} from 'react-native';
import {EmptyOrder} from '../../components';
import style from './style';

const Order = () => {
  return (
    <View style={style.container}>
      <EmptyOrder />
    </View>
  );
};

export default Order;
