import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

function ViewImageScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.close}></View>
            <View style={styles.delete}></View>
            <Image
                resizeMode='contain'
                source={require('../assets/chair.jpg')}
                style={styles.image}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        flex: 1,
    },
    close: {

    },
    image: {
        height: '100%',
        width: '100%'
    },
})

export default ViewImageScreen;