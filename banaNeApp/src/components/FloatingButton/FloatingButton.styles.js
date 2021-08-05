import { StyleSheet } from "react-native";
import  colors from "../../styles/colors";


export default StyleSheet.create({
    container: {
        
        position: 'absolute',
        borderRadius: 50,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.blue,
        
    },
    cont: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        right: 20,
        bottom: 50,
    }
});