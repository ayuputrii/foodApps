import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Dimensions, Text, View, ScrollView} from 'react-native';
import style from './style';
import ListItemFood from '../ListItemFood';
import {useNavigation} from '@react-navigation/native';
import {FoodDummy1} from '../../../assets';

const InProgress = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <ScrollView>
        <ListItemFood
          rating={2}
          image={FoodDummy1}
          type="in-progress"
          items={2}
          price="2.000.000"
          name="Sop Bumal"
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ListItemFood
          rating={2}
          image={FoodDummy1}
          type="in-progress"
          items={2}
          price="2.000.000"
          name="Sop Bumal"
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </ScrollView>
    </View>
  );
};

const PastOrders = () => {
  const navigation = useNavigation();
  return (
    <View style={style.container}>
      <ScrollView>
        <ListItemFood
          rating={2}
          image={FoodDummy1}
          type="past-orders"
          items={2}
          price="2.000.000"
          name="Sop Bumal"
          date="June 2, 12:20"
          status="Cancel"
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ListItemFood
          rating={2}
          image={FoodDummy1}
          type="past-orders"
          items={2}
          price="2.000.000"
          name="Sop Bumal"
          date="June 2, 12:20"
          onPress={() => navigation.navigate('FoodDetail')}
        />
        <ListItemFood
          rating={2}
          image={FoodDummy1}
          type="past-orders"
          items={2}
          price="2.000.000"
          name="Sop Bumal"
          date="June 2, 12:20"
          status="Cancel"
          onPress={() => navigation.navigate('FoodDetail')}
        />
      </ScrollView>
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const OrderTabSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'In Progress'},
    {key: '2', title: 'Past Orders'},
  ]);

  const renderScene = SceneMap({
    1: InProgress,
    2: PastOrders,
  });

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={style.indicatorStyle}
      tabStyle={style.tabStyle}
      style={style.styleTab}
      renderLabel={({route, focused, color}) => (
        <Text
          style={{
            fontFamily: 'Poppins-Medium',
            fontSize: 12,
            color: focused ? '#202020' : '#8D92A3',
            margin: 8,
          }}>
          {route.title}
        </Text>
      )}
    />
  );
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default OrderTabSection;
