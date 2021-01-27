import React from 'react';
import { View, Text } from 'react-native'

import styles from './styles';

export default function Button() {
    return (
        <View style={styles.loginButton}>
            <Text style={styles.text}>Login</Text>
        </View>
    )
}
