import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import ReceiverList from '../HoatDong/Modal/ReceiverList'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StyleSheet, Modal
} from 'react-native';
const KhachHang = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [user, setKhachHang] = useState("Khách hàng tiềm năng")
    var Customer = [
        {
            Ten: "Khách hàng tiềm năng",
            chucNang: () => {
                setKhachHang("Khách hàng tiềm năng")
                setModalVisible(!modalVisible)
            }
        },
        {
            Ten: "Khách hàng phát sinh",
            chucNang: () => {
                setKhachHang("Khách hàng phát sinh")
                setModalVisible(!modalVisible)

            }
        },
        {
            Ten: "Khách hàng giao dịch",
            chucNang: () => {
                setKhachHang("Khách hàng giao dịch")
                setModalVisible(!modalVisible)

            }
        },
        {
            Ten: "Khách hàng đồng sở hữu",
            chucNang: () => {
                setKhachHang("Khách hàng đồng sở hữu")
                setModalVisible(!modalVisible)

            }
        }
    ]
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                onPress=
                {
                    () => {
                        navigation.navigate("KhachHang")
                    }
                }
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
        headerTitle: () =>
            (
                <TouchableOpacity
                    style=
                    {{
                        width: 300,
                        height: 70,
                        flexDirection: 'row'
                    }}
                    onPress={
                        () => {
                            setModalVisible(true);
                        }}
                >
                    <FontAwesome name="caret-down" size={20} color="#9B999B"
                        style=
                        {{
                            marginLeft: 20,
                            marginTop: 20,
                            color: 'white'
                        }}
                    />
                    <Text
                        style=
                        {{
                            fontSize: 20,
                            margin: 20,
                            color: 'white'
                        }}
                    >
                        {user}
                    </Text>
                </TouchableOpacity>
            )
    });
    return (
        <View>
            <View
                style=
                {{
                    width: "80%",

                    height: 50,
                    backgroundColor: '#C5C3C5',
                    marginLeft: 10,
                    marginTop: 5,
                    flexDirection: 'row'
                }}
            >
                <FontAwesome
                    name="search" size={15}
                    style=
                    {{
                        position: 'absolute',
                        left: 10,
                        bottom: 15
                    }}
                />
                <TextInput
                    style=
                    {{
                        width: "80%",
                        marginLeft: 5,
                        marginTop: 5,
                        fontSize: 20,
                        paddingLeft: 40
                    }}
                    placeholder="Tìm kiếm"
                >

                </TextInput>

            </View>
            <TouchableOpacity
                style=
                {{
                    position: 'absolute',
                    right: 20,
                    top: 10
                }}
                onPress={
                    () => {
                        navigation.navigate("Loc")
                    }
                }
            >
                <FontAwesome
                    name="filter" size={40} color="#FFA605"

                />
            </TouchableOpacity>
            <ReceiverList />
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}

            >
                <View style={style.backgoundModal}>
                    <View style=
                        {{
                            margin: 20,
                            backgroundColor: "white",
                            width: 350,
                            height: 250,
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
                        {

                            Customer.map((item, index) => (
                                <TouchableOpacity
                                    style={{}}
                                    onPress={() => {
                                        item.chucNang()
                                    }}
                                    key={index}
                                >
                                    <Text style={style.textStyle}>
                                        {item.Ten}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }
                        <TouchableOpacity
                            style={style.buttonClose}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={style.textStyleClose}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View >
    )
}

const style = StyleSheet.create({

    textStyle:
    {
        color: "black",
        fontSize: 20,
        marginLeft: 15,
        marginTop: 20
    },

    backgoundModal:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    buttonClose:
    {
        backgroundColor: "#F0EEF0",
        width: 350,
        padding: 10,
        marginTop: 20,
        elevation: 2,

    },
    textStyleClose:
    {
        color: "black",
        fontSize: 20,
        textAlign: "center"
    },

})
export default KhachHang;