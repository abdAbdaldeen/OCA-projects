import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SearchBar} from 'react-native-elements';

export default class Search extends React.Component {
  state = {
    search: '',
  };

  updateSearch = search => {
    this.setState({search});
  };

  render() {
    const {search} = this.state;

    return (
      <SearchBar
        containerStyle={{backgroundColor: 'white'}}
        inputStyle={{backgroundColor: 'white'}}
        platform={Platform.OS}
        placeholder="Search"
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}
