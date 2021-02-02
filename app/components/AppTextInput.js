import React from 'react'
import { TextInput, View, StyleSheet, Platform } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function AppTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.containers} >
            {icon && <MaterialCommunityIcons name={icon} />}
            <TextInput style={styles.textInput} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: 'row',
        width: '100%',
        padding: 15,
        marginVertical: 10,
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
    },

})

export default AppTextInput;
