import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';


export default StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        borderRadius: 10,
        margin: 10,
        padding: 10
    },
    text: {
        color: 'white',
        fontSize: 18,
        padding: 5
    },
    user: {
        color: 'white',
        fontSize: 16
    },
    date: {
        color: 'white',
        fontSize: 16,
        fontStyle: 'italic'
    },
    inner_container: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    dislike_container: {
      borderRadius: 20,
      flexDirection: 'row',
      backgroundColor: 'white',
      padding: 3,
      paddingHorizontal: 10,
      alignItems: 'center'

    },
    dislike_text: {
        color: colors.blue,
        fontSize: 16,
        fontWeight: 'bold'
    },
    dislike_count_text: {
        color: 'white',
        fontWeight: 'bold'
    },
    footer: {
        alignItems: 'flex-end'
    },
    dislike_count_container: {
        backgroundColor: colors.blue,
        padding: 3,
        borderRadius: 20,
        marginRight:3
    }
    
})