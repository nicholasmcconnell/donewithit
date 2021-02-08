import React from 'react';
import { StyleSheet } from 'react-native';

import AppText from './AppText.js';

function ErrorMessage({ error }) {
    if (!error) return null;
    return (
        <AppText style={style.error} >{error}</AppText>
    );
}

const style = StyleSheet.create({
    error: {
        color: 'red'
    },

})

export default ErrorMessage;