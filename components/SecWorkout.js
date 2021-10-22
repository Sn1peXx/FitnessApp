import React, { useState } from "react";
import { gStyle } from "../style/style";
import { View, Text, Image, StyleSheet, FlatList, Modal } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";

export default function SecWorkout({ navigation }) {
    const [sec, setExs] = useState([
        {
            nameExs: "Отжимания с касанием плеча",
            nameType: ' (Грудь)',
            img: require("../assets/img/hands/IMG_1478.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744338.gif"),
            desc: "Начните упражнение в позе классических отжиманий, ступни расставлены на ширине плеч, руки на уровне груди и шире плеч. Отожмитесь, держа мышцы пресса в напряжении, ударьте по плечу противоположной стороны.",
            key: "38", 
        },
        {
            nameExs: "Глубокие отжимания от стульев",
            nameType: ' (Грудь)',
            img: require("../assets/img/hands/IMG_1460.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744060.gif"),
            desc: "Вдохните) Напрягите грудные мышцы и медленно опустите корпус до тех пор, пока ваша грудь не будет слегка над полом. (Выдохните) Напрягите грудные мышцы и оттолкнувшись от рук, вернитесь в исходное положение. ",
            key: "29", 
        },
        {
            nameExs: "Жим гантелей на наклонной скамье",
            nameType: ' (Грудь)',
            img: require("../assets/img/hands/IMG_1462.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744086.gif"),
            desc: "Подсказка: В зависимости от веса, вы можете испытывать сложности при возвращении в исходное положение. Идеально было бы иметь помощника, который бы вам помогал. Выполняйте упражнение, не спеша, делая перерыв, кладите гантели на бедра.",
            key: "30", 
        },
        {
            nameExs: "Жим хаммер",
            nameType: ' (Грудь)',
            img: require("../assets/img/hands/IMG_1468.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744166.gif"),
            desc: "Сконцентрируйтесь на напряжении в грудных мышцах, чтобы убедиться, что по большей мере упражнение выполняется грудью, а не дельтовидными мышцами или трицепсами. Делайте вдох во время опускания весов, и выдох – во время их выжимания вверх.",
            key: "33", 
        },
        {
            nameExs: "Жим лежа на скамье",
            nameType: ' (Грудь)',
            img: require("../assets/img/hands/IMG_1464.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744119.gif"),
            desc: "Подсказка: Выполняйте упражнение медленно, контролируя вес. Не выпрямляйте руки в локтях полностью в начальном положении.",
            key: "31", 
        },
        {
            nameExs: "Жим одной рукой лежа на полу",
            nameType: ' (Грудь)',
            img: require("../assets/img/hands/IMG_1466.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744145.gif"),
            desc: "Это хорошее упражнение для выработки силы и координированности, необходимых для силовых тренировок. Это упражнение лучше всего выполнять с напарником.",
            key: "32", 
        },
        {
            nameExs: "Модифицированные отжимания",
            nameType: ' (Грудь)',
            img: require("../assets/img/hands/IMG_1472.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744228.gif"),
            desc: "Начните с положения на ладонях и коленях, руки на ширине плеч, ладони параллельны груди. Выдвигайте руки вперёд, пока корпус не выпрямится, бедра полностью не вытянутся, а вы не окажетесь на передней части колен.",
            key: "35", 
        },
        {
            nameExs: "Отжимания на скамье",
            nameType: ' (Грудь)',
            img: require("../assets/img/hands/IMG_1476.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744315.gif"),
            desc: "Так как ноги подняты вверх, в этом упражнении лучше прорабатываются грудные мышцы, чем в традиционных отжиманиях. А из-за угла, под которым находится корпус, интенсивнее работают и передние пучки дельты!",
            key: "37", 
        }
    ]);

    const [modal, setModalVisible] = useState(false)


    return (
        <View style={gStyle.SecMain}>

        <Modal visible={modal}>
            <Text style={[gStyle.secTitle, {marginTop: 80}]}>Как выполнять?</Text>
            <AntDesign name="close" style={[style.icon, {marginLeft: 20}]} size={24} onPress={() => setModalVisible(false)} color="black" />
            <Text style={style.modalText}>На каждое упраженине требуется 2 подхода по 10-20 повторений</Text>
        </Modal>

            <View>
                <Text style={gStyle.secTitle}>Мощные грудные</Text>
                <AntDesign
                    name="infocirlceo"
                    size={24}
                    style={style.icon}
                    color="black"
                    onPress={() => setModalVisible(true)}
                />
            </View>

            <FlatList
                data={sec}
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
