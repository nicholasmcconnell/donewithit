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
  StatusBar,
  Dimensions
} from 'react-native';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';


export default function App() {
  const { landscape } = useDeviceOrientation();

  ///////THIS IS ALL ABOUT ALIGNING ITEMS////////
  return (
    <View style={{
      backgroundColor: 'white',
      flex: 1,
      //because default is vertical floated left
      flexDirection: 'row', // makes main axis horizontal
      //  row-reverse - floated right
      //  column-reverses - floates botom left
      justifyContent: 'center', //aligns items along main or horizontal axis because flex direction is set to row.
      alignItems: 'center', //alignts itemes along secondary axis within each line -> wrap example that pushes them all to top because !alignContent
      alignContent: 'center', //aligns all content along secondary axis -> in this case vertical
      flexWrap: 'wrap'
    }}>

      <View style={{
        backgroundColor: 'dodgerblue',
        // flex: 2 twice the size of others -> its two of the four sections 
        //not used height and width

        //lays views out vertically
        //css flex alighns items horzizontaly -> difference
        width: 100,
        height: 300,
        //move one item
        // alignSelf: 'flex-start'
      }} />
      <View style={{
        backgroundColor: 'gold',
        // flex: 1
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'tomato',
        // flex 1,
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'grey',
        // flex 1,
        width: 100,
        height: 100
      }} />
      <View style={{
        backgroundColor: 'greenyellow',
        // flex 1,
        width: 100,
        height: 100
      }} />
    </View>
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

//BUTTON

{/* <Button
title='click me' onPress={() => console.log('text')}
/> */}

//DIMENSIONS
{/* <View style={{
  backgroundColor: 'dodgerblue',
  width: '50%',
  height: 70

}}></View> */}
//DIMENSIONS DON'T RESPOND TO HORIZONTAL PHONE
// console.log(Dimensions.get('screen'))

//ACCONTING FOR LANDSCAPE MODE (I.E. VIDEO PLAYER)

//change this to default in app.json -> "orientation": "default",
//can also be portrait or landscape only

// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';

// export default function App() {
//   const { landscape } = useDeviceOrientation();

// style prop can take an array - greater index's values replace same in lesser index's
//   <SafeAreaView style={styles.container}>
//   <View style={{
//     backgroundColor: 'dodgerblue',
//     width: '100%',
//     height: landscape ? '100%' : '30%'

//   }}></View>
// </SafeAreaView >


// `///////THIS IS ALL ABOUT ALIGNING ITEMS////////
// export default function App() {
//   const { landscape } = useDeviceOrientation();

//   return (
//     <View style={{
//       backgroundColor: 'white',
//       flex: 1,
//       //because default is vertical floated left
//       flexDirection: 'row', // makes main axis horizontal
//       //  row-reverse - floated right
//       //  column-reverses - floates botom left
//       justifyContent: 'center', //aligns items along main or horizontal axis because flex direction is set to row.
//       alignItems: 'center', //alignts itemes along secondary axis
//     }}>

//       <View style={{
//         backgroundColor: 'dodgerblue',
//         // flex: 2 twice the size of others -> its two of the four sections 
//         //not used height and width

//         //lays views out vertically
//         //css flex alighns items horzizontaly -> difference
//         width: 100,
//         height: 300,
//         //move one item
//         alignSelf: 'flex-start'
//       }} />
//       <View style={{
//         backgroundColor: 'gold',
//         // flex: 1
//         width: 100,
//         height: 200
//       }} />
//       <View style={{
//         backgroundColor: 'tomato',
//         // flex 1,
//         width: 100,
//         height: 100
//       }} />
//     </View>
//   );
// }`


