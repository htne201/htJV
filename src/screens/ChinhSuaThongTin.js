import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { nstyles } from '../styles/style'

export class ChinhSuaThongTin extends Component {
    render() {
        return (
            <View style={nstyles.containerView}>
                <Text>Chỉnh sửa thông tin</Text>
            </View>
        )
    }
}

export default ChinhSuaThongTin