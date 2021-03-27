import React, {useContext, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthUserContext} from '../contexts/AuthUserProvider';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import auth from '@react-native-firebase/auth';
import Spinner from '../components/Spinner';
import {Provider as PaperProvider} from 'react-native-paper';
import {useCustomTheme} from '../contexts/ThemeProvider';
import {StatusBar} from 'react-native';

const Routes = () => {
  const {theme} = useCustomTheme();
  const {user, setUser, isLoading, setIsLoading} = useContext(AuthUserContext);
  // const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // onAuthStateChanged returns an unsubscriber
    const unsubscribeAuth = auth().onAuthStateChanged(async authUser => {
      try {
        await (authUser ? setUser(authUser) : setUser(null));
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    });

    // unsubscribe auth listener on unmount
    return unsubscribeAuth;
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StatusBar barStyle="default" />
        {user ? <AppStack /> : <AuthStack />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Routes;
