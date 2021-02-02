import React from 'react';
import { Image, ImageBackground, StyleSheet, View, Text } from 'react-native';
// import styles from '../components/AppText/styles';
import AppButton from '../components/AppButton';
import colors from '../config/colors';

function WelcomeScreen(props) {
    return (
        <ImageBackground
            blurRadius={5}
            source={require('../assets/background.jpg')}
            style={styles.background}
        >
            <View style={styles.logoContainer}>
                <Image
                    source={require('../assets/logo-red.png')}
                    style={styles.logo}
                />
                <Text style={styles.tagline}>Sell What You Don't Need</Text>
            </View>

            <View style={styles.buttonsContainer}>
                <AppButton title='Login' />
                <AppButton title='Register' color='secondary' />
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    buttonsContainer: {
        width: '100%',
        padding: 20,
    },
    logo: {
        height: 100,
        width: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: 'center',
    },
    tagline: {
        fontSize: 25,
        fontWeight: '600',
        paddingVertical: 20,
    }

})

export default WelcomeScreen;