import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { nstyles } from '../styles/style'

export class DiaChi extends Component {
    render() {
        return (
            <View style={nstyles.containerView}>
                <Text>Địa chỉ</Text>
            </View>
        )
    }
}

export default DiaChi