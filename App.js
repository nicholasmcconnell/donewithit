import React, { useEffect } from 'react';
import * as ImagePicker from 'expo-image-picker';

import Screen from './app/components/Screen';

export default function App() {
  const requestPermission = async () => {
    // Destructring result or respons object from imagePicker.requestcaerarollpermissionasync
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) {
      alert('You need to enable permission to acces the library.')
    }
  }

  useEffect(async () => {
    requestPermission()
  }, [])

  return (
    <Screen></Screen>
  )

}

