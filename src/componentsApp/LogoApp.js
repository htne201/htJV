import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { reText } from '../styles/size'
import { colors } from '../styles'

const LogoApp = (props) => {
    const { Styles = {} } = props
    return (
        <View style={[{ flexDirection: 'row' }, Styles]}>
            <Text
                style={[styles.S_textChung, { color: colors.Jup }]}
            >Jup</Text>
            <Text
                style={[styles.S_textChung, { color: colors.Viec }]}
            >Viec</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    S_textChung: { fontSize: reText(60) }
})

export default LogoApp