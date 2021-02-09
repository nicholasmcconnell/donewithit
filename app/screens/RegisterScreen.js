import React from 'react';
import { StyleSheet } from 'react-native'
import * as Yup from 'yup';

import { AppForm, AppFormField, SubmitButton } from '../components/forms';
import AppFormPicker from '../components/forms/AppFormPicker';
import Screen from '../components/Screen';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password'),
})

function RegisterScreen(props) {
    return (
        <Screen style={styles.container} >
            <AppForm
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='account'
                    name='name'
                    placeholder='Name'
                />
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
                    name='password'
                    placeholder='Password'
                    secureTextEntry
                    textContentType='password'
                />
                <SubmitButton title='login' />
            </AppForm>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
})

export default RegisterScreen;

//wrap apppicker and errormessage in AppFormPicker
// appFormPicker
    // handle the onSelectItem event of the picker component and 
    //programmatically set the value of the field. 
        //To do that, you should use the setFieldValue function of Formik. Get that from the Formik context.

//to display the selected item in the picker, 
    // to get the values object from Formik context. 
        //This object is similar to the errors and touched objects. It has a key/value pair for every field in the form.

//Validation rules: -
    //Title: A required string, minimum one character long -
    //Price: A number between 1 and 10,000 -
    //Category: A required but nullable object -
    //Description: An optional string 

