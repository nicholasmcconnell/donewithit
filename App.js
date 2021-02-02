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
  Alert,
  Platform,
  StatusBar,
  Dimensions
} from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import AppText from './app/components/AppText';
// import AppButton from './app/components/AppButton';
// import Card from './app/components/Card';

// import { MaterialCommunityIcons } from '@expo/vector-icons';
// import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
// import MyAccountScreen from './app/screens/MyAccountScreen';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';

export default function App() {

  return (
    // <AccountScreen />
    // <MyAccountScreen />
    <MessagesScreen />
    // <ViewImageScreen></ViewImageScreen>

    // <ListingDetailsScreen></ListingDetailsScreen>


    // <View
    //   style={{
    //     backgroundColor: '#f8f4f4',
    //     padding: 20,
    //     paddingTop: 100,
    //   }}
    // >
    //   <Card
    //     title='Red jacket for sale'
    //     subTitle='$100'
    //     image={require('./app/assets/jacket.jpg')} />
    // </View >

    // <WelcomeScreen></WelcomeScreen>


  )
}

{/* <AppButton title='Login' onPress={() => console.log('tapped')} /> */ }
{/* <Button></Button> */ }
{/* <AppText>I love React Native!</AppText> */ }


/////////////////////////UNUSED CODE AND EXAMPLES/////////////////////////////

// import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
// const { landscape } = useDeviceOrientation();

///////////STYLES EXAMPLES//////////

// const containerStyle = { backgroundColor: 'orange' }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
//     // justifyContent: 'center',
//     // alignItems: 'center'
//   },

// ALERT.ALERT WITH PARAMATERS

// Alert.alert("My Title", 'My Message', [
//   { text: "Yes", onPress: () => console.log('Yes') },
//   { text: 'No', onPress: () => console.log('No') }
// ])

//IMAGE TAG

// <Text>Hello React Native</Text>
//     <TouchableHighlight onPress={() => console.log('image highlight')}>
//       <Image source={{
//         width: 200,
//         height: 300,
//         uri: 'https://picsum.photos/200/300'
//       }} />
//     </TouchableHighlight>
//     <StatusBar style="auto" />

//BUTTON

// <Button
//   title='click me' onPress={() => console.log('text')}
// />

//DIMENSIONS

// <View style={{
//       backgroundColor: 'dodgerblue',
//       width: '50%',
//       height: 70

//     }}></View>

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


///////THIS IS ALL ABOUT ALIGNING ITEMS AND BEGINNING FLEX////////

// export default function App() {
// const { landscape } = useDeviceOrientation();

// return (
//   <View style={{
//     backgroundColor: 'white',
//     flex: 1,
//     //because default is vertical floated left
//     flexDirection: 'row', // makes main axis horizontal
//     //  row-reverse - floated right
//     //  column-reverses - floates botom left
//     justifyContent: 'center', //aligns items along main or horizontal axis because flex direction is set to row.
//     alignItems: 'center', //alignts itemes along secondary axis within each line -> wrap example that pushes them all to top because !alignContent
//     alignContent: 'center', //aligns all content along secondary axis -> in this case vertical
//     //  alignContent only works if yo have wraping
//     flexWrap: 'wrap'
//   }}>

//     <View style={{
//       backgroundColor: 'dodgerblue',
//       // flex: 2 twice the size of others -> its two of the four sections 
//       //not used height and width

//       //lays views out vertically
//       //css flex alighns items horzizontaly -> difference
//       width: 100,
//       height: 300,
//       //move one item
//       alignSelf: 'flex-start'
//     }} />
//     <View style={{
//       backgroundColor: 'gold',
//       // flex: 1
//       width: 100,
//       height: 200
//     }} />
//     <View style={{
//       backgroundColor: 'tomato',
//       // flex 1,
//       width: 100,
//       height: 100
//     }} />
//   </View>
// );
// }

//FLEX BASIS, FLEX GROW, FLEX SHRINK

// <View style={{
//   backgroundColor: 'white',
//   flex: 1,
//   flexDirection: 'row', // makes main axis horizontal
//   justifyContent: 'center', //aligns items along main or horizontal axis because flex direction is set to row.
//   alignItems: 'center', //alignts itemes along secondary axis within each line -> wrap example that pushes them all to top because !alignContent
//   alignContent: 'center', //aligns all content along secondary axis -> in this case vertical
//   // flexWrap: 'wrap'
// }}>

//   <View style={{
//     backgroundColor: 'dodgerblue',
//     // flexBasis: 100, //sets value for main or primary axis, works for height and width
//     // flexGrow: .5, //works the samy as flex, fills the empty space
//     flexShrink: 1, //reduces this view if other items are being push off the screen, flex = -1 does the same thing.
//     width: 400,
//     // width: 100,
//     height: 100,

//   }} />
//   <View style={{
//     backgroundColor: 'gold',
//     width: 100,
//     height: 100
//   }} />
//   <View style={{
//     backgroundColor: 'tomato',
//     width: 100,
//     height: 100
//   }} />
// </View>

