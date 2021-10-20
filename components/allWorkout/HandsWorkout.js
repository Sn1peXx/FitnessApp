import React, { useState } from "react";
import { gStyle } from "../../style/style";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HandsWorkout({ route }) {
    return (
        <View style={style.main}>
            <View>
                <Text style={gStyle.secTitle}>{route.params.nameExs}{route.params.nameType}</Text>
            </View>

            <TouchableOpacity style={{ marginTop: 20, height: 90 }}>
                <View>
                    <Text>
                        <View style={style.block}>
                            <Image
                                style={style.img}
                                source={route.params.gif}
                            />
                        </View>
                    </Text>
                    <Text style={gStyle.desc}>{route.params.desc}</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}

const style = StyleSheet.create({
    img: {
        width: '100%',
        height: 400,
        marginLeft: 10,
    },
    item: {
        flex: 1,
        flexDirection: "column",
    },
    block: {
        flex: 1,
        flexDirection: "row",

    },
    text: {
        fontSize: 20,
        fontWeight: "300",
        marginLeft: 20,
        marginTop: 20,
        width: 290,
        flexWrap: "wrap",
    }, 
    main: {
        backgroundColor: "#E9E6EA",
        paddingTop: 15,
        paddingRight: 20,
        flex: 1,
    },
});
