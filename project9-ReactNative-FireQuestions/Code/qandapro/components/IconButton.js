import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons';

export default function IconButton({iconName, color, size, onPress, style}) {
  return (
    <TouchableOpacity style={[style]} onPress={onPress}>
      <Icon name={iconName} size={size} color={color} />
    </TouchableOpacity>
  );
}
