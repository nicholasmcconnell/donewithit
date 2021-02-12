import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInput from './ImageInput';

function ImageInputLists({ imageUris = [], onRemoveImage, onAddImage }) {
    return (
        <View style={styles.container}>
            {imageUris.map((uri) => (
                <View key={uri} style={styles.image} >
                    <ImageInput
                        imageUri={uri}
                        onChangeImage={() =>
                            onRemoveImage(uri)}
                    />
                </View>
            ))}
            <ImageInput onChangeImage={uri => onAddImage(uri)} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'yellow'
    },
    image: {
        marginRight: 10,
    },
})

export default ImageInputLists;