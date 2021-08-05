import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './FloatingButton.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/colors';


const FloatingButton = ({ onPress, icon }) => {
    return (

        <View style={styles.cont}>
            <TouchableOpacity style={styles.container} onPress={onPress}>
            <Icon name={icon} color="white" size={30} />
        </TouchableOpacity>

        </View>
    )
}

export default FloatingButton;