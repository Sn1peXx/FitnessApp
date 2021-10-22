import React from "react";
import { gStyle } from "../style/style";
import { View, Text, StyleSheet } from "react-native";

export default function MyTraining() {

    return (
        <View style={gStyle.SecMain}>

            <View>
                <Text style={style.secTitle}>К сожалению тут пока пусто</Text>
            </View>

        </View>
    );
}

const style = StyleSheet.create({
     secTitle: {
        fontWeight: '300',
        fontSize: 24,
        textAlign: 'center'
     }
});
