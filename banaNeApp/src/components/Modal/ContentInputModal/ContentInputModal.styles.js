import { StyleSheet, Dimensions } from "react-native";

const deviceSize = Dimensions.get("window");

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        marginHorizontal: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        width: deviceSize.width,
        height: deviceSize.height / 3,
    },
    modal: {
        justifyContent: 'flex-end',
        margin: -10,
    },
    input_container: {
        flex: 1
    }
    
})