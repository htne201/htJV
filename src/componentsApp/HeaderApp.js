import { View, Text } from 'react-native'
import React from 'react'
import { reSize, reText } from '../styles/size'
import { colors } from '../styles'

const HeaderApp = (props) => {
    const { Title } = props
    return (
        <View style={{
            alignItems: 'center',
            borderBottomWidth: 1,
            borderColor: colors.grayBorder,
            paddingVertical: reSize(10)
        }}>
            <Text style={{ fontSize: reText(18), color: colors.black, fontWeight: '600' }}>{Title}</Text>
        </View>
    )
}

export default HeaderApp