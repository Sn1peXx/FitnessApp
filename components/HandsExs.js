import React, { useState } from "react";
import { gStyle } from "../style/style";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HandsExs({ navigation }) {
    const [hands, setExs] = useState([
        {
            nameExs: "Сгибания рук с разворотом",
            img: require("../assets/img/hands/IMG_1382.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634721369.gif"),
            desc: 'Этапы выполнения: Поставьте ноги на ширине плеч и слегка согните ноги в коленях. В верхней позиции ладони направлены к телу. Медленно опустите руки вниз, контролируя нагрузку на мышцы.',
            key: "1",
        },
        {
            nameExs: "Сгибания рук со штангой",
            img: require("../assets/img/hands/IMG_1384.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634720558.gif"),
            desc: "Этапы выполнения: Поставьте ноги на ширине плеч и слегка согните их в коленях. Опустите руки вниз так, чтобы они расположились над бедрами; сгибая руки только в локтях, поднимите штангу к верхней части груди. Подсказка: Не качайте бедрами и спиной во время выполнения этого упражнения.",
            key: "2", 
        },
    ]);

    return (
        <View style={gStyle.SecMain}>
            <View>
                <Text style={gStyle.secTitle}>Упражнения на корпус</Text>
            </View>

            <FlatList
                data={hands}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{ marginTop: 20, height: 90 }}
                        onPress={() =>
                            navigation.navigate("HandsWorkout", item)
                        }
                    >
                        <View
                            style={{
                                borderBottomWidth: 1,
                                borderBottomColor: "gray",
                            }}
                        >
                            <Text>
                                <View style={style.block}>
                                    <Image
                                        style={style.img}
                                        source={item.img}
                                    />
                                    <Text style={style.text}>
                                        {item.nameExs}
                                    </Text>
                                </View>
                            </Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const style = StyleSheet.create({
    img: {
        width: 80,
        height: 80,
    },
    item: {
        flex: 1,
        flexDirection: "column",
    },
    block: {
        width: 400,
        height: 100,
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
});
