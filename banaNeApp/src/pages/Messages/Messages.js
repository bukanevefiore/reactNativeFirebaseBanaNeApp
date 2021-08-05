
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/Modal/ContentInputModal/ContentInputModal';
import styles from './Messages.styles';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';


function Messages() {

  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);


  useEffect(() => {
    database().ref('messages/')
    .on('value', snapshot => {
      const contentData = snapshot.val();
      console.log(contentData);
    });
  }, []);


  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
    console.log(content);
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;

    const contentObj = {
      text: content,
      usermail: userMail.split('@')[0],
      date: (new Date()).toISOString(),
    };

    console.log(contentObj);
    
    database().ref('messages/').push(contentObj);


  }


  return (
    <View style={styles.container}>

      <FloatingButton icon="plus" onPress={handleInputToggle} />

      <ContentInputModal
        isVisible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}
      >

      </ContentInputModal>
    </View>
  )
};

export default Messages;


