import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {Text, View} from 'react-native';
import style from './style';

const Select = ({labelSelect}) => {
  return (
    <View>
      <Text style={style.label}>{labelSelect}</Text>
      <View style={style.input}>
        <Picker>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
      </View>
    </View>
  );
};

export default Select;
