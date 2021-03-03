import * as React from 'react';
import { Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Screen from './app/components/Screen';

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button
      title='Click'
      onPress={() => navigation.navigate('TweetDetails')}
    />
  )
}


const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button
      title='View Tweet'
      onPress={() => navigation.navigate('TweetDetails', { id: 1, title: 'Tweet Details' })}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  //if TweetDetails is a child component you need useRoute() hook
  //returns same route object as route
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator
    // Sets header styles globally
    screenOptions={{
      headerStyle: { backgroundColor: 'dodgerblue' },
      headerTintColor: 'white',
      // headerShown
    }}
  >
    <Stack.Screen
      name='Tweets'
      component={Tweets}
      //Sets header styles for component and overides global screenOptions
      options={{
        headerStyle: { backgroundColor: 'tomato' },
        headerTintColor: 'white',
        // headerShown
      }}
    />
    <Stack.Screen
      name='TweetDetails'
      component={TweetDetails}
      options={({ route }) => ({ title: route.params.title })}
    />
  </Stack.Navigator>
)

const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name='Feed' component={Tweets} />
    <Tab.Screen name='Account' component={Account} />
  </Tab.Navigator>
)

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}