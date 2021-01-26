import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

import colors from '../config/colors';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image
                resizeMode='contain'
                source={require('../assets/chair.jpg')}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        height: 50,
        width: 50,
        backgroundColor: colors.primary,
        position: 'absolute',
        top: 40,
        left: 30,
    },
    container: {
        backgroundColor: '#000',
        flex: 1,
    },
    deleteIcon: {
        height: 50,
        width: 50,
        backgroundColor: colors.secondary,
        position: 'absolute',
        top: 40,
        right: 30,

    },
    image: {
        height: '100%',
        width: '100%',
    },
})

export default ViewImageScreen;