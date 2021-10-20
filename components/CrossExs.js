import React, { useState } from "react";
import { gStyle } from "../style/style";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CrossExs({ navigation }) {
    const [cross, setExs] = useState([
        {
            nameExs: "Бег",
            img: require("../assets/img/hands/IMG_1382.jpg"),
            gif: require("../assets/img/legs/legsGif/RPReplay_Final1634724502.gif"),
            desc: "",
            key: "1",
        },
        {
            nameExs: "Приседания со штангой",
            img: require("../assets/img/legs/IMG_1394.jpg"),
            gif: require("../assets/img/legs/legsGif/RPReplay_Final1634724502.gif"),
            desc: "Подсказка: Держите голову, глядя немного вверх. Это поможет предотвратить прогибание в спине. Напрягая пресс, вы снимаете нагрузку со спины.",
            key: "2",
        },
    ]);

    return (
        <View style={gStyle.SecMain}>
            <View>
                <Text style={gStyle.secTitle}>Упражнения для ног</Text>
            </View>

            <FlatList
                data={cross}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={{ marginTop: 20, height: 90 }}
                        onPress={() =>
                            navigation.navigate("CrossWorkout", item)
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
