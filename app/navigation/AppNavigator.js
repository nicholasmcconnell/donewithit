import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from '../screens/AccountScreen';
import ListingsEditScreen from '../screens/ListingEditScreen';
import ListingsScreen from '../screens/ListingsScreen';
import AuthNavigator from './AuthNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name='Listings' component={ListingsScreen} />
        <Tab.Screen name='ListingsEdit' component={ListingsEditScreen} />
        <Tab.Screen name='Acconut' component={AccountScreen} />
    </Tab.Navigator>
)

export default AppNavigator;