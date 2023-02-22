import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import SubscribeScreen from "../screens/SubscribeScreen";

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

const RootNavigator = () => {
  return (
    <Stack.Navigator name="Welcome" component={WelcomeScreen} options={{ title: 'Home', headerTitle: (props) => <LogoTitle {...props} />,}}>
     <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Subscribe" component={SubscribeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
