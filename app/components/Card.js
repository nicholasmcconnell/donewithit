import React from 'react'
import { Text, View, StyleSheet, Image, Touchable } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import colors from '../config/colors';
import AppText from './AppText.js';

function Card({ title, subTitle, imageUrl, onPress }) {
    return (
        ///CARD MADE TOUCHABLE TO WORK WITH MODAL MODE OF FEED NAVIGATOR
        <TouchableWithoutFeedback onPress={onPress} >
            <View style={styles.card}>
                <Image style={styles.image} source={{ uri: imageUrl }} />
                <View style={styles.imageContainer}>
                    <AppText style={styles.title} numberOfLines={1} >{title}</AppText>
                    <AppText style={styles.subTitle} numberOfLines={1} >{subTitle}</AppText>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,

    },
    imageContainer: {
        padding: 20
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: 'bold',
    },
    text: {
        marginTop: 50
    },
    title: {
        marginBottom: 7,
    },
})

export default Card;

