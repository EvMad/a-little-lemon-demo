import * as React from 'react';
import { View, StyleSheet, Image, Pressable, Text } from 'react-native';

const green = '#495E57';
const yellow = '#F4CE14';

const WelcomeScreen = ({ navigation }) => {
  
  return(
    <>
    <View style={styles.container}>
    <Image source={require("../assets/little-lemon-logo.png")} resizeMode="contain" style={styles.logo} accessible={true} accessibilityLabel="Little Lemon Logo" />
    </View>
    <Text style={styles.bodyText}>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. We would love to hear more about your experience with us!</Text>
    <Pressable onPress={() => navigation.navigate("Subscribe")}>
        <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
    </>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 1, 
    backgroundColor: yellow,      
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
    backgroundColor: green,
    borderColor: green,
    borderWidth: 2,
    borderRadius: 12,
},
buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 32,
},
bodyText: {
  fontSize: 24, 
  textAlign: 'center', 
},

});

export default WelcomeScreen;
