import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {Searchbar} from 'react-native-paper';

import SingleQuestion from '../components/SingleQuestion';
import firestore from '@react-native-firebase/firestore';
import VirtualizedView from '../components/virtualizedView';
import Spinner from '../components/Spinner';

export default function QuestionScreen({navigation, route}) {
  const {name, id} = route.params;
  const [questions, setQuestions] = useState([]);
  const [questionsTemp, setQuestionsTemp] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getQuestions = async () => {
    setQuestions([]);
    const snapshot = await firestore()
      .collection('questions')
      .where('groupID', '==', id)
      .get();
    return snapshot.docs.map(doc => {
      setQuestions(prev => [...prev, {...doc.data(), id: doc.id}]);
      setQuestionsTemp(prev => [...prev, {...doc.data(), id: doc.id}]);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    getQuestions();
    console.log(questions);
  }, []);
  const [searchQuery, setSearchQuery] = useState('');
  const setTempQ = async () => {
    setQuestions(questionsTemp);
    console.log('im done');
  };
  const onChangeSearch = async query => {
    setSearchQuery(query);
    setTempQ().then(() => {
      console.log('then');
      let temp = questions;
      temp = questions.filter(question => {
        console.log(question.title);
        console.log('--------');
        return question.title.match(query, 'ig');
      });
      setQuestions(temp);
      console.log(temp);
      setQuestions(temp);
    });
  };
  return (
    <VirtualizedView>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      {isLoading ? (
        <Spinner />
      ) : (
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
                />
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </VirtualizedView>
  );
}

const styles = StyleSheet.create({
  question: {
    marginTop: 10,
    padding: 20,
  },
});
