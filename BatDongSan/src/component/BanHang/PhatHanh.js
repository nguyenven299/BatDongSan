import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import ChinhSachThanhToan from './MoRong/ChinhSachThanhToan'
import ThongTinDotPhatHanh from './MoRong/ThongTinDotPhatHanh'
import ChinhSachChietKhau from './MoRong/ChinhSachChietKhau'
import ChinhSachHoaHong from './MoRong/ChinhSachHoaHong'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';
const PhatHanh = ({ navigation }) => {
    const [Model, setModel] = useState("Testing-DB-DCho-2209")
    const [modalVisible, setModalVisible] = useState(false);
    const [Activity, setActivity] = useState()
    const [typeActivity, setTypeActivity] = useState(1)
    return (
        <View
            style={{
                flex: 1
            }}
        >
            <View
                style=
                {{
                    flex: 1,
                    flexDirection: 'row',
                    height: '8%',
                    backgroundColor: 'white'
                }}
            >

                <View
                    style=
                    {{
                        flex: 1,
                        flexDirection: 'column',

                    }}
                >
                    <View
                        style=
                        {{
                            flexDirection: 'row',
                            flex: 1,
                            alignContent: 'center',
                            justifyContent: 'space-between',
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
                            alignItems: 'center',
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
                                    // marginHorizontal: 20
                                }}
                                onPress={
                                    () => {
                                        // setActivity("HanhDong")
                                        setTypeActivity(1)
                                    }}
                            >
                                <Text
                                    style=
                                    {{
                                        textAlign: 'center',
                                        paddingVertical: 10,
                                        fontSize: 13,
                                        color: typeActivity == 1 ? '#FFA605' : 'black'


                                    }}
                                >THÔNG TIN ĐỢT PHÁT HÀNH</Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                style=
                                {{
                                    flex: 1,
                                    borderBottomWidth: 2,
                                    borderBottomColor: typeActivity == 2 ? 'yellow' : 'white',
                                    marginHorizontal: 20
                                }}
                                onPress={
                                    () => {
                                        // setActivity("SinhNhat")
                                        setTypeActivity(2)
                                    }}
                            >
                                <Text
                                    style=
                                    {{
                                        textAlign: 'center',
                                        paddingVertical: 10,
                                        fontSize: 13,
                                        color: typeActivity == 2 ? '#FFA605' : 'black'
                                    }}
                                >CHÍNH SÁCH THANH TOÁN</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style=
                                {{
                                    flex: 1,
                                    borderBottomWidth: 2,
                                    borderBottomColor: typeActivity == 3 ? 'yellow' : 'white',
                                    marginHorizontal: 20
                                }}
                                onPress={
                                    () => {
                                        // setActivity("SinhNhat")
                                        setTypeActivity(3)
                                    }}
                            >
                                <Text
                                    style=
                                    {{
                                        textAlign: 'center',
                                        paddingVertical: 10,
                                        fontSize: 13,
                                        color: typeActivity == 3 ? '#FFA605' : 'black'
                                    }}
                                >CHÍNH SÁCH CHIẾT KHẤU/KHUYẾN MÃI</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style=
                                {{
                                    flex: 1,
                                    borderBottomWidth: 2,
                                    borderBottomColor: typeActivity == 4 ? 'yellow' : 'white',
                                    marginHorizontal: 20
                                }}
                                onPress={
                                    () => {
                                        // setActivity("SinhNhat")
                                        setTypeActivity(4)
                                    }}
                            >
                                <Text
                                    style=
                                    {{
                                        textAlign: 'center',
                                        paddingVertical: 10,
                                        fontSize: 13,
                                        color: typeActivity == 4 ? '#FFA605' : 'black'
                                    }}
                                >CHÍNH SÁCH hOA HỒNG - DOANH THU</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
            </View>
            <View
                style=
                {{
                    height: "92%",

                    backgroundColor: 'white'
                }}
            >
                {
                    typeActivity == 1 ? (<ThongTinDotPhatHanh />) : (
                        typeActivity == 2 ? (<ChinhSachThanhToan />) : (
                            typeActivity == 3 ? (<ChinhSachChietKhau />) : (
                                <ChinhSachHoaHong />
                            )
                        )
                    )
                }
                <TouchableOpacity
                    style=
                    {{
                        margin: 5,
                        position: 'absolute',
                        backgroundColor: 'orange',
                        bottom: 20,
                        left: 10,
                        padding: 15,
                        borderRadius: 50
                    }}

                >
                    <FontAwesome
                        name="shopping-cart" size={25} color="white"

                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style=
                    {{
                        margin: 5,
                        position: 'absolute',
                        backgroundColor: 'orange',
                        bottom: 20,
                        right: 10,
                        padding: 15,

                        borderRadius: 50
                    }}
                    onPress={
                        () => {
                            navigation.navigate("DeXuatBanSi")

                        }}
                >
                    <FontAwesome
                        name="plus" size={25} color="white"
                        style=
                        {{
                            marginHorizontal: 3
                        }}
                    />
                </TouchableOpacity>
            </View>


        </View>
    )
}
const style = StyleSheet.create({
    Touch:
    {
        margin: 10
    },
    backgoundModal:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    textStyle:
    {
        color: "black",
        fontSize: 20,
        marginLeft: 15,
        marginTop: 20
    },
    textStyleClose:
    {
        color: "black",
        fontSize: 20,
        textAlign: "center"
    },
    buttonClose:
    {
        backgroundColor: "#F0EEF0",
        width: 350,
        padding: 10,
        marginTop: 20,
        elevation: 2,

    },
})
export default PhatHanh;