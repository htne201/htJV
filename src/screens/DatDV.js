import { FlatList, Image, ImageBackground, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native'
import React, { Component } from 'react'
import { colors, nwidth } from '../styles'
import { Images } from '../Images'
import Utils from '../../app/Utils'
import { reSize, reText } from '../styles/size'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { Height, Width } from '../styles/style'

export class DatDV extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nhanVienNoiBat: [
                {
                    id: 1,
                    name: 'Hoa',
                },
                {
                    id: 2,
                    name: 'Lan',
                },
                {
                    id: 3,
                    name: 'Ngân',
                },
            ],
            danhSachDichVu: [
                {
                    id: 1,
                    name: 'Vệ sinh\nsofa',
                    icon: Images.ic5
                },
                {
                    id: 2,
                    name: 'Vệ sinh\nnhà',
                    icon: Images.ic1
                },
                {
                    id: 3,
                    name: 'Tổng vệ\nsinh',
                    icon: Images.ic3
                },
                // {
                //     id: 4,
                //     name: 'Phun khử\nkhuẩn',
                //     icon: Images.ic4
                // },
                // {
                //     id: 5,
                //     name: 'Vệ sinh\nsofa, nệm,\nrèm, thảm',
                //     icon: Images.ic5
                // },
                {
                    id: 6,
                    name: 'Vệ sinh\nvăn phòng',
                    icon: Images.ic6
                },
                // {
                //     id: 7,
                //     name: 'Giúp việc\ncả ngày /\n Tạp vụ',
                //     icon: Images.ic7
                // },
            ],
            danhSachBannerKM: [
                {
                    id: 1,
                    image: Images.banner1
                },
                {
                    id: 2,
                    image: Images.banner2
                },
                {
                    id: 3,
                    image: Images.banner3
                },
                {
                    id: 4,
                    image: Images.banner4
                },
                {
                    id: 5,
                    image: Images.banner5
                },
                {
                    id: 6,
                    image: Images.banner6
                }
            ],
            activeSlide: 0
        }

    }

    renderHeader = () => {
        return (
            <View >
                <ImageBackground
                    source={Images.BGHome}
                    style={{ width: '100%', height: 200 }}
                />
                <View style={{ position: 'absolute', marginTop: 25, flexDirection: 'row', marginHorizontal: 15 }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        style={{ flexDirection: 'row', flex: 1 }}
                        onPress={() => { Utils.navigate('sc_ThongTinBanThan') }}
                    >
                        <Image
                            source={Images.avatarDF}
                            style={{ width: 50, height: 50, borderRadius: 25, marginRight: 15 }}
                            resizeMode='cover'
                        />
                        <View>
                            <Text style={{ color: 'white', fontWeight: '600', fontSize: 16 }}>{`Chào buổi tối, Thương!`}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'flex-end', marginTop: 5 }}>
                                <Image
                                    source={Images.icVi}
                                    style={{ width: 20, height: 20, marginRight: 5, tintColor: 'white' }}
                                    resizeMode='contain'
                                />
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>{`0đ`}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    {/* chat */}
                    {/* <TouchableOpacity
                        activeOpacity={1}
                        style={{ width: reSize(40), height: reSize(40), borderWidth: 1, borderRadius: reSize(20), borderColor: 'white', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <Image source={Images.icMessenger}
                            style={{ width: reSize(25), height: reSize(25), tintColor: 'white' }}
                            resizeMode='contain'
                        />
                    </TouchableOpacity> */}
                </View>
            </View>
        )
    }

    renderNhanVienNoiBat = () => {
        const { nhanVienNoiBat } = this.state
        let widthTmp = (nwidth - 144) / 3
        return (
            <View style={{ marginTop: reSize(20) }}>
                <Text style={styles.titleChucNang}>{`Nhân viên nổi bật`}</Text>
                <View style={{
                    marginHorizontal: reSize(12), backgroundColor: colors.white,
                    borderRadius: reSize(8), borderWidth: 1, borderColor: colors.grayBorder,
                    height: reSize(145), alignItems: 'center', alignSelf: 'center',
                    marginTop: reSize(10)
                }}>
                    <FlatList
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={nhanVienNoiBat}
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity
                                    style={{ alignItems: 'center', marginHorizontal: reSize(20), marginVertical: reSize(5) }}>
                                    <View style={{
                                        width: widthTmp, height: widthTmp, backgroundColor: 'white',
                                        borderColor: colors.grayBorder,
                                        alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        <Image
                                            source={Images.avatarDF}
                                            style={{
                                                width: reSize(70), height: reSize(70),
                                                borderRadius: reSize(35), borderWidth: 1,
                                                borderColor: colors.grayBorder
                                            }}
                                            resizeMode='cover'
                                        />
                                    </View>
                                    <Text style={{ marginTop: reSize(5), fontSize: reText(16) }}>{item.name}</Text>
                                    <Text style={{ marginTop: reSize(5), fontSize: reText(12), color: colors.blue2 }}>{`Xem chi tiết`}</Text>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={(item) => item.id.toString()}
                    />

                    <View
                        style={{
                            alignItems: 'center', justifyContent: 'center', position: 'absolute',
                            width: '100%', height: '100%', backgroundColor: 'rgba(255,255,255,0.7)',
                            paddingHorizontal: reSize(50)
                        }}
                    >
                        <Text style={{ textAlign: 'center', color: colors.black }}>{`Nhập địa chỉ để chọn Nhân viên nổi bật quanh bạn`}</Text>
                        <TouchableOpacity
                            style={{
                                marginTop: reSize(15), backgroundColor: colors.colorApp,
                                paddingHorizontal: reSize(10), paddingVertical: reSize(5),
                                borderRadius: reSize(6), opacity: 1
                            }}
                        >
                            <Text style={{ color: colors.white }}>{`Nhập địa chỉ`}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }



    renderDichVu = () => {
        const { danhSachDichVu } = this.state
        let widthTmp = (nwidth - 80) / 4
        return (
            <View style={{ marginTop: reSize(20) }}>
                <Text style={styles.titleChucNang}>{`Dịch vụ`}</Text>
                <FlatList
                    numColumns={4}
                    contentContainerStyle={{}}
                    data={danhSachDichVu}
                    renderItem={({ item }) => {
                        return (
                            <TouchableOpacity
                                style={{
                                    alignItems: 'center', justifyContent: 'center',
                                    marginHorizontal: 10, marginTop: reSize(10), width: widthTmp
                                }}
                            >
                                <View style={{
                                    width: 60, height: 60, backgroundColor: 'white',
                                    borderWidth: 1, borderRadius: 30, borderColor: colors.grayBorder,
                                    alignItems: 'center', justifyContent: 'center'
                                }}>
                                    <Image
                                        source={item.icon}
                                        style={{ width: 30, height: 30 }}
                                        resizeMode='contain'
                                    />
                                </View>
                                <Text style={{ textAlign: 'center', fontSize: 15, marginTop: reSize(5) }}>{item.name}</Text>
                            </TouchableOpacity>
                        )
                    }}
                    keyExtractor={(item) => item.id.toString()}
                />
            </View>
        )
    }

    renderKhuyenMai = () => {
        const { danhSachBannerKM = [], activeSlide } = this.state
        return (
            <View style={{ marginTop: reSize(20) }}>
                <Text style={[styles.titleChucNang, { marginBottom: reSize(10) }]}>{`Khuyến mãi`}</Text>
                <Carousel
                    data={danhSachBannerKM}
                    renderItem={(item) => {
                        return (
                            <TouchableHighlight
                                style={{ borderRadius: 8 }}
                                onPress={() => { console.log('aaa' + item.index) }}
                            >
                                <Image
                                    source={item.item.image}
                                    style={{ width: '100%', height: reSize(110), borderRadius: 8 }}
                                    resizeMode='stretch'
                                />
                            </TouchableHighlight>
                        )
                    }
                    }
                    loop
                    autoplay
                    sliderWidth={Width(100)}
                    itemWidth={Width(86)}
                    slideStyle={{ width: Width(86) }}
                    layout={'default'}
                    autoplayInterval={5000}
                    onSnapToItem={(index) => this.setState({ activeSlide: index })}
                />
                < Pagination
                    dotsLength={danhSachBannerKM.length}
                    activeDotIndex={activeSlide}
                    containerStyle={{ marginTop: reSize(-20) }}
                    dotStyle={{
                        width: reSize(25),
                        height: reSize(5),
                        borderRadius: reSize(5),
                        marginHorizontal: reSize(-5),
                        backgroundColor: colors.colorApp
                    }}
                    inactiveDotStyle={{
                        width: reSize(14),
                        height: reSize(14),
                        borderRadius: reSize(7),
                        backgroundColor: colors.white,
                        borderWidth: 3,
                        borderColor: colors.colorGreen
                    }}
                    inactiveDotOpacity={0.4}
                    inactiveDotScale={0.6}
                />
            </View >
        )
    }

    render() {
        return (
            <SafeAreaView style={{ backgroundColor: colors.white, flex: 1 }}>
                {this.renderHeader()}
                <View style={{ position: 'absolute', marginTop: Platform.OS == 'android' ? 100 : 150, flex: 1 }}>
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ height: '110%' }}
                    >
                        {this.renderNhanVienNoiBat()}

                        {this.renderDichVu()}

                        {this.renderKhuyenMai()}
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    titleChucNang: {
        fontWeight: '600', fontSize: reText(16), marginLeft: 15
    }
})

export default DatDV