import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './MessageCard.styles';

export default function () {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.message}>{message}</Text>
            <View>
                <TouchableOpacity style={styles.buton_container}>
                    <Text style={styles.button.dislike}>{dislike}</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}