import React, { useState } from 'react';
import { Button, TextInput, View, Text } from 'react-native';
import styles from './ContentInputModal.styles';
import Modal from 'react-native-modal';
import Buton from '../../Button/Button';

const ContentInputModal = ({ isVisible, onClose, onSend }) => {

    const [text, setText] = React.useState(null);

    function handleSend() {
        if(!text) {
            return;
        }

        onSend(text);
        setText(null);
    }

    return (

        <Modal style={styles.modal}
            isVisible={isVisible}
            onSwipeComplete={onClose}
            onBackButtonPress={onClose}
            onBackdropPress={onClose}>
        <View style={styles.container}>
           <View style={styles.input_container}>
           <TextInput placeholder="Darla hadi milleti" onChangeText={setText} multiline/>
           </View>
           <Buton text="Gönder" onPress={handleSend} />
        </View>
        </Modal>
    )

};

export default ContentInputModal;