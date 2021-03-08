import React from 'react'
import { Image, View, StyleSheet } from 'react-native'
import AppText from '../components/AppText.js';
import { ListItem } from '../components/lists';
import colors from '../config/colors';

//becaseu screen is registered with navigator we have access to route prop
function ListingDetailsScreen({ route }) {
    //this gives access to listing
    const listing = route.params;

    return (
        <View>
            <Image style={styles.image} source={listing.image} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} >{listing.title}</AppText>
                <AppText style={styles.price} >${listing.price}</AppText>
                <View style={styles.userContainer} >
                    <ListItem
                        image={require('../../app/assets/nick.jpg')}
                        title="Nick"
                        subTitle="5 Listings"
                    />
                </View>
            </View>
        </View>
    )
}

export default ListingDetailsScreen;

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
    userContainer: {
        marginVertical: 40,
    },
})
