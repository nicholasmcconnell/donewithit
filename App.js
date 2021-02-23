import * as React from 'react';
import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Screen from './app/components/Screen';

const Tweets = () => {
  return (
    <Screen>
      <Text>Tweets</Text>
    </Screen>
  )
}

const TweetDetails = () => {
  return (
    <Screen>
      <Text>Tweet Details</Text>
    </Screen>
  )
}

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Tweets' component={Tweets} />
      <Stack.Screen name='TweetDetails' component={TweetDetails} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}