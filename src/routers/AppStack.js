import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Utils from '../../app/Utils';
import React from 'react';
import { Router } from './Router';
import { TabMain } from './Navigations/TabMain';
const Stack = createStackNavigator();
const AppStack = () => {
    return (
        <NavigationContainer ref={Utils._navigator}>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Router.Login} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={TabMain} options={{ headerShown: false }} />
                <Stack.Screen name="sc_ThongTinBanThan" component={Router.ThongTinBanThan}
                    options={{ headerBackTitleVisible: false, title: 'Cá nhân', headerTitleAlign: 'center' }} />
                <Stack.Screen name="sc_ThanhToan" component={Router.ThanhToan}
                    options={{ headerBackTitleVisible: false, title: 'Thanh toán', headerTitleAlign: 'center' }} />
                <Stack.Screen name="sc_DiaChi" component={Router.DiaChi}
                    options={{ headerBackTitleVisible: false, title: 'Địa chỉ', headerTitleAlign: 'center' }} />
                <Stack.Screen name="sc_ChinhSuaThongTin" component={Router.ChinhSuaThongTin}
                    options={{ headerBackTitleVisible: false, title: 'Chỉnh sửa thông tin', headerTitleAlign: 'center' }} />
                <Stack.Screen name="sc_NhanVienYeuThich" component={Router.NhanVienYeuThich}
                    options={{ headerBackTitleVisible: false, title: 'Nhân viên yêu thích', headerTitleAlign: 'center' }} />
            </Stack.Navigator>
        </NavigationContainer >
    );

}
export default AppStack