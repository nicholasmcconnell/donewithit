import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import colors from '../config/colors';
import AppText from './AppText';

//view as container
//image
//text description
//text dolar
export default function Card({ title, subTitle, image }) {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image} />
            <View style={styles.imageContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle} >{subTitle}</AppText>
            </View>
        </View>
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

