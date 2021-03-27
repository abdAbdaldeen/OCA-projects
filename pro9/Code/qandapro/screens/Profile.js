import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Modal,
  Pressable,
  TextInput,
  FlatList,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';
import {useTheme} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {AuthUserContext} from '../contexts/AuthUserProvider';
import SingleQuestion from '../components/SingleQuestion';
import firestore from '@react-native-firebase/firestore';
import VirtualizedView from '../components/virtualizedView';

export default function Profile({navigation}) {
  const userAuth = auth().currentUser;
  const {coins, getCoins} = useContext(AuthUserContext);
  const {colors} = useTheme();
  const [modalVisible, setModalVisible] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [questions, setQuestions] = useState([]);
  const getQuestions = async () => {
    setQuestions([]);
    const snapshot = await firestore()
      .collection('questions')
      .where('uid', '==', userAuth.uid)
      .get();
    return snapshot.docs.map(doc => {
      setQuestions(prev => [...prev, {...doc.data(), id: doc.id}]);
    });
  };

  const updateProfile = name => {
    userAuth
      .updateProfile({
        displayName: name,
      })
      .then(function () {
        const userAuth = auth().currentUser;
        if (userAuth != null) {
          setCurrentUser({
            name: userAuth.displayName,
            email: userAuth.email,
            photoURL: userAuth.photoURL,
            uid: userAuth.uid,
          });
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    if (userAuth != null) {
      setCurrentUser({
        name: userAuth.displayName,
        email: userAuth.email,
        photoURL: userAuth.photoURL,
        uid: userAuth.uid,
      });
      console.log(userAuth.photoURL);
    }
    getQuestions();
    getCoins();
  }, []);
  return (
    <VirtualizedView>
      <View style={styles.header}></View>

      <Image style={styles.avatar} source={{uri: currentUser.photoURL}} />

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Edit your infomation</Text>

              <Formik
                initialValues={{
                  name: currentUser.name,
                }}
                onSubmit={(values, actions) => {
                  setModalVisible(!modalVisible);
                  updateProfile(values.name);
                  console.log(values);
                  actions.resetForm();
                }}>
                {({handleChange, handleSubmit, values}) => {
                  //   console.log({ values });
                  return (
                    <View style={styles.container}>
                      <View>
                        <View style={styles.containerStyle}>
                          <Text>Name</Text>
                          <TextInput
                            style={styles.input}
                            onChangeText={handleChange('name')}
                            value={values.name}
                          />
                        </View>
                      </View>
                      <View style={{flexDirection: 'row'}}>
                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => setModalVisible(!modalVisible)}>
                          <Text style={styles.textStyle}>Cancle</Text>
                        </Pressable>

                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={handleSubmit}>
                          <Text style={styles.textStyle}>Save</Text>
                        </Pressable>
                      </View>
                    </View>
                  );
                }}
              </Formik>
            </View>
          </View>
        </Modal>
        <TouchableOpacity
          style={[styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Icon name="user-edit" size={25} color={colors.text} />
        </TouchableOpacity>
      </View>

      <View style={styles.bodyContent}>
        <Text style={{color: colors.text, fontSize: 22, fontWeight: '600'}}>
          {currentUser.name}
        </Text>
        <Text style={styles.info}>{currentUser.email}</Text>
        <Icon name="coins" size={25} color="#F9BF5E" />
        <Text style={{color: '#F9BF5E', marginBottom: 20}}>{coins}</Text>
      </View>
      <View
        style={{
          width: '90%',
          height: 1,
          backgroundColor: '#C4AF78',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: 20,
        }}></View>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          textAlign: 'center',
          color: '#C5B078',
        }}>
        Your recent questions
      </Text>
      <View style={styles.question}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.id}
          data={questions}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('SingleQustion', {...item})}>
              <SingleQuestion
                question={item.title}
                votes={item.votes}
                bool={false}
                body={item.body}
                textColor={colors.text}
              />
            </TouchableOpacity>
          )}
        />
      </View>
    </VirtualizedView>
  );
}

const styles = StyleSheet.create({
  question: {
    // marginTop: 10,
    padding: 10,
  },
  header: {
    backgroundColor: '#C5B079',
    height: 150,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: '#F6F2E7',
    alignSelf: 'center',
    marginTop: '-15%',
  },

  bodyContent: {
    marginTop: 10,
    alignItems: 'center',
  },

  info: {
    fontSize: 16,
    color: 'grey',
    marginBottom: 25,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#F6F2E7',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    position: 'absolute',
    right: 15,
    top: -40,
  },
  buttonClose: {
    width: 100,
    margin: 5,
    backgroundColor: '#C5B079',
  },
  textStyle: {
    color: '#F6F2E7',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  BottonStyle: {
    marginVertical: 10,
    backgroundColor: 'blue',
    paddingVertical: 10,
    borderRadius: 5,
  },
  textStyle: {
    textAlign: 'center',
    color: '#F6F2E7',
    fontSize: 20,
  },

  containerStyle: {
    marginVertical: 5,
  },
  input: {
    borderBottomWidth: 1,
    minHeight: 40,
    padding: 10,
  },
});
