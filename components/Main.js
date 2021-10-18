import React from "react";
import { gStyle } from "../style/style";
import { View, Text, Image, StyleSheet, Button } from "react-native";


export default function Main() {
    return (
        <View style={gStyle.main}>
            <Text style={gStyle.title}>Добро пожаловать 👋</Text>
            <Text style={{fontSize: 23}}>Категории</Text>
            <View style={style.df}>
                <View style={style.blueBorder}>
                    <Image style={style.img} source={require('../assets/img/mainWindow/firstMan.png')} />
                </View>
                <View style={style.blueBorder}>
                    <Image style={style.img} source={require('../assets/img/mainWindow/secMan.png')} />
                </View>
                <View style={style.blueBorder}>
                    <Image style={style.img} source={require('../assets/img/mainWindow/thirdMan.png')} />
                </View>
            </View>
            <View>
                <Text style={{fontSize: 28}}>Тренировки</Text>
                <View style={[style.block, {backgroundColor: '#bce5ff'}]}>
                    <View style={style.blockMain}>
                        <Text style={gStyle.traiName}>Силовая {"\n"}тренировка</Text>
                        <View style={style.viewTime}>
                            <Text style={style.textTime}>▶ 15 мин</Text>
                        </View>
                    </View>
                    <Image style={style.imgTrening} source={require('../assets/img/mainWindow/bodybuilding_PNG93.png')} />
                </View>
                <View style={[style.block, {backgroundColor: '#cebaf9'}]}>
                    <View style={style.blockMain}>
                        <Text style={gStyle.traiName}>Мощные {"\n"}грудные</Text>
                        <View style={style.viewTime}>
                            <Text style={style.textTime}>▶ 25 мин</Text>
                        </View>
                    </View>
                    <Image style={style.imgTrening} source={require('../assets/img/mainWindow/man-dumbbell.png')} />
                </View>
                <View style={[style.littleBlock, {backgroundColor: '#d9dfff'}]}>
                    <View style={style.book}>
                        <Text style={{fontSize: 25}}>Мои тренировки </Text>
                        <Image style={{width: 32, marginTop: 3}} source={require('../assets/img/mainWindow/outline_book_black_24dp.png')}/>
                    </View>
                </View>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    block: {
        marginTop: 20,
        width: '95%',
        height: 150,
        marginLeft: 2,
        borderRadius: 10,
    },
    blockMain: {
        flexDirection: 'column'
    },
    viewTime: {
        backgroundColor: 'white',
        width: 90,
        height: 30,
        paddingTop: 3,
        paddingBottom: 3,
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 5,
        position: 'relative',
        top: 30,
        left: 30
    },
    textTime: {
        textAlign: 'center',
        fontSize: 18
    },  
    imgTrening: {
        width: 120,
        height: 140,
        position: 'relative',
        left: 230,
        top: -85
    },
    littleBlock: {
        marginTop: 20,
        width: '95%',
        height: 80,
        marginLeft: 2,
        borderRadius: 10,
    },
    book : {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20
    },
    blueBorder: {
        width: 100,
        height: 100,
        padding: 20,
        backgroundColor: '#f0f1fd',
        borderRadius: 10,
        marginRight: 20
    },
    img: {
        position: 'relative',
        top: -14,
        left: -10
    },
    df: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 40
    }
}); 