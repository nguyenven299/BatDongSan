import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import ThongTinChung from '../GopVon/MoRongDeXuatGopVong/ThongTinChung'
import DoanhThuHoaHong from '../GopVon/MoRongDeXuatGopVong/DoanhThuHoaHong'
import ChinhSachThanhToan from '../GopVon/MoRongDeXuatGopVong/ChinhSachThanhToan'

import {
    ImageBackground,
    View,
    Text,
    TouchableOpacity,
    Alert,
    ScrollView,
    StyleSheet,
    TextInput,
    Modal
} from 'react-native';

const HoatDongGopVonNoiBo = ({ navigation }) => {
    const [Activity, setActivity] = useState()
    const [typeActivity, setTypeActivity] = useState(1)
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {

                }}
                style=
                {{
                    padding: 15
                }}
            >
                <FontAwesome
                    name="save" size={20} color='white'
                    style=
                    {{
                        marginRight: 10
                    }}
                ></FontAwesome>
            </TouchableOpacity>
        ),
        title: "Đề xuất góp vốn nội bộ",
    });
    return (
        <View
            style={{
                flex: 1
            }}
        >
            <ScrollView
                horizontal={true}
                style=
                {{
                    flex: 1
                }}
            >

                <View
                    style=
                    {{
                        flexDirection: 'row',
                        flex: 1,
                        alignContent: 'center',
                        justifyContent: 'space-between',
                        marginTop: 5,
                        backgroundColor: 'white',
                        // borderBottomColor: 'black',
                        // borderBottomWidth: 2,
                        shadowColor: '#000',
                        shadowOffset: {
                            width: 0,
                            height: 5,
                        },
                        shadowOpacity: 0.34,
                        shadowRadius: 6.27,

                        elevation: 10,

                    }}
                >
                    <TouchableOpacity
                        style=
                        {{
                            flex: 1,
                            borderBottomWidth: 2,
                            borderBottomColor: typeActivity == 1 ? 'yellow' : 'white',
                            marginLeft: 20
                        }}
                        onPress={
                            () => {
                                setActivity("ThongTinChung")
                                setTypeActivity(1)
                            }}
                    >
                        <Text
                            style=
                            {{
                                textAlign: 'center',
                                paddingVertical: 10,
                                fontSize: 15,
                                color: typeActivity == 1 ? '#FFA605' : 'black',
                                marginTop: 5,

                            }}
                        >THÔNG TIN CHUNG</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style=
                        {{
                            flex: 1,
                            borderBottomWidth: 2,
                            borderBottomColor: typeActivity == 2 ? 'yellow' : 'white',
                            marginLeft: 20
                        }}
                        onPress={
                            () => {
                                setActivity("ChinhSachThanhToan")
                                setTypeActivity(2)
                            }}
                    >
                        <Text
                            style=
                            {{
                                textAlign: 'center',
                                paddingVertical: 10,
                                fontSize: 15,
                                color: typeActivity == 2 ? '#FFA605' : 'black',
                                marginTop: 5,

                            }}
                        >CHÍNH SÁCH THANH TOÁN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style=
                        {{
                            flex: 1,
                            borderBottomWidth: 2,
                            borderBottomColor: typeActivity == 3 ? 'yellow' : 'white',
                            marginLeft: 20
                        }}
                        onPress={
                            () => {
                                setActivity("DoanhThuHoaHong")
                                setTypeActivity(3)
                            }}
                    >
                        <Text
                            style=
                            {{
                                marginTop: 5,
                                textAlign: 'center',
                                paddingVertical: 10,
                                fontSize: 15,
                                color: typeActivity == 3 ? '#FFA605' : 'black'


                            }}
                        >DOANH THU/HOA HỒNG</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View
                style=
                {{
                    flex: 9,
                }}
            >
                {
                    Activity == "ThongTinChung" ? (
                        <ThongTinChung></ThongTinChung>) : (
                            Activity == "ChinhSachThanhToan" ? (
                                <ChinhSachThanhToan></ChinhSachThanhToan>
                            ) : <DoanhThuHoaHong></DoanhThuHoaHong>
                        )
                }
            </View>


        </View>
    )
}
export default HoatDongGopVonNoiBo;