import * as React from "react";
import { Pressable, Text, StyleSheet } from "react-native";

const Button = ({onPress, children, disabled}) => {
    return (
        <Pressable
        onPress={onPress}
        style={[styles.buttonWrapper, disabled && styles.disabled]}
        disabled={disabled}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    );
};

export default Button;