import { Text, StyleSheet, View, Image, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";
import React, { Component } from "react";
import { colors } from "../styles";
import HeaderApp from "../componentsApp/HeaderApp";
import { Images } from "../Images";
import { reSize, reText } from "../styles/size";
import TouchAbleApp from "../componentsApp/TouchAbleApp";

const content = [
  {
    id: 1,
    name: 'Quét mã QR',
    icon: Images.icQRScan
  },
  {
    id: 2,
    name: 'Nhân viên yêu thích',
    icon: Images.icHeart
  },
  {
    id: 3,
    name: 'Nhân viên đã chặn',
    icon: Images.icBrokenHeart
  },
  {
    id: 4,
    name: 'Cam kết của JupViec',
    icon: Images.icNotes
  },
  {
    id: 5,
    name: 'Góp ý cho JupViec',
    icon: Images.icChat
  },
  {
    id: 6,
    name: 'Liên hệ',
    icon: Images.icEmail
  },
]

const Khac = () => {
  const renderMenu = () => {
    return (
      <View style={{ marginHorizontal: reSize(12) }}>
        {content.map((item) => {
          return (
            <TouchAbleApp
              item={item}
              onPress={() => { console.log('click'); }}
              showBorder={item.id != 6}
            />
          )
        })}
      </View>
    )
  }

  return (
    <SafeAreaView style={style.container}>
      <HeaderApp Title={'Khác'} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {renderMenu()}
      </ScrollView>
    </SafeAreaView>

  )
}
export default Khac;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  }
});