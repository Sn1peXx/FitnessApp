import React, { useState } from "react";
import { gStyle } from "../style/style";
import { View, Text, Image, StyleSheet, FlatList, Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

export default function FirstWorkout({ navigation }) {
    const [first, setExs] = useState([
        {
            nameExs: "Сгибания рук со штангой",
            nameType: " (Руки)",
            img: require("../assets/img/hands/IMG_1384.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634720558.gif"),
            desc: "Этапы выполнения: Поставьте ноги на ширине плеч и слегка согните их в коленях. Опустите руки вниз так, чтобы они расположились над бедрами; сгибая руки только в локтях, поднимите штангу к верхней части груди. Подсказка: Не качайте бедрами и спиной во время выполнения этого упражнения.",
            key: "2",
        },
        {
            nameExs: "Сгибания рук со штангой сидя",
            nameType: " (Руки)",
            img: require("../assets/img/hands/IMG_1410.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634728911.gif"),
            desc: "Упражнения на концентрацию ограничивают диапазон движения, за счет чего увеличивается его эффективность. В этом варианте используется штанга. Подсказка: Не меняйте положения тела, пока руки выполняют упражнение.",
            key: "8",
        },
        {
            nameExs: "Сгибания рук с упором в бедро",
            nameType: " (Руки)",
            img: require("../assets/img/hands/IMG_1414.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634728972.gif"),
            desc: "Подсказка: Все тело, кроме руки, которая выполняет упражнение, держите неподвижным.",
            key: "10",
        },
        {
            nameExs: "Хаммер",
            img: require("../assets/img/hands/IMG_1416.jpg"),
            nameType: " (Руки)",
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634728993.gif"),
            desc: "В этом упражнении используются движения, имитирующие удар (вверх и вниз), чтобы изолировать бицепсы. Подсказка: При выполнении этого упражнения не поворачивайте запястий.",
            key: "11",
        },
        {
            nameExs: "Модифицированные отжимания",
            nameType: " (Грудь)",
            img: require("../assets/img/hands/IMG_1472.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744228.gif"),
            desc: "Начните с положения на ладонях и коленях, руки на ширине плеч, ладони параллельны груди. Выдвигайте руки вперёд, пока корпус не выпрямится, бедра полностью не вытянутся, а вы не окажетесь на передней части колен.",
            key: "35",
        },
        {
            nameExs: " Пулловер за голову лежа",
            nameType: " (Грудь)",
            img: require("../assets/img/hands/IMG_1480.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744376.gif"),
            desc: "Все время держите спину прижатой к скамье. Ноги также должны стоять на полу. Сохраняйте удобный для вас диапазон движения.",
            key: "39",
        },
        {
            nameExs: "Жим хаммер",
            nameType: " (Грудь)",
            img: require("../assets/img/hands/IMG_1468.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744166.gif"),
            desc: "Сконцентрируйтесь на напряжении в грудных мышцах, чтобы убедиться, что по большей мере упражнение выполняется грудью, а не дельтовидными мышцами или трицепсами. Делайте вдох во время опускания весов, и выдох – во время их выжимания вверх.",
            key: "33",
        },
    ]);

    const [modal, setModalVisible] = useState(false)


    return (
        <View style={gStyle.SecMain}>

        <Modal visible={modal}>
            <Text style={[gStyle.secTitle, {marginTop: 80}]}>Как выполнять?</Text>
            <AntDesign name="close" style={[style.icon, {marginLeft: 20}]} size={24} onPress={() => setModalVisible(false)} color="black" />
            <Text style={style.modalText}>На каждое упраженине отводится по 2 минуты по 2 подхода</Text>
        </Modal>

            <View>
                <Text style={gStyle.secTitle}>Силовая тренировка</Text>
                <AntDesign
                    name="infocirlceo"
                    size={24}
                    style={style.icon}
                    color="black"
                    onPress={() => setModalVisible(true)}
                />
            </View>

            <FlatList
                data={first}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (

                    <TouchableOpacity
                        style={{ marginTop: 20, height: 90 }}
                        onPress={() =>
                            navigation.navigate("PowerWorkout", item)
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
    icon: {
        marginTop: -36,
        paddingBottom: 30,
    },
    modalText: {
        fontSize: 20,
        fontWeight: "300",
        paddingLeft: 20,
        lineHeight: 30
    }
});
