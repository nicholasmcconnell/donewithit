import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction/ListItemDeleteAction';
import ListItemSeperator from '../components/ListItemSeperator';
import Screen from '../components/Screen/Screen';

const intitialMessages = [
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
                        subTitle={item.descripdion}
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
                            id: 2,
                            title: 'T2',
                            descripdion: 'D2',
                            image: require('../assets/mosh.jpg'),
                        }
                    ])
                }}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({

})
