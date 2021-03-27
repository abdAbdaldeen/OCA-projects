import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import DrawerContent from '../screens/DrawerContent';
import {SettingsNavigator} from './StackNavigations';
import {useCustomTheme} from '../contexts/ThemeProvider';
import Spinner from '../components/Spinner';

const Drawer = createDrawerNavigator();

export default function AppStack() {
  const {isLoadingTheme} = useCustomTheme();

  if (isLoadingTheme) return <Spinner />;

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Homes" component={TabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsNavigator} />
    </Drawer.Navigator>
  );
}
