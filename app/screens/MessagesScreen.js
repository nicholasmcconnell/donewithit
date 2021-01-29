import React from 'react'
import { FlatList } from 'react-native'
import ListItem from '../components/ListItem'

const messages = [
    {
        id: 1,
        title: 'T1',
        descripdion: 'D1',
        image: require('../assets/nick.jpg'),
    },
    {
        id: 2,
        title: 'T2',
        descripdion: 'D2',
        image: require('../assets/mosh.jpg'),
    },
]

export default function MessagesScreen() {
    return (
        <FlatList
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) =>
                <ListItem
                    title={item.title}
                    subTitle={item.descripdion}
                    image={item.image}
                />}
        />
    )
}
