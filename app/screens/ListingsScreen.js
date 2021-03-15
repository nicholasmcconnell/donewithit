import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes'
import Screen from '../components/Screen';

//Because listingsScreen is registered with Navigator we have acces to navigation prop
function ListingsScreen({ navigation }) {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        loadListings();
    }, [])

    const loadListings = async () => {
        const res = await listingsApi.getListings()
        setListings(res.data);
    }

    return (
        <Screen style={styles.screen}>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={'$' + item.price}
                        imageUrl={item.images[0].url}
                        //pass second argument so listiing details screen knows what to render
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
                    />
                }
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light,
    },
})

export default ListingsScreen;