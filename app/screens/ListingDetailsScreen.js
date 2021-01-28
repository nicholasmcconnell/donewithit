import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import AppText from '../components/AppText/index';
import colors from '../config/colors';

export default function ListingDetailsScreen() {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} >Red jacket for sale</AppText>
                <AppText style={styles.price} >$100</AppText>
                <ListItem
                    image={require('..assets/nick.jpg')}

                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 300,
    },
    price: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 20,
        marginVertical: 10,

    },
    title: {
        fontSize: 24,
        fontWeight: '500',
    },
})