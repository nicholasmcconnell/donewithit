import React from 'react'
import Constants from 'expo-constants';
import { StyleSheet, SafeAreaView, View } from 'react-native';

export default function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={style} >
                {children}
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight, //Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex: 1,
    },
})