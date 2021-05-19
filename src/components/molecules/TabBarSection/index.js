import React from 'react';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {Dimensions, Text, View} from 'react-native';
import style from './style';
import ListItemFood from '../ListItemFood';

const newTaste = () => {
  return (
    <View style={style.container}>
      <ListItemFood />
    </View>
  );
};

const Popular = () => <View style={{flex: 1, backgroundColor: 'white'}} />;
const Recomended = () => <View style={{flex: 1, backgroundColor: 'white'}} />;

const initialLayout = {width: Dimensions.get('window').width};

const TabBarSection = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recomended'},
  ]);

  const renderScene = SceneMap({
    1: newTaste,
    2: Popular,
    3: Recomended,
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
    />
  );
};

export default TabBarSection;
