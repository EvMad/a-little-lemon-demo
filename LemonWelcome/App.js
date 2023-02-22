import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from "./navigators/RootNavigator";


const green = '#495E57';
const yellow = '#F4CE14';



export default function App() {
  return (
   <>
   
<NavigationContainer>
<RootNavigator />
</NavigationContainer>
   
   </>
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
