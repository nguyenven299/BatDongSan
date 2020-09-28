import React, { useState, useEffect } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import HanhDong from './Navigation/HanhDong.js'
import SinhNhat from './Navigation/SinhNhat'
import {
    View,
    Text,
    TouchableOpacity,
    Alert,
    Modal,
} from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const HoatDong = ({ navigation }) => {
    const [Activity, setActivity] = useState()
    const [typeActivity, setTypeActivity] = useState(1)
    const [modalVisible, setModalVisible] = useState(false);

    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(true);
                }}
                style=
                {{
                    padding: 15
                }}
            >
                <FontAwesome
                    name="plus" size={20} color='white'
                    style=
                    {{
                        marginRight: 10
                    }}
                ></FontAwesome>
            </TouchableOpacity>
        ),
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
                    backgroundColor: 'white',
                    flex: 1,

                }}
            >
                <CalendarPicker
                    startFromMonday='true'
                    todayBackgroundColor='#FFA400'
                    // allowRangeSelection={true}
                    nextTitle=">"
                    previousTitle="<"

                    textStyle=
                    {{
                    }}

                >
                </CalendarPicker>
                <View
                    style=
                    {{
                        marginTop: 15
                        // flex: 1
                    }}
                >
                </View>
            </View>
            <View>

            </View>
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
                        marginTop: 10,
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
                            borderBottomColor: typeActivity == 1 ? 'yellow' : 'white'
                        }}
                        onPress={
                            () => {
                                setActivity("HanhDong")
                                setTypeActivity(1)
                            }}
                    >
                        <Text
                            style=
                            {{
                                textAlign: 'center',
                                paddingVertical: 10,
                                fontSize: 15,
                                color: typeActivity == 1 ? '#FFA605' : 'black'


                            }}
                        >Hoạt động</Text>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style=
                        {{
                            flex: 1,
                            borderBottomWidth: 2,
                            borderBottomColor: typeActivity == 2 ? 'yellow' : 'white'
                        }}
                        onPress={
                            () => {
                                setActivity("SinhNhat")
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
                        >Sinh nhật</Text>
                    </TouchableOpacity>

                </View>
                <View
                    style=
                    {{
                        flex: 6,
                    }}
                >
                    {
                        Activity == "SinhNhat" ? (
                            <SinhNhat>
                            </SinhNhat>) : (
                                <HanhDong></HanhDong>
                            )
                    }
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    }}

                >
                    <View style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: 'rgba(0,0,0,0.5)'
                    }}>
                        <View style=
                            {{
                                margin: 20,
                                backgroundColor: "white",
                                width: 350,
                                height: 150,
                                alignItems: "center",
                                shadowColor: "#000",
                                shadowOffset:
                                {
                                    width: 0,
                                    height: 2
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5
                            }}
                        >
                            <TouchableOpacity
                                style=
                                {{
                                    marginTop: 10,
                                    height: 50,
                                    width: 250,
                                    justifyContent: 'center',
                                }}
                                onPress={
                                    () => {
                                        navigation.navigate("TaoCuocGoi"),
                                            setModalVisible(!modalVisible);

                                    }}

                            >
                                <Text
                                    style=
                                    {{
                                        textAlign: 'center',
                                        fontSize: 17

                                    }}
                                >
                                    Tạo cuộc gọi
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style=
                                {{
                                    height: 50,
                                    width: 250,
                                    padding: 20,
                                    textAlign: 'center',

                                }}
                                onPress={
                                    () => {
                                        navigation.navigate("TaoPhieuTiepKhach"),
                                            setModalVisible(!modalVisible);

                                    }}
                            >
                                <Text
                                    style=
                                    {{
                                        textAlign: 'center',
                                        fontSize: 17
                                    }}
                                >
                                    Tạo phiếu khách hàng
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#F0EEF0",
                                    width: 350,
                                    padding: 10,
                                    marginTop: 20,
                                    elevation: 2,
                                }}
                                onPress={() => {
                                    setModalVisible(!modalVisible);
                                }}
                            >
                                <Text style={{
                                    color: "black",
                                    fontSize: 20,
                                    textAlign: "center"
                                }}>Đóng</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>

        </View>
    )
}

export default HoatDong;