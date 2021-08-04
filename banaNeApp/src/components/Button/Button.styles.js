import { StyleSheet } from "react-native";

const baseStyle = StyleSheet.create({
        container: {
            backgroundColor: "blue",
            margin: 10,
            borderRadius: 10,
            alignItems: 'center'
        },
        text: {
            fontWeight: 'bold',
            color: 'white'
        },
        buton_container: {
            alignItems: 'center'
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
            borderColor: 'blue',
            borderWidth: 1,
        },
        text: {
            ...baseStyle.text,
            color: 'blue',
        },
    })
}