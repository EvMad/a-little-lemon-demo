import * as React from 'react';
import { useState } from 'react';
import { Alert, ScrollView, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Pressable  } from 'react-native';
import Button from "../components/Button";
import {validateEmail} from "../utils";

const SubscribeScreen = (navigation) => {
 
    const [email, setEmail] = React.useState('');

    const isEmailValid = validateEmail(email);

  
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        textContentType="emailAddress"
        placeholder={"Type your email"}
      />
            
            <Button
        onPress={() => {
          Alert.alert("Thanks for subscribing, stay tuned!");
        }}
        disabled={!isEmailValid}
      >
        Subscribe
      </Button>
        </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    padding: 40,
    fontSize: 30,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  regularText: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
  },
  input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      fontSize: 16,
      borderColor: '#EDEFEE',
      backgroundColor: '#F4CE14',
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
infoSection: {
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    color: '#EDEFEE',
    textAlign: 'center',
    backgroundColor: '#495E57',
},
});

export default SubscribeScreen;
