import { Text, StyleSheet, View, Image, ImageBackground } from "react-native";
import React, { Component } from "react";
import { nstyles } from "../styles/style";

const ThanhToan = () => {
    return (
        <View style={nstyles.containerView}>
            <Text style={{ fontSize: 20, color: 'grey', alignItems: 'center' }}> Chưa có đơn hàng nào </Text>
        </View>

    )
}
export default ThanhToan;

const style = StyleSheet.create({

})