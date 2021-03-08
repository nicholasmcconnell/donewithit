import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AccountScreen from '../screens/AccountScreen';
import ListingsEditScreen from '../screens/ListingEditScreen';
import ListingsScreen from '../screens/ListingsScreen';
import AuthNavigator from './AuthNavigator';
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccoutNavigator';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator>
        {/* The feed navigator is a nested navigator */}
        <Tab.Screen name='Feed' component={FeedNavigator} />
        <Tab.Screen name='ListingsEdit' component={ListingsEditScreen} />
        <Tab.Screen name='Acconut' component={AccountNavigator} />
    </Tab.Navigator>
)

export default AppNavigator;