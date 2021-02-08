import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

import AppButton from '../components/AppButton';
import AppText from '../components/AppText.js';
import AppTextInput from '../components/AppTextInput';
import ErrorMessage from '../components/ErrorMessage';
import Screen from '../components/Screen';
import AppFormField from '../components/AppFormField';

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
                {({ handleSubmit }) => (
                    <>
                        <AppFormField
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='email'
                            keyboardType='email-address'
                            name='email'
                            placeholder='Email'
                            textContentType='emailAddress'
                        />
                        <AppFormField
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='lock'
                            name='email'
                            placeholder='Password'
                            secureTextEntry
                            textContentType='password'
                        />
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
