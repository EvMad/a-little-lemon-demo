import * as React from 'react';
import { useState } from 'react';
import { ScrollView, Text, TextInput, StyleSheet, KeyboardAvoidingView, Platform, Pressable  } from 'react-native';

const SubscribeScreen = (navigation) => {
  const [showButton, setShowButton] = useState(false);
    const [email, onChangeEmail] = React.useState('');
  // Add subscribe screen code here
  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <ScrollView>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            
        {!showButton && (
          <>
          <Text style={styles.regularText}>Sign Up for the Newsletter </Text>
            <TextInput value={email} onChangeText={onChangeEmail} style={styles.input} keyboardType={'email-address'} placeholder="email" />
          
          <Pressable style={styles.button} onPress={() => {setShowButton(!showButton)}}>
        <Text style={styles.buttonText}>Sign Up</Text>
        </Pressable>
          </>        
        )}
        {showButton && (
          <>
          <Text style={styles.infoSection}>You are Signed Up!</Text>
          <Pressable onPress={() => navigation.navigate("Welcome")}>
        <Text style={styles.buttonText}>Proceed to Home</Text>
        </Pressable>
          </>
        )}
        </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SubscribeScreen;
