import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {Formik} from 'formik';
import {useTheme} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import {AuthUserContext} from '../contexts/AuthUserProvider';
import AnimatedScrollView from '../components/AnimatedScrollView';
import {Picker} from '@react-native-picker/picker';
export default function addQuestions() {
  const {user} = useContext(AuthUserContext);
  const [categories, setCategories] = useState([]);
  const getGroups = async () => {
    setCategories([]);
    const snapshot = await firestore().collection('groups').get();
    return snapshot.docs.map(doc => {
      setCategories(prev => [...prev, {...doc.data(), id: doc.id}]);
    });
  };
  // =================
  const addQuestion = async values => {
    firestore()
      .collection('questions')
      .add({
        votes: 0,
        uid: user.uid,
        body: values.body,
        title: values.title,
        groupID: selectedValue,
      })
      .then(() => {
        firestore()
          .collection('coins')
          .doc(user.uid)
          .update({coins: firestore.FieldValue.increment(-5)});
        Alert.alert('Done', 'Your question has been added succesfully', [
          {Text: 'Ok'},
        ]);
      });
  };
  // =================
  useEffect(() => {
    getGroups();
    console.log(user);
  }, []);

  const {colors} = useTheme();
  const [selectedValue, setSelectedValue] = useState();

  return (
    <AnimatedScrollView
      style={[styles.container, {backgroundColor: colors.background}]}>
      <View>
        <Text style={[styles.header, {color: '#F9BF5E'}]}>
          Add new question
        </Text>
        <Text style={[styles.subHeader, {color: colors.text}]}>
          You can add questions using the form below.
        </Text>
      </View>
      <Formik
        initialValues={{
          title: '',
          body: '',
        }}
        onSubmit={(values, actions) => {
          addQuestion(values);
          actions.resetForm();
        }}>
        {({handleChange, handleSubmit, values}) => {
          return (
            <View style={styles.container}>
              <View>
                <View
                  style={[
                    styles.containerStyle,
                    {borderBottomColor: colors.text},
                  ]}>
                  <Text style={{color: '#C5B079', fontWeight: 'bold'}}>
                    Title
                  </Text>
                  <TextInput
                    style={[styles.input, {color: colors.text}]}
                    onChangeText={handleChange('title')}
                    value={values.title}
                  />
                </View>

                <View
                  style={[
                    styles.containerStyle,
                    {borderBottomColor: colors.text},
                  ]}>
                  <Text style={{color: '#C5B079', fontWeight: 'bold'}}>
                    Question Context
                  </Text>
                  <TextInput
                    multiline={true}
                    style={[styles.input, {color: colors.text}]}
                    onChangeText={handleChange('body')}
                    value={values.body}
                  />
                </View>

                <View
                  style={[
                    styles.containerStyle,
                    {borderBottomColor: colors.text},
                  ]}>
                  <Text style={{color: '#C5B079', fontWeight: 'bold'}}>
                    Category
                  </Text>
                  <Picker
                    selectedValue={selectedValue}
                    style={styles.dropDownStyle}
                    onValueChange={(itemValue, itemIndex) =>
                      setSelectedValue(itemValue)
                    }>
                    {categories.map(category => (
                      <Picker.Item
                        key={category.id}
                        color="grey"
                        label={category.name}
                        value={category.id}
                      />
                    ))}
                  </Picker>
                </View>
              </View>
              <View>
                <TouchableOpacity
                  onPress={handleSubmit}
                  style={styles.ButtonStyle}>
                  <Text style={styles.textStyle}>Add Question</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      </Formik>
    </AnimatedScrollView>
  );
}

const styles = StyleSheet.create({
  dropDownStyle: {
    padding: 10,
    marginVertical: 15,
  },

  ButtonStyle: {
    marginTop: 40,
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#C5B079',
  },
  textStyle: {
    textAlign: 'center',
    color: '#F6F2E7',
    fontSize: 20,
  },

  containerStyle: {
    marginVertical: 5,
    borderBottomWidth: 1,
  },
  input: {
    minHeight: 30,
    padding: 10,
  },

  container: {
    // backgroundColor: '#f3f3f3',
    padding: 10,
    paddingTop: 50,
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
    marginVertical: 10,
  },
  subHeader: {
    fontSize: 18,
    textAlign: 'center',
  },
});
