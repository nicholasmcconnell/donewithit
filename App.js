// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity, TouchableHighlight, View, SafeAreaView, Image, Button, Alert } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Button
        title='click me' onPress={() => Alert.prompt('My Title', 'My Message', text => console.log(text))}
      />
    </SafeAreaView >
  );
}
// ALERT.ALERT WITH PARAMATERS
// Alert.alert("My Title", 'My Message', [
//   { text: "Yes", onPress: () => console.log('Yes') },
//   { text: 'No', onPress: () => console.log('No') }
// ])

{/* <Text>Hello React Native</Text>
<TouchableHighlight onPress={() => console.log('image highlight')}>
  <Image source={{
    width: 200,
    height: 300,
    uri: 'https://picsum.photos/200/300'
  }} />
</TouchableHighlight>
<StatusBar style="auto" /> */}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
