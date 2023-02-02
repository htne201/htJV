import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { nstyles } from '../styles/style'

export class NhanVienYeuThich extends Component {
    render() {
        return (
            <View style={nstyles.containerView}>
                <Text>Nhân viên yêu thich</Text>
            </View>
        )
    }
}

export default NhanVienYeuThich