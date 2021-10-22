import React, { useState } from "react";
import { gStyle } from "../style/style";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CrossExs({ navigation }) {
    const [cross, setExs] = useState([
        {
            nameExs: "Вытягивание тела вверх",
            img: require("../assets/img/legs/IMG_1506.jpg"),
            gif: require("../assets/img/legs/legsGif/RPReplay_Final1634810970.gif"),
            desc: "Начните стоя, ступни на ширине плеч. Держа спину прямой, присядьте и согните колени до 45 градусов. Оттолкнувшись от передней части стоп, выпрямитесь и вытяните руки вверх. ", 
            key: "1",
        },
        {
            nameExs: "Наклоны на одной ноге",
            img: require("../assets/img/legs/IMG_1508.jpg"),
            gif: require("../assets/img/legs/legsGif/RPReplay_Final1634811027.gif"),
            desc: "Наклонитесь вперёд до тех пор, пока не будете смотреть в пол. Выпрямите левую ногу, держа ступню параллельно вашим бедрам.",
            key: "2",
        },
        {
            nameExs: "Выпад",
            img: require("../assets/img/legs/IMG_1511.jpg"),
            gif: require("../assets/img/legs/legsGif/RPReplay_Final1634810945(1).gif"),
            desc: "Совет: Не позволяйте колену касаться пола! Не переносите вес своего тела на колено во время выполнения этого упражнения.",
            key: "3",
        },
        {
            nameExs: "Подъем на икры стоя",
            img: require("../assets/img/legs/IMG_1512.jpg"),
            gif: require("../assets/img/legs/legsGif/RPReplay_Final1634811100.gif"),
            desc: "Опираясь на носки, поднимите тело вверх и задержитесь. Медленно опуститесь, удерживая пятки слегка над полом.",
            key: "4",
        },
        {
            nameExs: "Приседания Сумо",
            img: require("../assets/img/legs/IMG_1516.jpg"),
            gif: require("../assets/img/legs/legsGif/RPReplay_Final1634811140.gif"),
            desc: "Держа тело прямо, опуститесь до уровня 90 градусов, держа колени за носками. Напрягите ягодичные мышцы и выпрямитесь ",
            key: "5",
        },
        {
            nameExs: "Приседания и сгибания рук",
            img: require("../assets/img/legs/IMG_1518.jpg"),
            gif: require("../assets/img/legs/legsGif/RPReplay_Final1634811162.gif"),
            desc: "Подсказка: Напрягайте бицепсы во время сгибания рук вверх.",
            key: "6",
        },
        {
            nameExs: "Приседания со штангой над головой",
            img: require("../assets/img/legs/IMG_1520.jpg"),
            gif: require("../assets/img/legs/legsGif/RPReplay_Final1634811193.gif"),
            desc: "Подсказка: Во время выполнения этого упражнения держите ступни плотно прижатыми к полу. Сохраняйте также мышцы пресса подтянутыми, спину выпрямленной, а грудь поднятой.",
            key: "7",
        },
        {
            nameExs: "Обратные выпады заключенного",
            img: require("../assets/img/legs/IMG_1522.jpg"),
            gif: require("../assets/img/legs/legsGif/RPReplay_Final1634811044.gif"),
            desc: "Держа спину прямо, согните правое колено под углом 90 градусов, не выставляя его за носок. Напрягите ягодичные мышцы и выпрямив колено, вернитесь в исходное положение. ",
            key: "8"
        }
    ]);

    return (
        <View style={gStyle.SecMain}>
            <View>
                <Text style={gStyle.secTitle}>Упражнения для ног</Text>
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
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
        paddingLeft: 20,
        width: 10,
        marginTop: 5,
        width: 290,
        flexWrap: "wrap",
    },
});
