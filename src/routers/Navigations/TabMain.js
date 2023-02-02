import 'react-native-gesture-handler';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Router } from '../Router';
import { Image } from 'react-native';
import { Images } from '../../Images';
import { reSize } from '../../styles/size';
import { colors } from '../../styles';

const Tab = createBottomTabNavigator();
export const TabMain = ({ navigation, route, ...res }) => {
    return (
        <Tab.Navigator initialRouteName={'tab_Home'}
            tabBarOptions={{
                activeTintColor: colors.colorApp,
            }}
        >
            <Tab.Screen name="Đặt DV" component={Router.DatDV}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image source={Images.icDatDV} style={{ width: reSize(25), height: reSize(25), tintColor: color }} resizeMode='contain' />
                    )
                }} />
            <Tab.Screen name="Lịch sử" component={Router.LichSu}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Image source={Images.icLichSu} style={{ width: reSize(25), height: reSize(25), tintColor: color }} resizeMode='contain' />
                    )
                }} />
            <Tab.Screen name="Hoạt động" component={Router.Hoatdong} options={{
                tabBarIcon: ({ color }) => (
                    <Image source={Images.icHoatDong} style={{ width: reSize(25), height: reSize(25), tintColor: color }} resizeMode='contain' />
                )
            }} />
            <Tab.Screen name="Thông báo" component={Router.ThongBao} options={{
                tabBarIcon: ({ color }) => (
                    <Image source={Images.icThongBao} style={{ width: reSize(25), height: reSize(25), tintColor: color }} resizeMode='contain' />
                )
            }} />
            <Tab.Screen name="Khác" component={Router.Khac} options={{
                tabBarIcon: ({ color }) => (
                    <Image source={Images.icKhac} style={{ width: reSize(25), height: reSize(25), tintColor: color }} resizeMode='contain' />
                )
            }} />
        </Tab.Navigator>
    )
}