import React from 'react';
import { FlatList } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card'

const listings = [
    {
        id: 1,
        title: 'Red jacket for sale',
        price: 100,
        image: require('../assets/jacket.jpg'),
    },
    {
        id: 2,
        title: 'Couch in great conditino',
        price: 1000,
        image: require('../assets/couch.jpg'),
    },

]

function ListingsScreen(props) {
    return (
        <Screen>
            <FlatList
                data={listings}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
                    <Card
                        title={item.title}
                        subTitle={'$' + item.price}
                        image={item.image}
                    />
                }
            />
        </Screen>
    );
}

export default ListingsScreen;