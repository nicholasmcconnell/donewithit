// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  TouchableHighlight,
  View,
  SafeAreaView,
  Image,
  Button,
  Alert,
  Platform,
  StatusBar
} from 'react-native';

export default function App() {
  return (
    // style prop can take an array - greater index's values replace same in lesser index's
    <SafeAreaView style={styles.container}>
      <Button
        title='click me' onPress={() => console.log('text')}
      />
    </SafeAreaView >
  );
}

const containerStyle = { backgroundColor: 'orange' }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
    // justifyContent: 'center',
    // alignItems: 'center'
  },
});


//UNUSED CODE AND EXAMPLES

// ALERT.ALERT WITH PARAMATERS
// Alert.alert("My Title", 'My Message', [
//   { text: "Yes", onPress: () => console.log('Yes') },
//   { text: 'No', onPress: () => console.log('No') }
// ])

//IMAGE TAG
{/* <Text>Hello React Native</Text>
<TouchableHighlight onPress={() => console.log('image highlight')}>
  <Image source={{
    width: 200,
    height: 300,
    uri: 'https://picsum.photos/200/300'
  }} />
</TouchableHighlight>
<StatusBar style="auto" /> */}