////////////RELATIVE AND ABSOLUTE POSITIONING/////

// return (
//   <View style={{
//     backgroundColor: 'white',
//     flex: 1,
//     flexDirection: 'row', // makes main axis horizontal
//     justifyContent: 'center', //aligns items along main or horizontal axis because flex direction is set to row.
//     alignItems: 'center', //alignts itemes along secondary axis within each line -> wrap example that pushes them all to top because !alignContent
//     alignContent: 'center', //aligns all content along secondary axis -> in this case vertical
//     // flexWrap: 'wrap'
//   }}>

//     <View style={{
//       backgroundColor: 'dodgerblue',
//       width: 100,
//       height: 100,

//     }} />
//     <View style={{
//       backgroundColor: 'gold',
//       width: 100,
//       height: 100,
//       left: 20,
//       top: 20,  //like setting margin -> can do negative # and bottom, right, left.  Changes postition without affecting the layout or other items
//       //component default positioning is 'relative' -> allows for moving components without affecting layout
//       position: 'absolute', //positoins component relative to its parent and other items move to fill space (i.e. it affects the layout)
//     }} />
//     <View style={{
//       backgroundColor: 'tomato',
//       width: 100,
//       height: 100
//     }} />
//   </View>
// );

/////////BORDERS///////

// ( <View style={{
//     backgroundColor: 'dodgerblue',
//     width: 100,
//     height: 100,
//     borderWidth: 10,
//     borderColor: 'royalblue',
//     borderRadius: 50, //makint it at least half the size of box to make circle
//     // borderTopWidth: 20,
//     // borderTopLeftRadius: 50,
//   }}></View>)

//////////////SHADOW/////////////

// (<View style={{
//         backgroundColor: 'dodgerblue',
//         width: 100,
//         height: 100,
//         //iOS properties
//         shadowColor: 'grey',
//         shadowOffset: { width: 10, height: 10 }, //width = right, height = bottom -> can do neg to put shadow on other side
//         shadowOpacity: 1, //range 0 to 1
//         //Android properties
//         elevation: 20,
//       }}
//       ></View>)

///////////////PADDING AND MARGIN//////////

// (<View
// style={{
//   flex: 1,
//   justifyContent: 'center',
//   alignItems: 'center',
// }}
// >
// <View style={{
//   backgroundColor: 'dodgerblue',
//   width: 100,
//   height: 100,
//   padding: 20,
//   paddingHorizontal: 10, //left and right padding -> overides padding in previous line
//   paddingLeft: 30, //overides padding horizongtal
// }}
// >
//   <View style={{
//     backgroundColor: 'gold',
//     width: 50,
//     height: 50,
//   }}></View>
// </View>
// <View style={{
//   backgroundColor: 'tomato',
//   width: 100,
//   height: 100,
//   margin: 20,
// }}></View>
// </View >)

///////////TEXT AND FONT STYLING//////

// List of system fonts on iOS and Android:
// https://github.com/react-native-training/react-native-fonts

// (
//   <View
//     style={{
//       flex: 1,
//       justifyContent: 'center',
//       alignItems: 'center',
//     }}
//   >

//     <Text
//       //React-Native styling does not have styling inheritrance
//       style={{
//         // fontFamily: 'Courier', //doesnt work on android and roboto doesn't work on iOS
//         fontSize: 30,
//         fontStyle: 'italic',
//         fontWeight: '600', //has to be string
//         color: 'tomato',
//         textTransform: 'capitalize', //controls case
//         textDecorationLine: 'underline', //line through and option too
//         textAlign: 'center',
//         lineHeight: 40,
//       }}>I Love React Native!  This is my first React NAtive app.  Here is osme more text</Text>
//   </View >
// )

////////IMPLIMENTING STYLING INHERITANCE///
///CREATE CUSTOM COMPONENT AND IMPORT

// import AppText from './app/components/AppText';
// <AppText>I Love React Native!</AppText>

//   function AppText({ children }) {
//     return (
//         <Text style={styles.text}>{children}</Text>
//     );
// }

// const styles = StyleSheet.create({
//     text: {
//         fontSize: 18,
//         fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
//     }
// })

// export default AppText;



/////////////ICONS//////////////
//https://icons.expo.fyi/
//import { MaterialCommunityIcons } from '@expo/vector-icons'

// name property comes from nam ewhen searching above icon library at above site
// <MaterialCommunityIcons name='email' size={200} color='dodgerblue' />

//////////////PLATFORM-SPECIFIC CODE////////////////

// Create seperate AppText components
// AppText.ios.js or AppText.android.js

// OR -> use Platform.Select
//  const styles = StyleSheet.create({
//     text: {
//       color: 'tomato',
//       ...Platform.select({ //the spread allows .select()'s returned object to spread into the text object
//           ios: {
//               fontSize: 20,
//               fontFamily: 'Avenir'
//           },
//           android: {
//               fontSize: 18,
//               fontFamily: 'Roboto'
//           }
//       })

