import React, { useState } from "react";
import { gStyle } from "../style/style";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HandsExs({ navigation }) {
    const [hands, setExs] = useState([
        {
            nameExs: "Сгибания рук с разворотом",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1382.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634721369.gif"),
            desc: 'Этапы выполнения: Поставьте ноги на ширине плеч и слегка согните ноги в коленях. В верхней позиции ладони направлены к телу. Медленно опустите руки вниз, контролируя нагрузку на мышцы.',
            key: "1",
        },
        {
            nameExs: "Сгибания рук со штангой",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1384.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634720558.gif"),
            desc: "Этапы выполнения: Поставьте ноги на ширине плеч и слегка согните их в коленях. Опустите руки вниз так, чтобы они расположились над бедрами; сгибая руки только в локтях, поднимите штангу к верхней части груди. Подсказка: Не качайте бедрами и спиной во время выполнения этого упражнения.",
            key: "2", 
        },
        {
            nameExs: "Сгибания рук лежа на спине",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1398.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634728742.gif"),
            desc: "Медленно поднимайте руки до уровня груди, затем поверните гантели, скрутив ладони так, чтобы предплечья коснулись бицепсов.",
            key: "3", 
        },
        {
            nameExs: "Сгибания рук обратным хватом с поворотом",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1400.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634728813.gif"),
            desc: "Сгибайте руки вверх, поворачивая запястья так, чтобы они смотрели вниз, когда гантели находятся у груди.",
            key: "4", 
        },
        {
            nameExs: "Сгибания рук обратным хватом со штангой",
            img: require("../assets/img/hands/IMG_1402.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634728789.gif"),
            desc: "Это упражнение не только создает форсированную тягу для бицепсов, но также прорабатывает предплечья. Подсказка: Не меняйте положения локтей или плеч, выполняя это упражнение.",
            key: "5", 
        },
        {
            nameExs: "Сгибания рук обратным хватом с гантелями",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1404.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634728769.gif"),
            desc: "Это упражнение является вариантом, противоположным упражнению на сгибание, в котором прорабатываются все мышцы рук.",
            key: "6", 
        },
        {
            nameExs: "Сгибания рук с кривым грифом",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1406.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634728857.gif"),
            desc: "Подсказка: Обопритесь о стену или другую опору, если есть проблемы с сохранением устойчивости при махах.",
            key: "7", 
        },
        {
            nameExs: "Сгибания рук со штангой сидя",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1410.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634728911.gif"),
            desc: "Упражнения на концентрацию ограничивают диапазон движения, за счет чего увеличивается его эффективность. В этом варианте используется штанга. Подсказка: Не меняйте положения тела, пока руки выполняют упражнение.",
            key: "8", 
        },
        {
            nameExs: "Сгибания рук с олимпийским грифом",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1412.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634728951.gif"),
            desc: "Подсказка: Если штанга с олимпийским грифом слишком тяжела для вас, воспользуйтесь штангой с более легким весом.",
            key: "9", 
        },
        {
            nameExs: "Сгибания рук с упором в бедро",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1414.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634728972.gif"),
            desc: "Подсказка: Все тело, кроме руки, которая выполняет упражнение, держите неподвижным.",
            key: "10", 
        },
        {
            nameExs: "Хаммер",
            img: require("../assets/img/hands/IMG_1416.jpg"),
            nameType: ' (Руки)',
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634728993.gif"),
            desc: "В этом упражнении используются движения, имитирующие удар (вверх и вниз), чтобы изолировать бицепсы. Подсказка: При выполнении этого упражнения не поворачивайте запястий.",
            key: "11", 
        },
        {
            nameExs: "Алмазные отжимания",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1418.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634729018.gif"),
            desc: "Примите упор лежа, как для отжиманий. Руки расположите так, чтобы образовалась форма алмаза между указательными и большими пальцами.",
            key: "12", 
        },
        {
            nameExs: "Обратные отжимания от стульев",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1420.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634729047.gif"),
            desc: "Держа спину ровной, а плечи расслабленными, медленно опустите корпус до тех пор, пока ягодицы не могут находитсья слегка над полом, локти согнуты под углом 100 градусов",
            key: "13", 
        },
        {
            nameExs: "Жим лежа узким хватом",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1422.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634729070.gif"),
            desc: "Подсказка: Не отталкивайте штангу резко от груди. Выполняйте движение медленно и сосредоточено.",
            key: "14", 
        },
        {
            nameExs: "Классическое отведение рук со штангой",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1424.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634729091.gif"),
            desc: "Сгибая только локти, медленно опускайте и поднимайте штангу.",
            key: "15", 
        },
        {
            nameExs: "Обратная планка",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1426.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634729123.gif"),
            width: 300,
            desc: "Поместите руки за спиной и приподнимите корпус, держа тело прямо. Удерживайте данное положение в течение произвольного периода времени.",
            key: "16", 
        },
        {
            nameExs: "Отведение рук с гантелью за голову",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1429.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634729144.gif"),
            desc: "Когда поднимите руки и плечи до упора, медленно опускайте гантели за голову дугообразным движением.",
            key: "17", 
        },
        {
            nameExs: "Отжимания на предплечиях",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1431.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634729173.gif"),
            desc: "Начните упражнение в положении традиционных отжиманий, руки под плечами. Удерживая левую руку прямой, опуститесь на предплечье правой руки.",
            key: "18", 
        },
        {
            nameExs: "Поочередное разгибание рук над лицом",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1433.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634729203.gif"),
            desc: "Подсказка: Не выполняйте это упражнение, если ваши руки устали, поскольку вы можете уронить вес на лицо.",
            key: "19", 
        },
        {
            nameExs: "Поднятия блина",
            img: require("../assets/img/hands/IMG_1396.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634728701.gif"),
            desc: "Этапы выполнения: Поставьте ноги на ширине плеч и слегка согните их в коленях, мышцы пресса подтяните. Возьмите в руки блин захватом сверху вниз (ладонями вниз) в положении стрелок, показывающих время от 11 до 13 часов.",
            key: "21", 
        },
        {
            nameExs: "Французский жим за головой",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1439.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634729279.gif"),
            desc: "В исходном положении возьмите гантель двумя руками так, чтобы ладони смотрели вверх, и поднимите вес над головой. Опустите гантели по дуге из положения над головой в положение за спиной.",
            key: "22", 
        },
        {
            nameExs: "Французский жим за головой стоя",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1441.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634729300.gif"),
            desc: "Возьмите прямую или изогнутую штангу, руки на ширине 15–20 см, ладони вверх. Поднимите штангу над головой и медленно опускайте её дугообразным движением за голову по направлению к спине.",
            key: "23", 
        },
        {
            nameExs: "Французский жим с гантелей из-за головы",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1443.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634729327.gif"),
            desc: "Подсказка: Положите свободную руку на грудь, чтобы сохранять равновесие при выполнении этого упражнения.",
            key: "24", 
        },
        {
            nameExs: "Кистевое скручивание одной рукой сидя",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1445.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634729379.gif"),
            desc: "Подсказка: Не пытайтесь резко дергать вес вверх, движения должны быть плавными и неторопливыми.",
            key: "25", 
        },
        {
            nameExs: "Кистевой скручивание штаги ладонями вверх",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1447.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634729398.gif"),
            desc: "Подсказка: Не пытайтесь резко вздернуть вес вверх, движения должны быть плавными и неторопливыми.",
            key: "26", 
        },
        {
            nameExs: "Обратное концентрированное сгибание",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1449.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634729422.gif"),
            desc: "Подсказка: Не раскачивайте руку вперёд-назад, так как это может травмировать локоть. Наоборот, движения должны быть плавными, контролируемыми. Не раскачивайте корпусом, чтобы помочь себе поднять вес вверх; чтобы исключить возможность возникновения момента инерции, корпус должен быть неподвижным.",
            key: "27", 
        },
        {
            nameExs: "Обратное сгибание рук со штангой стоя",
            nameType: ' (Руки)',
            img: require("../assets/img/hands/IMG_1451.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634729443.gif"),
            desc: "Подсказка: В этом упражнении единственным двигающимся суставом должен быть локоть. Не вздергивайте вес резко вверх, а поднимайте медленно, контролируя темп движения, чтобы избежать появления инерции.",
            key: "28", 
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
            nameExs: "Жим хаммер",
            nameType: ' (Грудь)',
            img: require("../assets/img/hands/IMG_1468.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744166.gif"),
            desc: "Сконцентрируйтесь на напряжении в грудных мышцах, чтобы убедиться, что по большей мере упражнение выполняется грудью, а не дельтовидными мышцами или трицепсами. Делайте вдох во время опускания весов, и выдох – во время их выжимания вверх.",
            key: "33", 
        },
        {
            nameExs: "Махи гантелями под наклоном",
            nameType: ' (Грудь)',
            img: require("../assets/img/hands/IMG_1470.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744203.gif"),
            desc: "Сконцентрируйтесь на ощущениях грудных мышц, чтобы убедиться, что упражнение выполняется именно грудью, а не дельтовидными мышцами.",
            key: "34", 
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
            nameExs: "Отжимания Спайдермэн",
            nameType: ' (Грудь)',
            img: require("../assets/img/hands/IMG_1474.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744278.gif"),
            desc: "Опуская тело, вынесите ногу в сторону и притяните колено к локтю. Согнитесь в локтях под углом 90 градусов, держа грудь слегка над полом. Поднимаясь, разогните ногу. Повторите с другой стороны.",
            key: "36", 
        },
        {
            nameExs: "Отжимания на скамье",
            nameType: ' (Грудь)',
            img: require("../assets/img/hands/IMG_1476.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744315.gif"),
            desc: "Так как ноги подняты вверх, в этом упражнении лучше прорабатываются грудные мышцы, чем в традиционных отжиманиях. А из-за угла, под которым находится корпус, интенсивнее работают и передние пучки дельты!",
            key: "37", 
        },
        {
            nameExs: "Отжимания с касанием плеча",
            nameType: ' (Грудь)',
            img: require("../assets/img/hands/IMG_1478.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744338.gif"),
            desc: "Начните упражнение в позе классических отжиманий, ступни расставлены на ширине плеч, руки на уровне груди и шире плеч. Отожмитесь, держа мышцы пресса в напряжении, ударьте по плечу противоположной стороны.",
            key: "38", 
        },
        {
            nameExs: "Пулловер за голову лежа",
            nameType: ' (Грудь)',
            img: require("../assets/img/hands/IMG_1480.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744376.gif"),
            desc: "Все время держите спину прижатой к скамье. Ноги также должны стоять на полу. Сохраняйте удобный для вас диапазон движения.",
            key: "39", 
        },
        {
            nameExs: "Сведение рук на наклонной скамье",
            nameType: ' (Грудь)',
            img: require("../assets/img/hands/IMG_1482.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744410.gif"),
            desc: "Не отрывайте бедра и плечи от скамьи во время выполнения этого упражнения.",
            key: "40", 
        },
        {
            nameExs: "Хаммер с вгутренним хватом",
            nameType: ' (Грудь)',
            img: require("../assets/img/hands/IMG_1484.jpg"),
            gif: require("../assets/img/hands/handsGif/RPReplay_Final1634744432.gif"),
            desc: "Поднимите гантели. Убедитесь, что ладони всегда обращены друг к другу. Поднимайте гантели до тех пор, пока они не окажутся над плечами. Задержитесь в этом положении ненадолго, затем медленно опустите гантели.",
            key: "41", 
        },
    ]);

    return (
        <View style={gStyle.SecMain}>
            <View>
                <Text style={gStyle.secTitle}>Упражнения на корпус</Text>
            </View>

            <FlatList
                data={hands} 
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
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
