import React from 'react';
import {Button, Header, ItemsValue, ListItemFood} from '../../components';
import {Text, View} from 'react-native';
import style from './style';
import {FoodDummy1} from '../../assets';

const OrderSummary = ({navigation}) => {
  const canGoback = navigation.canGoBack();
  return (
    <View style={style.container}>
      <Header
        nameHeader="Payment"
        nameLabel="your deserve better meal"
        onBack={canGoback ? () => navigation.goBack() : false}
      />
      <View style={style.content}>
        <Text style={style.titleItem}>Item Ordered</Text>
        <ListItemFood
          image={FoodDummy1}
          items={20}
          name="Sop Bumal"
          price="200.000"
          paddingHorizontal={-20}
          paddingVertical={-2}
        />
        <Text style={style.label}>Detail Transaction</Text>
        <ItemsValue label="Cherry Healthy" value="IDR 18.390.000" />
        <ItemsValue label="Driver" value="IDR 50.000" />
        <ItemsValue label="Tax 10%" value="IDR 1.800.390" />
        <ItemsValue
          label="Total Price"
          value="IDR 390.803.000"
          color="#1ABC9C"
        />
      </View>
      <View style={style.content}>
        <Text style={style.titleItem}>Delivery To:</Text>
        <ItemsValue label="Name" value="Angga Risky" />
        <ItemsValue label="Phone No." value="0822 0619 9688" />
        <ItemsValue label="Address" value="Setra Duta Palima" />
        <ItemsValue label="House No." value="A5 Hook" />
        <ItemsValue label="City" value="Bandung" />
      </View>
      <View style={style.button}>
        <Button
          labelButton="Checkout Now"
          onPress={() => navigation.replace('OrderSuccess')}
        />
      </View>
    </View>
  );
};

export default OrderSummary;
