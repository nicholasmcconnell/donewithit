import React, { useEffect, useState } from 'react';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Screen from './app/components/Screen';
import { StyleSheet } from 'react-native';
import ImageInput from './app/components/ImageInput';
import ImageInputLists from './app/components/ImageInputLists';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ViewImageScreen from './app/screens/ViewImageScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import LoginScreen from './app/screens/LoginScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';

export default function App() {
  const [imageUris, setImageUris] = useState([])

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri])
  }

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter(imageUri => imageUri !== uri));

  }

  return (
    <ListingEditScreen />
    // <Screen style={styles.container} >
    //   <ImageInputLists
    //     imageUris={imageUris}
    //     onAddImage={(uri) => handleAdd(uri)}
    //     onRemoveImage={(uri) => handleRemove(uri)}
    //   />
    // </Screen >
  )

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red'
  }
})
