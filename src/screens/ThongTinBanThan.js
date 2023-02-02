import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { Images } from '../Images';
import { reSize, reText } from '../styles/size';
import Utils from '../../app/Utils';
import TouchAbleApp from '../componentsApp/TouchAbleApp';

export class ThongTinBanThan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menu: [
                {
                    id: 1,
                    name: 'Thanh toán',
                    icon: Images.icHandshake,
                    screen: 'sc_ThanhToan'
                },
                {
                    id: 2,
                    name: 'Địa chỉ đã lưu',
                    icon: Images.icLocation,
                    screen: 'sc_DiaChi'
                },
                {
                    id: 3,
                    name: 'Chỉnh sửa thông tin',
                    icon: Images.icSetting,
                    screen: 'sc_ChinhSuaThongTin'
                },
                {
                    id: 4,
                    name: 'Nhân viên yêu thích',
                    icon: Images.icHeart,
                    screen: 'sc_NhanVienYeuThich'
                },
                {
                    id: 5,
                    name: 'Đăng xuất',
                    icon: Images.icLogout,
                    screen: 'Login'
                }
            ]
        }
    }

    renderHeader = () => {
        return (
            <View style={{ flexDirection: 'row', marginTop: 10, marginHorizontal: 12, alignItems: 'center' }}>
                <View style={{ marginRight: 10 }}>
                    <Image source={Images.avatarDF}
                        style={{
                            width: reSize(100), height: reSize(100),
                            borderRadius: reSize(50),
                            overflow: 'hidden',
                            borderWidth: 0.5,
                            borderColor: 'gray'
                        }}
                        resizeMode="cover"
                    />
                </View>
                <View style={{ marginHorizontal: 5 }}>
                    <Text
                        style={{ fontWeight: '700', fontSize: reText(16), color: '#4b4b4b' }}
                    >{`Lê Thị Hoài Thương`}</Text>
                    <View style={{ flexDirection: 'row', marginTop: reSize(10) }}>
                        <Image source={Images.icTelephoneCall}
                            style={{ width: reSize(18), height: reSize(18), marginRight: 5, tintColor: '#4b4b4b' }}
                            resizeMode='contain'
                        />
                        <Text style={{ color: 'gray', fontSize: reSize(15) }}>{`012 345 6789`}</Text>
                    </View>
                </View>
            </View>
        )
    }

    renderMenu = () => {
        const { menu } = this.state
        return (
            <View style={{ marginHorizontal: reSize(12), marginTop: 10 }}>
                {menu.map((item) => {
                    return (
                        <TouchAbleApp
                            item={item}
                            onPress={() => { Utils.navigate(item.screen) }}
                            showBorder={item.id != 5}
                            showIconBack={item.id != 5}
                        />
                    )
                })}
            </View>
        )
    }

    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                {this.renderHeader()}
                {this.renderMenu()}
            </View>
        )
    }
}

export default ThongTinBanThan