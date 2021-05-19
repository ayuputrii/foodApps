import React from 'react';
import {ScrollView, View} from 'react-native';
import style from './style';
import {Button, Gap, Header, Select, TextInput} from '../../components';

const SignupAddress = ({navigation}) => {
  const canGoback = navigation.canGoBack();
  return (
    <View style={style.page}>
      <Header
        nameHeader="Address"
        nameLabel="Make sure it's valid"
        onBack={canGoback ? () => navigation.goBack() : false}
      />
      <ScrollView>
        <View style={style.container}>
          <TextInput
            labelTextInput="Phone No."
            plaeceholderTextInput="Type your phone number"
          />
          <Gap height={16} />
          <TextInput
            labelTextInput="Address"
            plaeceholderTextInput="Type your address"
            multiline={true}
            numberOfLines={4}
            maxLength={40}
          />
          <Gap height={16} />
          <TextInput
            labelTextInput="House No."
            plaeceholderTextInput="Type your house number"
          />
          <Gap height={16} />
          <Select labelSelect="City" />
          <Gap height={24} />
          <Button
            labelButton="Sign Up Now"
            onPress={() => navigation.replace('SignupSuccess')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default SignupAddress;
