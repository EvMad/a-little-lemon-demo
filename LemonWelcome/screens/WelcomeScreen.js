import * as React from 'react';
import { View, Image, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  
  return(
    <>
    <View>
    <Image source={require("./assets/little-lemon-logo.png")} resizeMode="contain" style={styles.logo} accessible={true} accessibilityLabel="Little Lemon Logo" />
    </View>
    </>
  );
};

export default WelcomeScreen;
