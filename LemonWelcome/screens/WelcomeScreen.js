import * as React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  
  return(
    <>
    <View>
    <Image source={require("./assets/little-lemon-logo.png")} resizeMode="contain" style={styles.logo} accessible={true} accessibilityLabel="Little Lemon Logo" />
    </View>
    </>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1,       
  },
  logo: {
    height: 100,
    width: 100,
    borderRadius: 20,
  },
  button: {
    fontSize: 22,
    padding: 10,
    marginVertical: 8,
    margin: 40,
    backgroundColor: '#EDEFEE',
    borderColor: '#EDEFEE',
    borderWidth: 2,
    borderRadius: 12,
},
buttonText: {
    color: '#333333',
    textAlign: 'center',
    fontSize: 32,
},

});

export default WelcomeScreen;
