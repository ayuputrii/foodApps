import React from 'react';
import {Button, Gap, Header, ItemsValue, ListItemFood} from '../../components';
import {ScrollView, Text, View} from 'react-native';
import style from './style';
import {FoodDummy1} from '../../assets';

const OrderDetail = ({navigation}) => {
  const canGoback = navigation.canGoBack();
  return (
    <ScrollView>
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
            type="order-summary"
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
        <View style={style.content}>
          <Text style={style.label}>Order Status:</Text>
          <ItemsValue label="#FM222222" value="Paid" color="#1ABC9C" />
        </View>
        <View style={style.button}>
          <Button
            color="#D9435E"
            textColor="white"
            labelButton="Cancel Order"
            onPress={() => navigation.replace('OrderSuccess')}
          />
          <Gap height={20} />
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderDetail;
