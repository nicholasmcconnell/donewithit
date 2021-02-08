import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Formik } from 'formik';

import AppButton from '../components/AppButton';
import AppTextInput from '../components/AppTextInput';
import Screen from '../components/Screen';

function LoginScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../assets/logo-red.png')} />
            <Formik
                initialValues={{ password: '', email: '' }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleSubmit }) => (
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
                        <AppTextInput
                            autoCapitalize='none'
                            autoCorrect={false}
                            icon='lock'
                            onChangeText={handleChange('password')}
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
