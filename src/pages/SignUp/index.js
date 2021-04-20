import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';
import {Button, Gap, Header, TextInput} from '../../components';

const SignUp = ({navigation}) => {
  const canGoback = navigation.canGoBack();
  return (
    <View style={style.page}>
      <Header
        nameHeader="SignUp"
        nameLabel="Register and eat"
        onBack={canGoback ? () => navigation.goBack() : false}
      />
      <View style={style.container}>
        <View style={style.photo}>
          <View style={style.borderPhoto}>
            <View style={style.photoContainer}>
              <Text style={style.addPhoto}>Add Photo</Text>
            </View>
          </View>
        </View>
        <TextInput
          labelTextInput="Full Name"
          plaeceholderTextInput="Type your full name"
        />
        <Gap height={16} />
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
        <TouchableOpacity>
          <Button
            labelButton="Continue"
            onPress={() => navigation.navigate('SignupAddress')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;
