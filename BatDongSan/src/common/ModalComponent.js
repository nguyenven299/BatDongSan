import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StyleSheet, Modal,
    ScrollView, Alert
} from 'react-native';
const ModalComponent = ({ setModalVisible1, visible, setModel, Mode }) => {
    var Customer = null;
    switch (Mode) {
        case "BanHang":
            Customer = [
                {
                    Ten: "Testing-DB-DCho-2209",
                    More: 'Tập trung',
                    chucNang: () => {
                        setModel("Testing-DB-DCho-2209")
                        setModalVisible1(!visible)
                    }
                },
                {
                    Ten: "CKLN-DA KĐT CENTURY CITY",
                    More: 'Bình thường',
                    chucNang: () => {
                        setModel("CKLN-DA KĐT CENTURY CITY")
                        setModalVisible1(!visible)

                    }
                },
                {
                    Ten: "Testing-DB-16092020",
                    More: 'Bình thường',
                    chucNang: () => {
                        setModel("Testing-DB-16092020")
                        setModalVisible1(!visible)

                    }
                },
                {
                    Ten: "1BSON",
                    More: 'Tập trung',
                    chucNang: () => {
                        setModel("1BSON")
                        setModalVisible1(!visible)

                    }
                },
                {
                    Ten: "GV2 DA KĐT CENTURY CITY",
                    More: 'Bình thường',
                    chucNang: () => {
                        setModel("GV2 DA KĐT CENTURY CITY")
                        setModalVisible1(!visible)

                    }
                },
                {
                    Ten: "BINHSON-GOPVON",
                    More: 'Bình thường',
                    chucNang: () => {
                        setModel("BINHSON-GOPVON")
                        setModalVisible1(!visible)

                    }
                },
                {
                    Ten: "DA KĐT CENTURY CITY",
                    More: 'Bình thường',
                    chucNang: () => {
                        setModel("DA KĐT CENTURY CITY")
                        setModalVisible1(!visible)

                    }
                }
            ]
            break;
        case "MoiGioiLe":
            Customer = [
                {

                    Ten: "DỰ ÁN KHU DAN CƯ KIM OANH",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        setModel("DỰ ÁN KHU DAN CƯ KIM OANH")
                        setModalVisible1(!visible)
                    }
                }
            ]
            break;

        default:

            break;
    }

    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <View style={style.backgoundModal}>
                    <View style=
                        {{
                            margin: 20,
                            backgroundColor: "white",
                            width: 350,
                            height: 400,
                            shadowColor: "#000",
                            shadowOffset:
                            {
                                width: 0,
                                height: 2
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                            borderRadius: 10
                        }}
                    >
                        <View
                            style=
                            {{
                                padding: 10,
                                height: 350,
                            }}
                        >
                            <View
                                style=
                                {{
                                    flexDirection: 'row',
                                    backgroundColor: '#DEDDDE',
                                    alignItems: 'center',

                                }}
                            >
                                <FontAwesome name="search" size={15} color="#9B999B"
                                    style=
                                    {{
                                        marginLeft: 20

                                    }}
                                />
                                <TextInput
                                    style=
                                    {{
                                        width: 300,
                                        borderRadius: 3,
                                        paddingLeft: 10,
                                        padding: 10,
                                        fontSize: 20
                                    }}
                                    placeholder="Tiềm kiếm"
                                >
                                </TextInput>
                            </View>
                            <ScrollView>
                                {
                                    Customer.map((item, index) => (
                                        <TouchableOpacity
                                            style={{
                                                borderBottomWidth: 0.5
                                            }}
                                            onPress={() => {
                                                item.chucNang()
                                            }}
                                            key={index}
                                        >
                                            <Text style={style.textStyle}>
                                                {item.Ten}
                                            </Text>
                                            <Text style={style.textMoreStyle}>
                                                {item.More}
                                            </Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </ScrollView>
                        </View>
                        <TouchableOpacity
                            style={style.buttonClose}
                            onPress={() => {
                                setModalVisible1(!visible);
                            }}
                        >
                            <Text style={style.textStyleClose}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

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
        marginTop: 20,
        textAlign: 'center'
    },
    textStyle1:
    {
        color: "black",
        fontSize: 15,
        marginLeft: 15,
        marginTop: 5,
        textAlign: 'center'
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
    textMoreStyle:
    {
        color: "#A09EA0",
        fontSize: 15,
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 5
    }
})
export default ModalComponent