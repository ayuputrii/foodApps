import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import style from './style';
import {Button, Gap, Header, TextInput} from '../../components';

const SignIn = ({navigation}) => {
  return (
    <View style={style.page}>
      <Header nameHeader="SignIn" nameLabel="Find your best ever meal" />
      <View style={style.container}>
        <TextInput
          labelTextInput="Email Address"
          plaeceholderTextInput="Type your email address"
        />
        <Gap height={16} />
        <TextInput
          labelTextInput="Password"
          plaeceholderTextInput="Type your password"
        />
        <Gap height={24} />
        <Button labelButton="SignIn" />
        <Gap height={12} />
        <Button
          labelButton="Create New Account"
          color="#8D92A3"
          textColor="white"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;