//   }
// })

// ORGANIZING STYLES
// simply moving const styles to seperate styles.js file.
//Also, AppText folder got index.js for exporting crap.


////////// FLATLIST SCREEN, COMPONENT, & SEPEARTORS  ///////////////

// //npm i expo-constants
// export default function MessagesScreen() {
//   return (
//     <Screen> //SafeAreaView styled with Constants.Statusbar height to account for android
//       <FlatList
//         data={messages}
//         keyExtractor={message => message.id.toString()}
//         renderItem={({ item }) =>
//           <ListItem //
//             title={item.title}
//             subTitle={item.descripdion}
//             image={item.image}
//           />}
//         ItemSeparatorComponent={ListItemSeperator} //View Component styled to be line seperator
//       />
//     </Screen>
//   )
// }

// ////////////////// LISTS - HANDLING SELECTIONS //////////////////

      // export default function ListItem({ title, subTitle, image, onPress }) {
      //   return (
      //     <TouchableHighlight //wrapped list item in touchable for user to see
      //       underlayColor={colors.light}
      //       onPress={onPress} //set onPress to prop allows for function to be determined dynamically or by consumer
      //     >
      //       <View style={styles.container} >
      //         <Image style={styles.image} source={image} />
      //         <View>
      //           <AppText style={styles.title} >{title}</AppText>
      //           <AppText style={styles.subTitle} >{subTitle}</AppText>
      //         </View>
      //       </View>
      //     </TouchableHighlight>
      //   )
      // }

///////////////////// HANDLING SWPIES ////////////////

      // return (
      //   <Swipeable renderRightActions={renderRightActions}> //WRAP COMPONENET WITH THIS
      //       <TouchableHighlight
      //           underlayColor={colors.light}
      //           onPress={onPress}
      //       >
      //           <View style={styles.container} >
      //               <Image style={styles.image} source={image} />
      //               <View>
      //                   <AppText style={styles.title} >{title}</AppText>
      //                   <AppText style={styles.subTitle} >{subTitle}</AppText>
      //               </View>
      //           </View>
      //       </TouchableHighlight>
      //   </Swipeable>
      // )

        ////// THSI COMPONENT IS PASSED AS RENDER RIGHT ACTIONS PROP TO LIST ITEM COMPONENT
          // LISTITEMDELETECOMPONENT 
      //   return (
      //     <View style={styles.container}>
      //         <MaterialCommunityIcons
      //             name='trash-can'
      //             size={35}
      //             color='white'

      //         />
      //     </View>
      // )

//////////////// DELETING MESSAGE //////////////

      // export default function MessagesScreen() {
      //   const [messages, setMessages] = useState(intitialMessages);

      //   const handleDelete = (message) => {
      //       // const newMessages = messages.filter(m => m.id !== messages.id);
      //       setMessages(messages.filter(m => m.id !== message.id));
      //   }

      //   return (
      //       <Screen>
      //           <FlatList
      //               data={messages}
      //               keyExtractor={message => message.id.toString()}
      //               renderItem={({ item }) =>
      //                   <ListItem
      //                       title={item.title}
      //                       subTitle={item.descripdion}
      //                       image={item.image}
      //                       onPress={() => { console.log('message selected', item) }}
      //                       renderRightActions={() =>
      //                           <ListItemDeleteAction onPress={() => handleDelete(item)} />}
      //                   />}
      //               ItemSeparatorComponent={ListItemSeperator}
      //           />
      //       </Screen>
      //   )
      // }

//////////////////////  BUILDING ICON COMPONENT   //////////

      // function Icon({
      //   name,
      //   size = 40,
      //   backgroundColor = '#000',
      //   iconColor = '#fff'
      // }) {
      //   return (
      //       <View style={{
      //           width: size,
      //           height: size,
      //           borderRadius: size / 2,
      //           backgroundColor,
      //           justifyContent: 'center',
      //           alignItems: 'center',

      //       }}>
      //           <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
      //       </View>
      //   );
      // }

//////////////////////// ICON ////////////
      // PASS ICON COMPONENT AS PROP TO LIST ITEM

        // export default function App() {

        //   return (
        //     <Screen>
        //       <ListItem
        //         title="my title"
        //         subTitle='my subtitle'
        //         ImageComponent={<Icon name='email' />}
        //       />
        //     </Screen>


        //// DEFAULT PROP VALUES -> OVERRIDDEN BY THOS SENT WITH IT AS PROP //////
            //   function Icon({
            //     name,
            //     size = 40,
            //     backgroundColor = '#000',
            //     iconColor = '#fff'
            // }) {
            //     return (
            //         <View style={{
            //             width: size,
            //             height: size,
            //             borderRadius: size / 2,
            //             backgroundColor,
            //             justifyContent: 'center',
            //             alignItems: 'center',

            //         }}>
            //             <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
            //         </View>
            //     );
            // }