import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native'

import ListItem from '../components/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: 'format-list-bulleted',
            backgroundColor: colors.primary,
        },
    },
    {
        title: "My Messages",
        icon: {
            name: 'email',
            backgroundColor: colors.secondary,
        },
    }
]

function AccountScreen(props) {
    return (
        <Screen >
            <View style={styles.container}>
                <ListItem
                    title='Nick McConnell'
                    subTitle='nicholas.mcconnell@gmail.com'
                    image={require('../assets/nick.jpg')}
                />
            </View>
            <View style={styles.container}>
                <FlatList
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}

                />
            </View>

        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },

})

export default AccountScreen;

