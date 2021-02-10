import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import {
    ListItem,
    ListItemDeleteAction,
    ListItemSeperator
} from '../components/lists';
import Screen from '../components/Screen';

const intitialMessages = [
    {
        id: 1,
        title: 'Nick McConnell',
        description: 'Hey! Today was crazy but I will be getting back to yu in the near future!',
        image: require('../assets/nick.jpg'),
    },
    {
        id: 2,
        title: 'Mosh',
        description: 'I love the red Jacket!  When can I pay you and take it home and wear it forever and be happy beyond all comprehension???',
        image: require('../assets/mosh.jpg'),
    },
]
//npm i expo-constants
export default function MessagesScreen() {
    const [messages, setMessages] = useState(intitialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = (message) => {
        // const newMessages = messages.filter(m => m.id !== messages.id);
        setMessages(messages.filter(m => m.id !== message.id));
    }

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) =>
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => { console.log('message selected', item) }}
                        renderRightActions={() =>
                            <ListItemDeleteAction onPress={() => handleDelete(item)} />}
                    />}
                ItemSeparatorComponent={ListItemSeperator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 1,
                            title: 'Nick McConnell',
                            description: 'Hey! Today was crazy but I will be getting back to yu in the near future!',
                            image: require('../assets/nick.jpg'),
                        }
                    ])
                }}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({

})
