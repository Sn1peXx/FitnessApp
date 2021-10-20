import React, { useState } from "react";
import { Text, View } from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import MainStack from "./navigation";

const fonts = () =>
    Font.loadAsync({
        "mt-bold": require("./assets/fonts/RobotoCondensed-Bold.ttf"),
        "mt-light": require("./assets/fonts/RobotoCondensed-Light.ttf"),
        "mt-regular": require('./assets/fonts/RobotoCondensed-Regular.ttf')
    });

export default function App() {
    const [font, setFont] = useState(false);

    if (font) {
        return (
            <MainStack />
        );
    } else {
        return (
            <AppLoading
                startAsync={fonts}
                onFinish={() => setFont(true)}
                onError={console.warn}
            />
        );
    }
}
