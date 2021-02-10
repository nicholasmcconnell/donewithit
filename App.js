// import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
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
  Dimensions,
  Switch
} from 'react-native';

import WelcomeScreen from './app/screens/WelcomeScreen';
// import ViewImageScreen from './app/screens/ViewImageScreen';
// import AppText from './app/components/AppText';
// import AppButton from './app/components/AppButton';
// import Card from './app/components/Card';

// import { MaterialCommunityIcons } from '@expo/vector-icons';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
// import MyAccountScreen from './app/screens/MyAccountScreen';
import Icon from './app/components/Icon';
import Screen from './app/components/Screen';
// import ListItem from './app/components/ListItem';
import AccountScreen from './app/screens/AccountScreen';
import ListingsScreen from './app/screens/ListingsScreen';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen.js';

// const categories = [
//   { label: "Furniture", value: 1 },
//   { label: "Clothing", value: 2 },
//   { label: "Cameras", value: 3 },
// ]

export default function App() {

  // const [category, setCategory] = useState(categories[0]);

  return <ListingsScreen />;

  // <ListingEditScreen />


  // <Screen>
  //   <AppPicker
  //     selectedItem={category}
  //     onSelectItem={item => setCategory(item)}
  //     items={categories} icon='apps' placeholder='Category'
  //   />
  //   <AppTextInput icon='email' placeholder='Email' />
  // </Screen>
  // <ListingsScreen />
  // <AccountScreen />
  // <MessagesScreen />
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



}

