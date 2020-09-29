import React, { useState, useEffect } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import ThongTinChung from '../MoRongNguyenTacHopDong/ThongTinChung'
import ThongTinGia from '../MoRongNguyenTacHopDong/ThongTinGia'
import TienDoThanhToan from '../MoRongNguyenTacHopDong/TienDoThanhToan'
import HopDongDichVu from './HopDongDichVu'
import ThongTinKhac from './ThongTinKhac'

import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

const HopDongNguyenTac = ({ navigation }) => {
    const [typeActivity, setTypeActivity] = useState(1)
    navigation.setOptions({

        headerTitle: () =>
            (
                <Text
                    style=
                    {{
                        fontSize: 20,
                        color: 'white',
                        justifyContent: 'center',
                        marginHorizontal: 20
                    }}
                >
                    Hợp đồng nguyên tắc
                </Text>
            )
    });
    return (

        <View
            style=
            {{
                flex: 1
            }}
        >


            <View
                style=
                {{
                    flex: 1,
                    flexDirection: 'column'
                }}
            >
                <View
                    style=
                    {{
                        flexDirection: 'row',
                        flex: 1,
                        alignContent: 'center',
                        justifyContent: 'space-between',
                        height: '8%',
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
                        paddingHorizontal: 20,
                        elevation: 10,

                    }}
                >
                    <ScrollView
                        horizontal={true}
                    >


                        <TouchableOpacity
                            style=
                            {{
                                flex: 1,
                                borderBottomWidth: 2,
                                borderBottomColor: typeActivity == 1 ? 'yellow' : 'white',
                                paddingHorizontal: 20
                            }}
                            onPress={
                                () => {
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

                                }}
                            >THÔNG TIN CHUNG</Text>

                        </TouchableOpacity>

                        <TouchableOpacity
                            style=
                            {{
                                flex: 1,
                                borderBottomWidth: 2,
                                borderBottomColor: typeActivity == 2 ? 'yellow' : 'white',
                                paddingHorizontal: 20
                            }}
                            onPress={
                                () => {
                                    setTypeActivity(2)
                                }}
                        >
                            <Text
                                style=
                                {{
                                    textAlign: 'center',
                                    paddingVertical: 10,
                                    fontSize: 15,
                                    color: typeActivity == 2 ? '#FFA605' : 'black'


                                }}
                            >THÔNG TIN GIÁ</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style=
                            {{
                                flex: 1,
                                borderBottomWidth: 2,
                                borderBottomColor: typeActivity == 3 ? 'yellow' : 'white',
                                paddingHorizontal: 20
                            }}
                            onPress={
                                () => {
                                    setTypeActivity(3)
                                }}
                        >
                            <Text
                                style=
                                {{
                                    textAlign: 'center',
                                    paddingVertical: 10,
                                    fontSize: 15,
                                    color: typeActivity == 3 ? '#FFA605' : 'black'


                                }}
                            >TIẾN ĐỘ THANH TOÁN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style=
                            {{
                                flex: 1,
                                borderBottomWidth: 2,
                                borderBottomColor: typeActivity == 4 ? 'yellow' : 'white',
                                paddingHorizontal: 20
                            }}
                            onPress={
                                () => {
                                    setTypeActivity(4)
                                }}
                        >
                            <Text
                                style=
                                {{
                                    textAlign: 'center',
                                    paddingVertical: 10,
                                    fontSize: 15,
                                    color: typeActivity == 4 ? '#FFA605' : 'black'


                                }}
                            >HỢP ĐỒNG DỊCH VỤ</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style=
                            {{
                                flex: 1,
                                borderBottomWidth: 2,
                                borderBottomColor: typeActivity == 5 ? 'yellow' : 'white',
                                paddingHorizontal: 20
                            }}
                            onPress={
                                () => {
                                    setTypeActivity(5)
                                }}
                        >
                            <Text
                                style=
                                {{
                                    textAlign: 'center',
                                    paddingVertical: 10,
                                    fontSize: 15,
                                    color: typeActivity == 5 ? '#FFA605' : 'black'


                                }}
                            >THÔNG TIN KHÁC</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
                <View
                    style=
                    {{
                        height: "92%"
                    }}
                >
                    {
                        typeActivity == 1 ? (<ThongTinChung />) : (
                            typeActivity == 2 ? (<ThongTinGia />) : (
                                typeActivity == 3 ? (<TienDoThanhToan />) : (
                                    typeActivity == 4 ? (<HopDongDichVu />) :
                                        (<ThongTinKhac />)
                                )))
                    }
                </View>
            </View>
        </View>

    )
}
export default HopDongNguyenTac