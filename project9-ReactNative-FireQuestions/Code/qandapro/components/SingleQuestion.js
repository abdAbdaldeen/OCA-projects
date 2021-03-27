import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Card, Title, Paragraph} from 'react-native-paper';

const SingleHomeQuestion = ({question, votes, bool, body, textColor}) => {
  return (
    <View style={styles.container}>
      <Card style={styles.cardContainer}>
        <Card.Content>
          <Title style={{marginBottom: 10, color:'#C5B079'}}>{question}</Title>
          <View style={styles.vote}>
            <Paragraph style={{color:'#F9BF5E', fontWeight: "bold"}}>{votes}</Paragraph>
          </View>
          <Paragraph numberOfLines={1}>{body}</Paragraph>
        </Card.Content>
      </Card>
    </View>
  );
};

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
    top: 10,
    right: 10,
  },
});

export default SingleHomeQuestion;
