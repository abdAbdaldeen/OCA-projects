import React, {useContext, useState} from 'react';
import {
  StyleSheet,
  Button,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {globalStyles} from '../styles/global';
import {Formik} from 'formik';
import * as Yup from 'yup';
import AppButton from '../components/AppButton';
import Colors from '../utils/colors';
import SafeView from '../components/SafeView';
import {loginWithEmail} from '../components/Firebase/firebase';
import FormErrorMessage from '../components/FormErrorMessage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const reviewSchema = Yup.object({
  email: Yup.string()
    .required('Please enter a registered email')
    .email()
    .label('Email'),
});

export default function LoginScreen({navigation}) {
  // const {login, loginWithEmail} = useContext(AuthUserContext);
  const [loginError, setLoginError] = useState('');

  async function handleOnLogin(values) {
    const {email, password} = values;

    try {
      await loginWithEmail(email, password);
    } catch (error) {
      if (
        error.message ===
        '[auth/user-not-found] There is no user record corresponding to this identifier. The user may have been deleted.'
      ) {
        setLoginError('Invalid Email');
        console.log(error.message);
      } else if (
        error.message ===
        '[auth/wrong-password] The password is invalid or the user does not have a password.'
      ) {
        setLoginError('Wrong email or password');
      } else {
        setLoginError('Login error');
      }
    }
  }
  return (
    <SafeView style={styles.container}>
      <Formik
        initialValues={{email: '', password: ''}}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          handleOnLogin(values);
        }}>
        {props => (
          <View>
            {<FormErrorMessage error={loginError} visible={true} />}

            <View style={styles.inputContainer}>
              <Icon
                name="email"
                size={20}
                color={Colors.mediumGrey}
                style={styles.icon}
              />

              <TextInput
                style={styles.input}
                placeholderTextColor={Colors.mediumGrey}
                placeholder="Email"
                onChangeText={props.handleChange('email')}
                onBlur={props.handleBlur('email')}
                value={props.values.email}
                textContentType="emailAddress"
              />
            </View>
            {/* only if the left value is a valid string, will the right value be displayed */}
            <Text style={globalStyles.errorText}>
              {props.touched.email && props.errors.email}
            </Text>

            <View style={styles.inputContainer}>
              <Icon
                name="lock"
                size={20}
                color={Colors.mediumGrey}
                style={styles.icon}
              />

              <TextInput
                style={styles.input}
                placeholderTextColor={Colors.mediumGrey}
                secureTextEntry={true}
                placeholder="Password"
                onChangeText={props.handleChange('password')}
                onBlur={props.handleBlur('password')}
                value={props.values.password}
                textContentType="password"
              />
            </View>
            <Text style={globalStyles.errorText}>
              {props.touched.password && props.errors.password}
            </Text>

            <AppButton onPress={props.handleSubmit} title="Login" />
          </View>
        )}
      </Formik>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}>
        <Icon name="keyboard-backspace" size={30} color="black" />
      </TouchableOpacity>
    </SafeView>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#fff',
  },
  input: {
    borderColor: '#ddd',
    padding: 10,
    fontSize: 18,
    borderRadius: 25,
    color: '#333',
    backgroundColor: '#f9f9f9',
    width: '100%',
  },
  icon: {
    marginRight: 10,
  },
  inputContainer: {
    backgroundColor: Colors.lightGrey,
    borderRadius: 25,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  backButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
});
