import React from 'react';
import { StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'
import Screen from '../components/Screen'
import ListItem from '../components/ListItem'

import colors from '../config/colors';

//
//
export default function MyAccountScreen() {
    return (
        <Screen >
            <ListItem
                title='Nick McConnell'
                subTitle='nicholas.mcconnell@gmail.com'
                image={require('../assets/nick.jpg')}
            />
            <ListItem
                title='My Listings'
                image={<MaterialCommunityIcons
                    name='format-list-bulleted'
                    size={35}
                    color={colors.primary}
                />}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',

    },
})


