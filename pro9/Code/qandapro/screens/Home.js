import React, {useEffect, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import VirtualizedView from '../components/virtualizedView';
import {useTheme} from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';
import SingleQuestion from '../components/SingleQuestion';
import Spinner from '../components/Spinner';

const Home = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const getGroups = async () => {
    setCategories([]);
    const snapshot = await firestore().collection('groups').get();
    return snapshot.docs.map(doc => {
      setCategories(prev => [...prev, {...doc.data(), id: doc.id}]);
    });
  };

  const [questions, setQuestions] = useState([]);
  const getQuestions = async () => {
    setQuestions([]);
    const snapshot = await firestore()
      .collection('questions')
      .orderBy('votes', 'desc')
      .limit(7)
      .get();
    return snapshot.docs.map(doc => {
      setQuestions(prev => [...prev, {...doc.data(), id: doc.id}]);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    getGroups();
    getQuestions();
  }, []);

  const {colors} = useTheme();
  return (
    <VirtualizedView>
      <View style={styles.container}>
        <Text
          style={[
            styles.header,
            {color: '#F9BF5E', borderColor: colors.border},
          ]}>
          Explore
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          // pagingEnabled={true}
          legacyImplementation={false}
          keyExtractor={item => item.id}
          data={categories}
          renderItem={({item}) => (
            <View style={styles.CardContainer}>
              <TouchableWithoutFeedback
                onPress={() => navigation.push('Questions', {...item})}>
                <View style={styles.card}>
                  <Image
                    style={styles.tinyLogo}
                    source={{
                      uri: item.img,
                    }}
                  />
                  <Text style={{color: colors.text, borderColor: '#fff'}}>
                    {item.name}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
            </View>
          )}
        />
        <Text
          style={[
            styles.header,
            {color: '#F9BF5E', borderColor: colors.border},
          ]}>
          Fire questions 🔥
        </Text>
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
                  onPress={() =>
                    navigation.navigate('SingleQustion', {...item})
                  }>
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
        )}
      </View>
    </VirtualizedView>
  );
};

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //   },
  card: {
    alignItems: 'center',
    margin: 7,
  },
  tinyLogo: {
    width: 100,
    height: 100,
    borderRadius: 7,
    marginBottom: 5,
  },
  header: {
    width: 200,
    marginLeft: 7,
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    // borderBottomWidth: 1,
    // textDecorationLine: 'underline',
  },
  CardContainer: {
    // borderBottomWidth: 1,
  },
  question: {
    // marginTop: 10,
    padding: 10,
  },
});

export default Home;
