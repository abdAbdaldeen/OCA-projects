import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {createStackNavigator} from '@react-navigation/stack';
import Profile from '../screens/Profile';
import Test from '../screens/Test';
import Home from '../screens/Home';
import Create from '../screens/Create';
import {horizontalAnimation} from '../Animations/animations';
import Settings from '../screens/Settings';
import QuestionsScreen from '../screens/QuestionsScreen';
import SingleQuestionScreen from '../screens/SingleQuestionScreen';
// import Pros from '../components/Pros';

const ProfileStack = createStackNavigator();
const HomeStack = createStackNavigator();
const CreateStack = createStackNavigator();
const SettingStack = createStackNavigator();

export const ProfileNavigator = ({navigation}) => {
  return (
    <ProfileStack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
      <ProfileStack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={30}
              color="#C5B079"
              underlayColor="none"
              backgroundColor="transparent"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
      <ProfileStack.Screen
        name="Test"
        component={Test}
        options={horizontalAnimation}
      />
    </ProfileStack.Navigator>
  );
};

export const HomeNavigator = ({navigation}) => {
  return (
    <HomeStack.Navigator
      screenOptions={(horizontalAnimation, {headerTitleAlign: 'center'})}>
      <HomeStack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={30}
              color="#C5B079"
              underlayColor="none"
              backgroundColor="transparent"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
      <HomeStack.Screen
        name="Questions"
        component={QuestionsScreen}
        title="Questions"
      />
      <HomeStack.Screen
        name="SingleQustion"
        component={SingleQuestionScreen}
        title="SingleQustion"
      />
    </HomeStack.Navigator>
  );
};

export const CreateNavigator = ({navigation}) => {
  return (
    <CreateStack.Navigator
      screenOptions={(horizontalAnimation, {headerTitleAlign: 'center'})}>
      <CreateStack.Screen
        name="Create"
        component={Create}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={30}
              color="#C5B079"
              underlayColor="none"
              backgroundColor="transparent"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
    </CreateStack.Navigator>
  );
};
export const SettingsNavigator = ({navigation}) => {
  return (
    <SettingStack.Navigator
      screenOptions={(horizontalAnimation, {headerTitleAlign: 'center'})}>
      <SettingStack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerLeft: () => (
            <Icon.Button
              name="ios-menu"
              size={30}
              color="#C5B079"
              underlayColor="none"
              backgroundColor="transparent"
              onPress={() => navigation.openDrawer()}></Icon.Button>
          ),
        }}
      />
    </SettingStack.Navigator>
  );
};

export default ProfileNavigator;
