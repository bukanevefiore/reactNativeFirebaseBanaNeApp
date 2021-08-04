import React from 'react';
import { View, Text, Button, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './Button.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Buton = ({ text, loading, onPress, icon, theme="primary" }) => {
    return (
        <TouchableOpacity style={styles[theme].container}
            onPress={onPress}
            disabled={loading}>
            { loading ? (
                <ActivityIndicator color="white" />
            ) : (
                <View style={styles[theme].buton_container}>
                    <Icon name={icon} color="gray" size={18} />
                    <Text style={styles[theme].text}>{text}</Text>
                </View>

            )}
        </TouchableOpacity>
    )
}

export default Buton;