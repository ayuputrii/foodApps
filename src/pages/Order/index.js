import React, {useState} from 'react';
import {View} from 'react-native';
import {EmptyOrder, Header, OrderTabSection} from '../../components';
import style from './style';

const Order = ({navigation}) => {
  const [isEmpty] = useState(false);
  return (
    <View style={style.container}>
      {isEmpty ? (
        <EmptyOrder />
      ) : (
        <View style={style.pageContent}>
          <Header nameHeader="Your Orders" nameLabel="Wait for the best meal" />
          <View style={style.pageTab}>
            <OrderTabSection />
          </View>
        </View>
      )}
    </View>
  );
};

export default Order;
