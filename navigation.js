import React from 'react';
import Main from './components/Main';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Main" component={Main} options={
                    {title: "Главная страница", headerStyle: {backgroundColor: '#cebaf9', height: 90}, headerTitleStyle: {color: 'white'}}} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}