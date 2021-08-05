import { StyleSheet } from "react-native";
import colors from "../../styles/colors";

const baseStyle = StyleSheet.create({
        container: {
            backgroundColor: colors.blue,
            margin: 5,
            borderRadius: 10,
            alignItems: 'center',
            
        },
        text: {
            fontWeight: 'bold',
            color: 'white',
            fontSize: 18,
            
        },
        buton_container: {
            alignItems: 'center',
            height: 40
        }
});

export default {

    
    primary: StyleSheet.create({
        ...baseStyle,
    }),


    secondary: StyleSheet.create({
        ...baseStyle,
        container: {
            ...baseStyle.container,
            backgroundColor: "white",
            borderColor: colors.blue,
            borderWidth: 2,
        },
        text: {
            ...baseStyle.text,
            color: colors.blue,
        },
    })
}