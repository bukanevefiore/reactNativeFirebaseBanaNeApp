import { Formik } from 'formik';
import React, {useState} from 'react';
import { View, Text, SafeAreaView, Button, ScrollView } from 'react-native';
import Buton from '../../../components/Button';
import Input from '../../../components/Input';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';
import styles from './SignUp.styles';
import auth from '@react-native-firebase/auth';
import { showMessage } from 'react-native-flash-message';

  const initialValues = {
        usermail: '',
        password: '',
        repassword: ''
    };

const SignUp = ({ navigation }) => {

    const [loading, setLoading] = useState(true);
  
    function handleLogin() {
        navigation.goBack();
    }

    function handleFormSubmit(formValues) {
        console.log(formValues);
        if(formValues.password !== formValues.repassword){
            showMessage({
                message: "Şifreler uyuşmuyor",
                type: "warn"
            });
            return;
        }


        try {
            auth().createUserWithEmailAndPassword(
                formValues.usermail,
                formValues.password
            );
            showMessage({
                message: "Kullanıcı Oluşturuldu",
                type: "success"
            });
            navigation.navigate("Login");
        } catch (error) {
            showMessage({
                message: authErrorMessageParser(error.code),
                type: "warn",
            });
            setLoading(false);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <Formik
                initialValues={initialValues}
                onSubmit={handleFormSubmit}>
                    {({handleSubmit, values, handleChange}) => (
                        <>
                            <Text style={styles.header}>bana ne?</Text>
                            <Input placeholder="Mail giriniz" 
                            onChangeText={handleChange('usermail')} value={values.usermail}/>
                            <Input placeholder="Şifre giriniz" isSecure
                            onChangeText={handleChange('password')} value={values.password}/>
                            <Input placeholder="Şifreyi tekrar giriniz" 
                            value={values.repassword} onChangeText={handleChange('repassword')}
                            isSecure/>
                            <Buton text="Kayıt Ol" theme="primary" onPress={handleSubmit}/>
                        </>
                    )}                
                </Formik>
                <Buton text="Geri" theme="secondary" onPress={handleLogin} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignUp;