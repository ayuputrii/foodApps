import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {
  IcHomeOff,
  IcHomeOn,
  IcOrderOff,
  IcOrderOn,
  IcProfileOff,
  IcProfileOn,
} from '../../../assets';
import style from './style';

const BottomNavigation = ({state, descriptors, navigation}) => {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  const Icon = ({label, focus}) => {
    switch (label) {
      case 'Home':
        return focus ? <IcHomeOn /> : <IcHomeOff />;
      case 'Order':
        return focus ? <IcOrderOn /> : <IcOrderOff />;
      case 'Profile':
        return focus ? <IcProfileOn /> : <IcProfileOff />;
      default:
        return <IcOrderOn />;
    }
  };

  return (
    <View style={style.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Icon label={label} focus={isFocused} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default BottomNavigation;
