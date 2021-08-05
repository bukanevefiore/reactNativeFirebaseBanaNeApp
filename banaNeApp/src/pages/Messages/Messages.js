
import React, { useState, useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList } from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import ContentInputModal from '../../components/Modal/ContentInputModal/ContentInputModal';
import styles from './Messages.styles';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import parseContentData from '../../utils/parseContentData';
import MessageCard from '../../components/MessageCard/MessageCard';


function Messages() {

  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);


  useEffect(() => {
    database().ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();


        //console.log(contentData);
        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
        //console.log(parsedData);
      });
  }, []);


  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
    //console.log(content);
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;

    const contentObj = {
      text: content,
      usermail: userMail.split('@')[0],
      date: (new Date()).toISOString(),
      dislike: 0,
    };

    //console.log(contentObj);

    database().ref('messages/').push(contentObj);

  }

  function handleBanane(item) {
    database()
    .ref('messages/'+item.id+'/')
    .update({dislike: item.dislike + 1});
  }

  const renderContent = ({item}) => <MessageCard message={item} 
  onBanane={() => handleBanane(item)}/>


  return (
    <View style={styles.container}>

      <FlatList
        data={contentList}
        renderItem={renderContent}
      />
      <FloatingButton icon="plus" onPress={handleInputToggle} />

      <ContentInputModal
        isVisible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}>
      </ContentInputModal>
      
    </View>
  )
};

export default Messages;


