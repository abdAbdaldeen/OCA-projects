import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import gravatar from 'gravatar';
export const loginWithEmail = (email, password) =>
  auth().signInWithEmailAndPassword(email, password);

export const registerWithEmail = (email, password, name) => {
  console.log(name);
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(userCredentials => {
      if (userCredentials.user) {
        var url = gravatar.url(email, {protocol: 'https', s: '200', d: 'mp'});
        userCredentials.user
          .updateProfile({
            displayName: name,
            photoURL: url,
          })
          .then(function () {
            console.log('done');
            firestore()
              .collection('coins')
              .doc(userCredentials.user.uid)
              .set({coins: 20});
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    });
};

export const logout = () => auth().signOut();

export const passwordReset = email => auth.sendPasswordResetEmail(email);
