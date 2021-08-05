import { View, Text, TextInput } from 'react-native';
import styles from './Input.styles.js';
import React from 'react';

export default function({onChangeText, placeholder, value, isSecure}) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} 
            onChangeText={onChangeText}
            autoCapitalize="none"
            placeholder={placeholder}
            value={value}
            secureTextEntry={isSecure}/>
        </View>
    )
}