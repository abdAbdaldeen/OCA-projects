import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useTheme} from '@react-navigation/native';

const Test = () => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <Text style={(styles.text, {color: colors.text})}>Test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Test;
