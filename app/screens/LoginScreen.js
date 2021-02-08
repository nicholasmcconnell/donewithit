import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';
import AppText from '../components/AppText.js';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
})


function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')} />
            <Formik
                initialValues={{ password: '', email: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                {({ handleChange, handleSubmit, errors }) => (
                    <>
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='email'
                            onChangeText={handleChange('email')}
                            keyboardType='email-address'
                            placeholder='Email'
                            textContentType='emailAddress'
                        />
                        <AppText style={{ color: 'red' }} >{errors.email}</AppText>
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='lock'
                            onChangeText={handleChange('password')}
                            placeholder='Password'
                            secureTextEntry
                            textContentType='password'
                        />
                        <AppText style={{ color: 'red' }} >{errors.password}</AppText>
                        <AppButton title='Login' onPress={handleSubmit} />
                    </>
                )}

            </Formik>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 20,
    }

})

export default LoginScreen;
