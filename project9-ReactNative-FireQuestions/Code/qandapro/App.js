import 'react-native-gesture-handler';
import React from 'react';
import Providers from './navigation';

const ReactNative = require('react-native');
try {
  ReactNative.I18nManager.allowRTL(false);
} catch (e) {
  console.log(e);
}
export default function App() {
  return <Providers />;
}
