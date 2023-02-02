import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { Component } from 'react'
import HeaderApp from '../componentsApp/HeaderApp'
import { colors } from '../styles'

export class Hoatdong extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
                <HeaderApp Title={'Hoạt động'} />
                <View style={style.container}>
                    <Text style={{ fontSize: 20, color: 'black', alignItems: 'center' }}>Hiện tại không có hoạt động nào </Text>
                </View>
            </SafeAreaView>
        )
    }
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 90
    },
})

export default Hoatdong