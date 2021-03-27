import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import VirtualizedView from '../components/virtualizedView';
import {Card, Title, Paragraph, List, Text} from 'react-native-paper';
import {Formik} from 'formik';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

export default function SingleQuestion({navigation, route}) {
  const userAuth = auth().currentUser;
  const {id, votes, title, body} = route.params;
  const [answers, setAnswers] = useState([]);
  const getAnswers = async () => {
    setAnswers([]);
    const snapshot = await firestore()
      .collection('answers')
      .where('questionID', '==', id)
      .orderBy('votes', 'desc')
      .get();
    return snapshot.docs.map(doc => {
      setAnswers(prev => [...prev, {...doc.data(), key: doc.id, voteState: 0}]);
    });
  };
  const addAnswer = async values => {
    firestore()
      .collection('answers')
      .add({
        name: userAuth.displayName,
        votes: 0,
        uid: userAuth.uid,
        body: values.answer,
        questionID: id,
      })
      .then(doc => {
        console.log(doc);
        setAnswers(prev => [
          ...prev,
          {
            name: userAuth.displayName,
            votes: 0,
            uid: userAuth.uid,
            body: values.answer,
            questionID: id,
            key: doc.id,
            voteState: 0,
          },
        ]);
      });
  };
  const userCoins = (vote, id) => {
    firestore()
      .collection('coins')
      .doc(id)
      .update({coins: firestore.FieldValue.increment(vote)});
  };
  const votesQ = async vote => {
    await firestore()
      .collection('questions')
      .doc(id)
      .update({votes: firestore.FieldValue.increment(vote)});
  };
  const votesA = async (vote, id, uid) => {
    await firestore()
      .collection('answers')
      .doc(id)
      .update({votes: firestore.FieldValue.increment(vote)});
    userCoins(vote, uid);
  };
  useEffect(() => {
    getAnswers();
  }, []);
  const [question, setQuestion] = useState({
    id,
    title,
    body,
    reviews: votes,
    voteState: 0,
  });
  const {colors} = useTheme();

  return (
    <VirtualizedView>
      <View style={styles.container}>
        <Card style={{paddingVertical: 20}}>
          <Card.Content>
            <Title style={{marginBottom: 20, marginLeft: 50, color: '#C5B079'}}>
              {question.title}
            </Title>
            <View
              style={{
                position: 'absolute',
                top: -15,
                left: 0,
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  if (question.voteState == -1) {
                    votesQ(1);
                    setQuestion(prevState => ({
                      ...prevState,
                      voteState: 0,
                      reviews: prevState.reviews + 1,
                    }));
                    return 0;
                  }
                  if (question.voteState != 1) {
                    votesQ(1);
                    setQuestion(prevState => ({
                      ...prevState,
                      voteState: 1,
                      reviews: prevState.reviews + 1,
                    }));
                    console.log(question);
                  }
                }}>
                <List.Icon
                  color={question.voteState == 1 ? '#F9BF5E' : ''}
                  icon="arrow-up"
                />
              </TouchableOpacity>
              <Paragraph>{question.reviews}</Paragraph>
              <TouchableOpacity
                onPress={() => {
                  if (question.voteState == 1) {
                    votesQ(-1);
                    setQuestion(prevState => ({
                      ...prevState,
                      voteState: 0,
                      reviews: prevState.reviews - 1,
                    }));
                    return 0;
                  }
                  if (question.voteState != -1) {
                    votesQ(-1);
                    setQuestion(prevState => ({
                      ...prevState,
                      voteState: -1,
                      reviews: prevState.reviews - 1,
                    }));
                    console.log(question);
                  }
                }}>
                <List.Icon
                  color={question.voteState == -1 ? '#F9BF5E' : ''}
                  icon="arrow-down"
                />
              </TouchableOpacity>
            </View>
            <Paragraph style={{marginLeft: 50}}>{question.body}</Paragraph>
          </Card.Content>
        </Card>
        <Formik
          initialValues={{
            answer: '',
          }}
          onSubmit={(values, actions) => {
            console.log(values);
            addAnswer(values);
            actions.resetForm();
          }}>
          {({handleChange, handleSubmit, values}) => {
            //   console.log({ values });
            return (
              <View>
                <View>
                  <View style={styles.containerStyle}>
                    <Text>Your Answer</Text>
                    <TextInput
                      multiline={true}
                      style={{
                        color: colors.text,
                        minHeight: 40,
                        padding: 10,
                        borderBottomWidth: 0.5,
                        borderBottomColor: colors.text,
                      }}
                      onChangeText={handleChange('answer')}
                      value={values.answer}
                    />
                  </View>
                </View>
                <View style={{position: 'absolute', right: 0, bottom: 15}}>
                  <TouchableOpacity onPress={handleSubmit}>
                    <List.Icon icon="send-circle" color={'#F9BF5E'} />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        </Formik>
        <List.Section>
          <List.Subheader style={{color: '#C5B079'}}>Answers</List.Subheader>
          <FlatList
            data={answers}
            renderItem={({item}) => (
              <View>
                <List.Item
                  descriptionNumberOfLines={20}
                  title={item.name}
                  description={item.body}
                  left={() => (
                    <View style={{alignItems: 'center'}}>
                      <TouchableOpacity
                        onPress={() => {
                          let answersArray = [...answers];
                          if (item.voteState == -1) {
                            votesA(1, item.key, item.uid);
                            item.voteState = 0;
                            item.votes += 1;
                            return setAnswers(answersArray);
                          }
                          if (item.voteState != 1) {
                            votesA(1, item.key, item.uid);
                            item.voteState = 1;
                            item.votes += 1;
                          }
                          setAnswers(answersArray);
                          console.log(answers);
                        }}>
                        <List.Icon
                          color={item.voteState == 1 ? '#F9BF5E' : ''}
                          icon="arrow-up"
                        />
                      </TouchableOpacity>
                      <Paragraph>{item.votes}</Paragraph>
                      <TouchableOpacity
                        onPress={() => {
                          let answersArray = [...answers];
                          if (item.voteState == 1) {
                            votesA(-1, item.key, item.uid);
                            item.voteState = 0;
                            item.votes -= 1;
                            return setAnswers(answersArray);
                          }
                          if (item.voteState != -1) {
                            votesA(-1, item.key, item.uid);
                            item.voteState = -1;
                            item.votes -= 1;
                          }
                          setAnswers(answersArray);
                          console.log(answers);
                        }}>
                        <List.Icon
                          color={item.voteState == -1 ? '#F9BF5E' : ''}
                          icon="arrow-down"
                        />
                      </TouchableOpacity>
                    </View>
                  )}
                />
                <View style={styles.space}></View>
              </View>
            )}
          />
        </List.Section>
      </View>
    </VirtualizedView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // marginBottsom: 30,
  },
  space: {
    marginTop: 20,
    height: 1,
    backgroundColor: '#ccc',
  },
  BottonStyle: {
    // marginVertical: 10,
    backgroundColor: '#F9BF5E',
    paddingVertical: 5,
    borderRadius: 5,
  },
  textStyle: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  containerStyle: {
    marginVertical: 20,
  },
});
