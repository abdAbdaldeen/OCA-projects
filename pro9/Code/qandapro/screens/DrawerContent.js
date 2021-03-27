import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Drawer,
  Text,
  TouchableRipple,
  Switch,
} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome5';
import {logout} from '../components/Firebase/firebase';
import {useCustomTheme} from '../contexts/ThemeProvider';
import {AuthUserContext} from '../contexts/AuthUserProvider';
import auth from '@react-native-firebase/auth';

const DrawerContent = props => {
  const userAuth = auth().currentUser;
  const {coins} = useContext(AuthUserContext);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (userAuth != null) {
      setCurrentUser({
        name: userAuth.displayName,
        email: userAuth.email,
        photoURL: userAuth.photoURL,
        uid: userAuth.uid,
      });
    }
  }, []);
  const {toggleTheme} = useCustomTheme();
  async function handleSignOut() {
    try {
      await logout();
    } catch (error) {
      console.log(error);
    }
  }
  const paperTheme = useTheme();
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginVertical: 15}}>
              <Image
                style={styles.icon}
                source={require('../assets/flame.png')}
              />
              <Title style={[styles.title, {marginLeft: 20, marginTop: 15}]}>
                Fire Questions
              </Title>
            </View>
            <View
              style={{
                height: 0.8,
                backgroundColor: 'gray',
                marginRight: 15,
              }}></View>
          </View>
          <View style={styles.userInfoSection}>
            <View style={{flexDirection: 'row', marginTop: 15}}>
              <Avatar.Image
                source={{
                  uri: currentUser.photoURL,
                }}
                size={50}
                style={{background: 'none'}}
              />
              <View style={{marginLeft: 15, flexDirection: 'column'}}>
                <Title style={styles.title}>{currentUser.name}</Title>

                <Caption style={styles.caption}>
                  <IconF name="coins" color="gold" style={{paddingRight: 25}} />{' '}
                  {coins}
                </Caption>
              </View>
            </View>
          </View>
          <Drawer.Section title="Preferences">
            <TouchableRipple
              onPress={() => {
                toggleTheme();
              }}>
              <View style={styles.preference}>
                <Text>Dark Theme</Text>
                <View pointerEvents="none">
                  <Switch color="#F9BF5E" value={paperTheme.dark} />
                </View>
              </View>
            </TouchableRipple>
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          icon={({color, size}) => (
            <Icon name="exit-outline" color={color} size={size} />
          )}
          label="Sign Out"
          onPress={handleSignOut}
        />
      </Drawer.Section>
    </View>
  );
};
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  icon: {
    width: 60,
    height: 60,
    borderColor: 'white',
    alignSelf: 'center',
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    fontSize: 16,
    marginTop: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
  },
  paragraph: {
    fontWeight: 'bold',
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
  },
  preference: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
export default DrawerContent;
