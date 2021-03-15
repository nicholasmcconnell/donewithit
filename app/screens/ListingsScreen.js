import React, { useState, useEffect } from 'react';
import { Button, FlatList, StyleSheet } from 'react-native';

import Card from '../components/Card';
import colors from '../config/colors';
import listingsApi from '../api/listings';
import routes from '../navigation/routes'
import Screen from '../components/Screen';
import AppText from '../components/AppText.js';
import AppButton from '../components/AppButton';

//Because listingsScreen is registered with Navigator we have acces to navigation prop
export default function ListingsScreen({ navigation }) {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        loadListings();
    }, [])

    const loadListings = async () => {
        const res = await listingsApi.getListings()
        if (!res.ok) return setError(true);

        setError(false);
        console.log(error)
        setListings(res.data);
    }

    return (
        <Screen style={styles.screen}>
            {error && (
                <>
                    <AppText style={styles.appText}>Couldn't retrieve the listsings.</AppText>
                    <AppButton title='Retry' onPress={loadListings} />
                </>
            )}
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
    appText: {
        alignSelf: 'center',
    }
})

