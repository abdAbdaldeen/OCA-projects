import React, {useState, createContext, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const AuthUserContext = createContext({});

export const AuthUserProvider = ({children}) => {
  const userAuth = auth().currentUser;
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState();
  const getCoins = async () => {
    if (user) {
      firestore()
        .collection('coins')
        .doc(userAuth.uid)
        .onSnapshot(documentSnapshot => {
          setCoins(documentSnapshot.data().coins);
        });
    }
  };
  useEffect(() => {
    getCoins();
  }, []);
  return (
    <AuthUserContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        coins,
        getCoins,
      }}>
      {children}
    </AuthUserContext.Provider>
  );
};
