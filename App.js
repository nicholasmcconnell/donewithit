import React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen from './app/components/Screen';

const Tweets = () => {
  <Screen>
    <Text>Tweets</Text>
  </Screen>
}

const TweetDetails = () => {
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
}

const Stack = createStackNavigator();
const StackNavigator = () => {
  <Stack.Navigator>

  </Stack.Navigator>
}


export default function App() {
  return (
   

  );
}