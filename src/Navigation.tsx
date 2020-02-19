import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screen/Home';
import SecondScreen from './screen/Second';
import ThirdScreen from './screen/Third';
import Tab1Screen from './screen/Tab1';
import Tab2Screen from './screen/Tab2';
import Tab3Screen from './screen/Tab3';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Tab' component={TabNavigator} />
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Second" component={SecondScreen} />
            <Stack.Screen name="Third" component={ThirdScreen} />
        </Stack.Navigator>
    )
}
export const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Tab1" component={Tab1Screen} />
            <Tab.Screen name="Tab2" component={Tab2Screen} />
            <Tab.Screen name="Tab3" component={Tab3Screen} />
        </Tab.Navigator>
    )
}

export const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Second" component={SecondScreen} />
            <Stack.Screen name="Third" component={ThirdScreen} />
        </Stack.Navigator>
    )
}