import React, {useState} from "react";
import { gStyle } from "../style/style";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function GymnasticsExs({navigation}) { 

    const [gymn, setExs] = useState([
        {
            nameExs: "Вариант растягивания абдутора",
            img: require("../assets/img/gymn/IMG_1541.jpg"),
            gif: require("../assets/img/gymn/gymnGif/RPReplay_Final1634909572.gif"),
            desc: "Взявшись руками за кончики пальцев на ногах, прижимайте локтями колени в сторону пола как можно дальше до тех пор, пока чувство растяжения в бедрах будет комфортным. Задержитесь в таком положении на 10-30 секунд.", 
            key: "1",
        },
        {
            nameExs: "Вариант растягивания икроножной мышцы",
            img: require("../assets/img/gymn/IMG_1543.jpg"),
            gif: require("../assets/img/gymn/gymnGif/RPReplay_Final1634909694.gif"),
            desc: "Наклоните корпус вперёд по направлению к согнутой ноге, тем временем удерживая правую ногу прямой и не отрывая пятку от пола. Задержитесь в этом положении на 10-30 секунд, затем повторите все то же самое для другой ноги.", 
            key: "2",
        },
        {
            nameExs: "Растягивание бедра",
            img: require("../assets/img/gymn/IMG_1545.jpg"),
            gif: require("../assets/img/gymn/gymnGif/RPReplay_Final1634909762.gif"),
            desc: "Опуститесь на правое колено, а левую ногу согните в колене так, чтобы стопа полностью стояла на полу, а корпус был в вертикальном положении. Удерживая спину выпрямленной, наклоните корпус вперёд, пока не почувствуете растяжение в верхней части ног.", 
            key: "3",
        },
        {
            nameExs: "Растягивание ног",
            img: require("../assets/img/gymn/IMG_1547.jpg"),
            gif: require("../assets/img/gymn/gymnGif/RPReplay_Final1634909800.gif"),
            desc: "Встанте на левую ногу, колени соедините и рукой мягко подтяните правую ногу к ягодицам до комфортного ощущения растяжения. Отпустите ногу, повторите все то же, но для другой ноги.", 
            key: "4",
        },
        {
            nameExs: "Растягивание поясницы",
            img: require("../assets/img/gymn/IMG_1549.jpg"),
            gif: require("../assets/img/gymn/gymnGif/RPReplay_Final1634909838.gif"),
            desc: "Наклонитесь вперёд до тех пор, пока грудная клетка не окажется на бедрах. По мере наклона вниз обнимите руками себя за колени так, чтобы руки оказались под бедрами и дотрагивались до задней поверхности колен.", 
            key: "5",
        },
        {
            nameExs: "Растягивание предплечия",
            img: require("../assets/img/gymn/IMG_1551.jpg"),
            gif: require("../assets/img/gymn/gymnGif/RPReplay_Final1634909861.gif"),
            desc: "Встанте прямо, правую руку проверните за мизинцем так, чтобы ладонь оказалась направлена в стену справа. Осторожно потяните правую руку вверх по направлению к стене до тех пор, пока чувство растяжения будет оставаться комфортным. ", 
            key: "6",
        },
        {
            nameExs: "Растягивание приводящей мышцы",
            img: require("../assets/img/gymn/IMG_1553.jpg"),
            gif: require("../assets/img/gymn/gymnGif/RPReplay_Final1634909885.gif"),
            desc: "Продолжая удерживать корпус прямо, не разворачивая его, сделайте большой шаг вперёд правой ногой, сгибая её в колене как можно дальше, а левая нога остается при этом прямой и стоит на исходной позиции. Левая нога должна развернуться наружу.", 
            key: "7",
        }
    ]); 

    return (
        <View style={gStyle.SecMain}>
            <View>
                <Text style={gStyle.secTitle}>Растяжка</Text>
            </View>

            <FlatList data={gymn} showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false} renderItem={({item}) => (
            <TouchableOpacity style={{ marginTop: 20, height: 90 }} onPress={() => navigation.navigate("GymnWorkout", item)}>
               <View style={{borderBottomWidth: 1, borderBottomColor: 'gray'}}>
                <Text>
                    <View
                        style={style.block}>
                        <Image style={style.img} source={item.img}/>
                        <Text style={style.text}>{item.nameExs}</Text>
                    </View>
                </Text>
               </View>
            </TouchableOpacity>
            )} />
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
        flexDirection: "row"
    },
    text: {
        fontSize: 20,
        fontWeight: "300",
        paddingLeft: 20,
        width: 10,
        marginTop: 5,
        width: 290,
        flexWrap: "wrap",
    }
});
