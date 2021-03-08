import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import AccountScreen from '../screens/AccountScreen';
import ListingsEditScreen from '../screens/ListingEditScreen';
import ListingsScreen from '../screens/ListingsScreen';
import AuthNavigator from './AuthNavigator';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccoutNavigator';
import NewListingButton from './NewListingButton';
import routes from './routes';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        {/* The feed navigator is a nested navigator */}
        <Tab.Screen
            name='Feed' component={FeedNavigator}
            options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name='home' color={color} size={size} />
            }}
        />
        <Tab.Screen
            name={routes.LISTINGS_EDIT}
            component={ListingsEditScreen}
            //need to wrap in () or it will be seen as a block of code and not and object
            options={({ navigation }) => ({
                tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTINGS_EDIT)} />,
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name='plus-circle' color={color} size={size} />
            })}
        />
        <Tab.Screen
            name='Account'
            component={AccountNavigator}
            options={{
                tabBarIcon: ({ color, size }) =>
                    <MaterialCommunityIcons name='account' color={color} size={size} />
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator;