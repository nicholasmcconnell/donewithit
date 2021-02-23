import * as React from 'react';
import { Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import Screen from './app/components/Screen';

const Link = () => {
  //this will be a child of tweets
  //child cant use navigation prop or acces it in parrent.  Importing the hook gives child access to navigation

  const navigation = useNavigation();

  return (
    <Button
      title='Click'
      onPress={() => navigation.navigate('TweetDetails')}
    />
  )
}


const Tweets = ({ navigation }) => (
  //navigation is speacial prop from @react-navigation
  //Wher to navigte is specifgied in Button onPress
  //navigation prop only availinble to screen components (Stack.Screen)
  // child of screen component won't be sccesible via navigation prop
  <Screen>
    <Text>Tweets</Text>
    <Link />
    {/* <Button
      title='View Tweet'
      onPress={() => navigation.navigate('TweetDetails')}
    /> */}
  </Screen>
);

const TweetDetails = () => (
  <Screen>
    <Text>Tweet Details</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Tweets' component={Tweets} />
    <Stack.Screen name='TweetDetails' component={TweetDetails} />
  </Stack.Navigator>
)


export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  )
}