import React, { Component, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,

} from 'react-native';
import Utils from "../../app/Utils";
import LogoApp from "../componentsApp/LogoApp";
import { Images } from "../Images";
import { colors } from "../styles";
import { reSize, reText } from "../styles/size";

const Login = (props) => {
  const [trangThaiDangNhap, setTrangThaiDangNhap] = useState(true)
  const [visibleMatKhau, setVisibleMatKhau] = useState(true)
  const [visibleReMatKhau, setVisibleReMatKhau] = useState(true)

  const onLogin = () => {
    if (trangThaiDangNhap) {
      Utils.replace({ props: props }, "Home")
    }
  }

  const onRegister = () => {
    if (trangThaiDangNhap) {
      //set thành trạng thái đăng ký
      setTrangThaiDangNhap(false)
    }
    else {
      //set về thành trạng thái đăng nhập
      setTrangThaiDangNhap(true)
    }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.grayBorder }}>
      <ScrollView showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flex: 1, alignItems: 'center' }}
      >
        <LogoApp Styles={{ marginTop: reSize(100), marginBottom: reSize(30) }} />
        {/* <Text style={{ fontSize: reText(16), color: colors.Jup, marginTop: reSize(5) }}>{`Ứng dụng dành cho`}</Text>
        <Text style={{ fontSize: reText(16), fontWeight: 'bold', color: colors.Jup, marginTop: reSize(5), marginBottom: reSize(50) }}>{`NHÂN VIÊN GIÚP VIỆC`}</Text> */}

        <TextInput
          placeholder="Số điện thoại"
          style={styles.styleTextInput}
          keyboardType='number-pad'
        />

        <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.styleTextInput}>
            <TextInput
              placeholder="Mật khẩu"
              secureTextEntry={visibleMatKhau}
              style={{ flex: 1, padding: 0 }}
            />
            <TouchableOpacity
              onPress={() => { setVisibleMatKhau(!visibleMatKhau) }}
            >
              <Image
                source={visibleMatKhau ? Images.icHidden : Images.icView}
                style={{ width: reSize(18), height: reSize(18), tintColor: 'gray' }}
                resizeMode='contain'
              />
            </TouchableOpacity>
          </View>
        </View>

        {!trangThaiDangNhap && <View style={{ width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <View style={styles.styleTextInput}>
            <TextInput
              placeholder="Nhập lại mật khẩu"
              secureTextEntry={visibleReMatKhau}
              style={{ flex: 1, padding: 0 }}
            />
            <TouchableOpacity
              onPress={() => { setVisibleReMatKhau(!visibleReMatKhau) }}
            >
              <Image
                source={visibleReMatKhau ? Images.icHidden : Images.icView}
                style={{ width: reSize(18), height: reSize(18), tintColor: 'gray' }}
                resizeMode='contain'
              />
            </TouchableOpacity>
          </View>
        </View>}

        {trangThaiDangNhap && <TouchableOpacity
          style={{ alignSelf: 'flex-end', marginRight: '6%', paddingVertical: reSize(5) }}
        >
          <Text style={{ color: colors.Jup }}>{`Quên mật khẩu?`}</Text>
        </TouchableOpacity>}

        {/*button đăng nhập */}
        <TouchableOpacity style={styles.loginBtn} onPress={() => { onLogin() }}>
          <Text style={styles.loginText}>{trangThaiDangNhap ? `ĐĂNG NHẬP` : `ĐĂNG KÝ NGAY`}</Text>
        </TouchableOpacity>

        {/* button tạo tài khoản */}
        <TouchableOpacity style={[styles.loginBtn, { backgroundColor: colors.Viec }]} onPress={() => { onRegister() }}>
          <Text style={styles.loginText}>{trangThaiDangNhap ? `TẠO TÀI KHOẢN` : 'QUAY LẠI ĐĂNG NHẬP'}</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  )
};
export default Login;
const styles = StyleSheet.create({
  loginBtn: {
    width: "90%",
    borderRadius: reSize(10),
    alignItems: 'center',
    justifyContent: "center",
    marginTop: 10,
    paddingVertical: reSize(15),
    backgroundColor: colors.Jup,
  },
  loginText: {
    color: colors.white,
    fontWeight: 'bold'
  },
  styleTextInput: {
    width: "90%",
    backgroundColor: colors.white,
    marginVertical: reSize(5),
    padding: reSize(10),
    borderRadius: reSize(6),
    flexDirection: 'row',
    alignItems: 'center'
  }

});