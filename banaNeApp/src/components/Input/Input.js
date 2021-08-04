import { View, Text, TextInput } from 'react-native';
import styles from './Input.styles.js';
import React from 'react';

export default function({onChangeText, placeholder}) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} 
            onChangeText={onChangeText}
            placeholder={placeholder}/>
        </View>
    )
}