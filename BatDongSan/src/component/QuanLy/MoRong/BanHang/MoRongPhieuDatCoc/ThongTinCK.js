import React, { useState } from 'react';
import ButtonComponent from '../../../../../common/ButtonComponent'
import InputTextComponent from '../../../../../common/InputTextComponent'
import MultiLineTextInputComponent from '../../../../../common/MultiLineTextInputComponent'
import ButtonRefesh from '../../../../../common/ButtonRefesh'
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import ButtonThongTinCKComponent from '../../../../../common/ButtonThongTinCKComponent'
import {
    View,
    Text
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const ThongTinCK = ({ navigation }) => {
    var data = [
        {
            id= 1,
            kiemTra= false,
            noiDung="Tặng 15 chỉ vàng với SP ĐNNP và NXS-Dưới 115m2",
            tien="85,5 triệu",
            ghiChu="Trừ vào giá",
            chuThich="**"
        },
        {
            id= 7,
            kiemTra= false,
            noiDung="CSBS ĐN-NPXS dưới 115m2",
            tien="98.3 triệu",
            ghiChu="Trừ vào giá"
        },
        {
            id= 10,
            kiemTra= false,
            noiDung="CK 5% ĐNNP và NXS dưới 115m2",
            tien="0",
            ghiChu="Trừ vào giá",
            chuThich="**"
        },
        {
            id= 14,
            kiemTra= true,
            noiDung="CK TT Sớm-Có vay và Không vay ngân hàng",
            tien="123.1 triệu",
            ghiChu="Trừ vào giá"
        }
    ]
    return (
        <View>
            <View
                style=
                {{
                    backgroundColor: 'orange',
                    height: 50,

                    alignContent: 'center',
                    justifyContent: 'center',

                    paddingHorizontal: 10,
                    marginBottom: 20,

                }}
            >
                <Text
                    style=
                    {{
                        fontSize: 20,
                        color: 'white'
                    }}
                >
                    Thông tin chiết khấu/Khuyến mãi
                    </Text>
            </View>
            <ScrollView>
                {
                    data.map((item, index) => (
                        <TouchableOpacity
                            style=
                            {{
                                flexDirection: 'row',
                                // justifyContent: 'space-between',
                                padding: 10,
                                alignContent: 'center',
                                alignItems: 'center',
                                borderBottomWidth: 0.5
                            }}
                            onPress=
                            {() => {
                                setType(!type)
                            }}
                        >
                            <Text
                                style=
                                {{
                                    width: 20
                                }}
                            >
                                {item.id}
                            </Text>
                            <FontAwesome
                                name={item.kiemTra ? "check-square" : "square"} size={20} color={type == true ? "orange" : "#4A4D53"}
                                style=
                                {{
                                    marginHorizontal: 20
                                }}
                            />
                            <View style={{ width: 180 }}>
                                <Text
                                    style=
                                    {{
                                        width: 160,
                                        fontSize: 15,
                                        color: '#4A4D53',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {item.noiDung}
                                </Text>
                                {
                                    item.chuThich != null & item.chuThich == "*" ? (
                                        <Text style={{
                                            color="red",
                                            position='absolute',
                                            top: 0, right: 0
                                        }}>*</Text>) : (item.chuThich != null & item.chuThich == "**" ? (<Text style={{
                                            color="red",
                                            position='absolute',
                                            top: 0, right: 0
                                        }}>**</Text>) : null)
                                }
                            </View>

                            <Text
                                style=
                                {{
                                    fontSize: 15,
                                    width: 70
                                }}
                            >
                                {item.tien}
                            </Text>
                            <Text
                                style=
                                {{
                                    fontSize: 15,
                                    marginHorizontal: 10
                                }}
                            >
                                {item.ghiChu}
                            </Text>
                        </TouchableOpacity>
                    ))
                }
                <View
                    style=
                    {{
                        width: "100%",
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style={{
                            fontSize=10,
                            textAlign: 'center'
                        }}
                    >
                        (*) Chính sách kháhc hàng được phép tùy chọn
                        (**) Chiết khấu/ khuyến mãi (đăc biệt)
                    </Text>
                </View>
            </ScrollView>
        </View>
    )
}
export default ThongTinCK;