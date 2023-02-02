import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { Images } from '../Images'
import { reSize, reText } from '../styles/size'
import { colors } from '../styles'

const TouchAbleApp = (props) => {
    const { item, onPress = () => { }, showBorder = true, showIconBack = true } = props
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={item.icon}
                style={{
                    width: reSize(20), height: reSize(20),
                    marginRight: reSize(12),
                    tintColor: colors.blueMenu
                }} resizeMode='contain' />
            <View
                style={{
                    borderBottomWidth: showBorder ? 1 : 0, borderBottomColor: colors.grayBorder, flex: 1,
                    flexDirection: 'row', paddingVertical: 15, marginVertical: 2
                }}
            >
                <Text style={{ flex: 1, color: colors.black, fontSize: reText(16) }}>{item.name}</Text>
                {showIconBack && <Image source={Images.icBack}
                    style={{ width: reSize(16), height: reSize(16) }} resizeMode='contain' />}
            </View>
        </TouchableOpacity>
    )
}

export default TouchAbleApp