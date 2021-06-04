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
      <Text style={style.title}>Yeay Completed</Text>
      <Gap height={5} />
      <Text style={style.subTitle}>Now you are able to order</Text>
      <Text style={style.subTitle}>some foods as a self-reward</Text>
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
