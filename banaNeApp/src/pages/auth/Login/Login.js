import React from 'react';
import { View, Text, SafeAreaView, Button } from 'react-native';
import Buton from '../../../components/Button';
import Input from '../../../components/Input';
import styles from './Login.styles';


const Login = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}>bana ne?</Text>
            <Input placeholder="Mail giriniz"/>
            <Input placeholder="Şifre giriniz"  />
             <Buton text="Giriş Yap" theme="primary"/>
             <Buton text="Kayıt ol" theme="secondary"/>
        </SafeAreaView>
    )
}

export default Login;