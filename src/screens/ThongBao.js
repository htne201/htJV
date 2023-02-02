import { Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity, SafeAreaView } from "react-native";
import React, { Component } from "react";
import HeaderApp from "../componentsApp/HeaderApp";
import { colors } from "../styles";

const ThongBao = () => {
    return (
        <SafeAreaView style={style.container}>
            <HeaderApp Title={'Thông báo'} />
            <TouchableOpacity style={style.loginBtn} >
                <Text style={style.loginText}>6 thói quen sai lầm khi dọn dẹp nhà cửa</Text>
            </TouchableOpacity>
        </SafeAreaView>


    )
}
export default ThongBao;

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    loginBtn: {
        width: "100%",
        height: 50,
        alignItems: 'center',
        justifyContent: "center",
        marginTop: 10,
        backgroundColor: "gainsboro",
    },
    loginText: {
        color: 'green',
        fontWeight: 'bold',
        fontSize: 20
    },
})