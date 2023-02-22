import * as React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';

const green = '#495E57';
const yellow = '#F4CE14';

const WelcomeScreen = ({ navigation }) => {
  
  return(
    <>
    <View>
    <Image source={require("./assets/little-lemon-logo.png")} resizeMode="contain" style={styles.logo} accessible={true} accessibilityLabel="Little Lemon Logo" />
    </View>
    <Pressable onPress={() => navigation.navigate("Subscribe")}>
        <Text style={styles.buttonText}>Subscribe</Text>
        </Pressable>
    </>
  );
};

const styles = StyleSheet.create({

  container: {
    flex: 0.8, 
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

});

export default WelcomeScreen;
