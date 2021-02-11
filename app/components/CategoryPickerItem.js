import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import AppText from './AppText.js';
import Icon from './Icon.js';

function CategoryPickerItem({ item, onPress }) {
    return (

        <View style={styles.container}>
            <Icon backgroundColor={item.backgroundColor} name={item.icon} size={80} />
            <AppText style={styles.text}>{item.label}</AppText>
        </View>
        // <TouchableOpacity onPress={onPress} >
        // </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    text: {
        // padding: 20,
    },
})

export default CategoryPickerItem;