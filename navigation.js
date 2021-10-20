import React from "react";
import Main from "./components/Main";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HandsExs from "./components/HandsExs";
import GymnasticsExs from './components/GymnasticsExs';
import CrossExs from './components/CrossExs';
import HandsWorkout from './components/allWorkout/HandsWorkout';
import CrossWorkout from './components/allWorkout/CrossWorkout';
import GymnWorkout from './components/allWorkout/GymnWorkout';

const Stack = createStackNavigator();

export default function Navigate() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={Main}
                    options={{
                        title: "Главная страница",
                        headerStyle: { backgroundColor: "#ffff", height: 90 },
                        headerTitleStyle: { color: "black" },
                    }}
                />
                <Stack.Screen
                    name="HandsExs"
                    component={HandsExs}
                    options={{
                        title: "Силовые упражнения",
                        headerStyle: { backgroundColor: "#ffff", height: 90 },
                        headerTitleStyle: { color: "black" },
                        headerTintColor: "black",
                    }}
                />
                <Stack.Screen
                    name="GymnasticsExs"
                    component={GymnasticsExs}
                    options={{
                        title: "Растяжка",
                        headerStyle: { backgroundColor: "#ffff", height: 90 },
                        headerTitleStyle: { color: "black" },
                        headerTintColor: "black",
                    }}
                />
                <Stack.Screen
                    name="CrossExs"
                    component={CrossExs}
                    options={{
                        title: "Прокачка ног",
                        headerStyle: { backgroundColor: "#ffff", height: 90 },
                        headerTitleStyle: { color: "black" },
                        headerTintColor: "black",
                    }}
                />
                {/* 3 верхнии кнопки */}
                <Stack.Screen
                    name="HandsWorkout"
                    component={HandsWorkout}
                    options={{
                        title: "Упражнение",
                        headerStyle: { backgroundColor: "#ffff", height: 90 },
                        headerTitleStyle: { color: "black" },
                        headerTintColor: "black",
                    }}
                />
                <Stack.Screen
                    name="CrossWorkout"
                    component={CrossWorkout}
                    options={{
                        title: "Упражнение",
                        headerStyle: { backgroundColor: "#ffff", height: 90 },
                        headerTitleStyle: { color: "black" },
                        headerTintColor: "black",
                    }}
                />
                 <Stack.Screen
                    name="GymnWorkout"
                    component={GymnWorkout}
                    options={{
                        title: "Упражнение",
                        headerStyle: { backgroundColor: "#ffff", height: 90 },
                        headerTitleStyle: { color: "black" },
                        headerTintColor: "black",
                    }}
                />

                
            </Stack.Navigator>
        </NavigationContainer>
    );
}
