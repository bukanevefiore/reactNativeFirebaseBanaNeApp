import moduleName from 'module';
import { View, Text, TextInput } from 'react-native';
import styles from './Input.styles.js';

export default function({onChangeText}) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} 
            onChangeText={onChangeText} />
        </View>
    )
}