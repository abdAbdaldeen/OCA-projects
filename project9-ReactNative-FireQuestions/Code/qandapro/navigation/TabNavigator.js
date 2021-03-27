import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from '../components/TabBar';
import {
  ProfileNavigator,
  CreateNavigator,
  HomeNavigator,
} from './StackNavigations';

const Tab = createBottomTabNavigator();
const TabNavigator = () => {
  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        initialParams={{icon: 'home'}}
      />
      <Tab.Screen
        name="Ask"
        component={CreateNavigator}
        initialParams={{icon: 'plus'}}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileNavigator}
        initialParams={{icon: 'user'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
