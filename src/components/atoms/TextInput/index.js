import React from 'react';
import {Text, View, TextInput as InputText} from 'react-native';
import style from './style';

const TextInput = ({labelTextInput, plaeceholderTextInput}) => {
  return (
    <View>
      <Text style={style.label}>{labelTextInput}</Text>
      <InputText
        style={style.input}
        placeholder={plaeceholderTextInput}
        placeholderTextColor="gray"
      />
    </View>
  );
};

export default TextInput;
