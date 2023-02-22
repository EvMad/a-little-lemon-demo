import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RootNavigator from './navigators/RootNavigator';
import { Ionicons } from '@expo/vector-icons';

const green = '#495E57';
const yellow = '#F4CE14';

export default function App() {
  return (
    <View style={styles.container}>
      <RootNavigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: green,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
