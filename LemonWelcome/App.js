import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

const green = '#495E57';
const yellow = '#F4CE14';

const Stack = createNativeStackNavigator();

function LogoTitle() {
    return <Image source={require('./assets/little-lemon-logo.png')} style={{
      height: 40,
      width: 300,
      resizeMode: 'contain',
      alignSelf: 'center',
    }}
     />;
  }

export default function App() {
  return (
   <>
   <NavigationContainer>
   <View style={styles.container}>
       <Stack.Navigator name="Welcome" component={WelcomeScreen} options={{ title: 'Home', headerTitle: (props) => <LogoTitle {...props} />,}}>
     <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Subscribe" component={SubscribeScreen} />
    </Stack.Navigator>
    </View>
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
