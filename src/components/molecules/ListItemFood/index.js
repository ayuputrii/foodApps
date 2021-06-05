import React from 'react';
import Rating from '../Rating';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import style from './style';

const ListItemFood = ({
  onPress,
  image,
  items,
  rating,
  type,
  price,
  name,
  date,
  status,
  paddingHorizontal = 24,
  paddingVertical = 2,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        return (
          <>
            <View style={style.viewContent}>
              <Text style={style.textMenuContent}>{name}</Text>
              <Text style={style.subTextMenuContent}>IDR {price}</Text>
            </View>
            <Rating rating={rating} />
          </>
        );
      case 'order-summary':
        return (
          <>
            <View style={style.viewContent}>
              <Text style={style.textMenuContent}>{name}</Text>
              <Text style={style.subTextMenuContent}>IDR {price}</Text>
            </View>
            <Text style={style.textItems}>{items} Items </Text>
          </>
        );
      case 'in-progress':
        return (
          <>
            <View style={style.viewContent}>
              <Text style={style.textMenuContent}>{name}</Text>
              <Text style={style.subTextMenuContent}>
                {items} items.IDR {price}
              </Text>
            </View>
          </>
        );
      case 'past-orders':
        return (
          <>
            <View style={style.viewContent}>
              <Text style={style.textMenuContent}>{name}</Text>
              <Text style={style.subTextMenuContent}>
                {items} items.IDR {price}
              </Text>
            </View>
            <View>
              <Text style={style.date}>{date}</Text>
              <Text style={style.status}>{status}</Text>
            </View>
          </>
        );
      default:
        return (
          <>
            <View style={style.viewContent}>
              <Text style={style.textMenuContent}>{name}</Text>
              <Text style={style.subTextMenuContent}>IDR {price}</Text>
            </View>
            <Rating />
          </>
        );
    }
  };
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={style.viewContainer(paddingHorizontal, paddingVertical)}>
        <Image source={image} style={style.imageContent} />
        {renderContent()}
      </View>
    </TouchableOpacity>
  );
};

export default ListItemFood;
