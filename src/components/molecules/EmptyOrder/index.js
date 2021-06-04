import React from 'react';
import {View, Text} from 'react-native';
import {IlEmptyOrder} from '../../../assets';
import {Button, Gap} from '../../atoms';
import style from './style';

const EmptyOrder = ({navigation}) => {
  return (
    <View style={style.container}>
      <IlEmptyOrder />
      <Gap height={25} />
      <Text style={style.title}>You've made order</Text>
      <Gap height={5} />
      <Text style={style.subTitle}>Just stay at home while we are</Text>
      <Text style={style.subTitle}>preparing your best foods</Text>
      <Gap height={26} />
      <View style={style.buttonContainer}>
        <Button
          labelButton="Find Foods"
          onPress={() => navigation.replace('MainApp')}
        />
      </View>
    </View>
  );
};

export default EmptyOrder;
