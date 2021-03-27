import React from 'react';
import {View, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

const SingleQuestion = ({question, votes, bool, body}) => {
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Card.Content>
          <Title style={{marginBottom: 10}}>{question}</Title>
          <View style={styles.vote}>
            <Paragraph>{votes}</Paragraph>
          </View>
        </Card.Content>
      </Card>
    </View>
  );
};

export default SingleQuestion;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
  },
  cardContainer: {
    borderWidth: 0.5,
    // shadowColor: '#000',
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,

    // elevation: 5,
  },
  vote: {
    position: 'absolute',
    top: 25,
    right: 10,
  },
});
