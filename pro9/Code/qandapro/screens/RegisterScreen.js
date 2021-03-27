import React, {useContext, useState} from 'react';
import {
  StyleSheet,
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
import {registerWithEmail} from '../components/Firebase/firebase';
import FormErrorMessage from '../components/FormErrorMessage';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const reviewSchema = Yup.object({
  email: Yup.string()
    .required('Please enter a registered email')
    .email()
    .label('Email'),
  password: Yup.string()
    .required()
    .min(6, 'Password must have at least 6 characters')
    .label('Password'),
  name: Yup.string().required('Please enter a name').label('name'),
});

export default function RegisterScreen({navigation}) {
  const [matchPassword, setMatchPassword] = useState(false);
  const [registerError, setRegisterError] = useState('');

  function handleOnSignUp(email, password, name) {
    try {
      registerWithEmail(email, password, name);
    } catch (error) {
      setRegisterError(error.message);
    }
  }

  return (
    <SafeView style={styles.container}>
      <Formik
        initialValues={{email: '', password: '', passwordConfirm: '', name: ''}}
        validationSchema={reviewSchema}
        onSubmit={(values, actions) => {
          const {email, password, passwordConfirm, name} = values;

          if (password === passwordConfirm) {
            handleOnSignUp(email, password, name);
            setMatchPassword(false);
          } else {
            setMatchPassword(true);
          }
        }}>
        {props => (
          <View>
            {<FormErrorMessage error={registerError} visible={true} />}

            <View style={styles.inputContainer}>
              <Icon
                name="account"
                size={20}
                color={Colors.mediumGrey}
                style={styles.icon}
              />

              <TextInput
                style={styles.input}
                placeholderTextColor={Colors.mediumGrey}
                placeholder="Name"
                onChangeText={props.handleChange('name')}
                onBlur={props.handleBlur('name')}
                value={props.values.name}
                textContentType="username"
              />
            </View>
            <Text style={globalStyles.errorText}>
              {props.touched.name && props.errors.name}
            </Text>
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
            {/* <TextInput
              style={styles.input}
              secureTextEntry={true}
              minHeight={60}
              placeholder="password confirm"
              onChangeText={props.handleChange('passwordConfirm')}
              onBlur={props.handleBlur('passwordConfirm')}
              value={props.values.passwordConfirm}
            /> */}
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
                placeholder="Confirm password"
                onChangeText={props.handleChange('passwordConfirm')}
                onBlur={props.handleBlur('passwordConfirm')}
                value={props.values.passwordConfirm}
                textContentType="password"
              />
            </View>
            {matchPassword && (
              <Text style={globalStyles.errorText}>Passwords should match</Text>
            )}

            <AppButton onPress={props.handleSubmit} title="Register" />
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
