import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet, Modal,
} from 'react-native';
const ModalManageComponent = ({ setModalVisible1, visible, setModel, Mode }) => {
    var Customer = [];
    switch (Mode) {
        case "Đề xuất khởi tạo":
            Customer = [
                {

                    Ten: "Khởi tạo",
                    chucNang: () => {
                        setModel("Khởi tạo")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Chờ duyệt",
                    chucNang: () => {
                        setModel("Chờ duyệt")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Đã duyệt",
                    chucNang: () => {
                        setModel("Đã duyệt")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Hoàn tất",
                    chucNang: () => {
                        setModel("Hoàn tất")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Hủy",
                    chucNang: () => {
                        setModel("Hủy")
                        setModalVisible1(!visible)
                    }
                }
            ]
            break;
        case "Phiếu đặt chỗ":
            Customer = [
                {

                    Ten: "Khởi tạo",
                    chucNang: () => {
                        setModel("Khởi tạo")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Đã duyệt",
                    chucNang: () => {
                        setModel("Đã duyệt")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Đã chuyển đặt cọc",
                    chucNang: () => {
                        setModel("Đã chuyển đặt cọc")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Thị trường tự do",
                    chucNang: () => {
                        setModel("Thị trường tự do")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Hủy/Đã hoàn tiền chỗ đặt",
                    chucNang: () => {
                        setModel("Hủy")
                        setModalVisible1(!visible)
                    }
                }
            ]
            break;
        case "Phiếu đặt cọc" && "Phiếu đặt cọc":
            Customer = [
                {

                    Ten: "Khởi tạo",
                    chucNang: () => {
                        setModel("Khởi tạo")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Đã duyệt",
                    chucNang: () => {
                        setModel("Đã duyệt")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Hoàn tất",
                    chucNang: () => {
                        setModel("Hoàn tất")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Hủy",
                    chucNang: () => {
                        setModel("Hủy")
                        setModalVisible1(!visible)
                    }
                },

            ]
            break;
        case "Hủy cọc":
            Customer = [
                {

                    Ten: "Khởi tạo",
                    chucNang: () => {
                        setModel("Khởi tạo")
                        setModalVisible1(!visible)
                    }
                },

                {

                    Ten: "Đang chờ duyệt",
                    chucNang: () => {
                        setModel("Đang chờ duyệt")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Đã duyệt",
                    chucNang: () => {
                        setModel("Đã duyệt")
                        setModalVisible1(!visible)
                    }
                },
            ]
            break;
        case "Đề xuất góp vốn":
            Customer = [
                {

                    Ten: "Khởi tạo",
                    chucNang: () => {
                        setModel("Khởi tạo")
                        setModalVisible1(!visible)
                    }
                },

                {

                    Ten: "Chờ duyệt",
                    chucNang: () => {
                        setModel("Chờ duyệt")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Đã duyệt",
                    chucNang: () => {
                        setModel("Đã duyệt")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Hủy",
                    chucNang: () => {
                        setModel("Hủy")
                        setModalVisible1(!visible)
                    }
                },
            ]
            break;
        case "HĐ góp vốn nội bộ":
            Customer = [
                {

                    Ten: "Khởi tạo",
                    chucNang: () => {
                        setModel("Khởi tạo")
                        setModalVisible1(!visible)
                    }
                },

                {

                    Ten: "Chờ duyệt",
                    chucNang: () => {
                        setModel("Chờ duyệt")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Đã duyệt",
                    chucNang: () => {
                        setModel("Đã duyệt")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Hủy",
                    chucNang: () => {
                        setModel("Hủy")
                        setModalVisible1(!visible)
                    }
                },
            ]
            break;
        case "Đề xuất góp vốn nội bộ":
            Customer = [
                {

                    Ten: "Khởi tạo",
                    chucNang: () => {
                        setModel("Khởi tạo")
                        setModalVisible1(!visible)
                    }
                },

                {

                    Ten: "Chờ duyệt",
                    chucNang: () => {
                        setModel("Chờ duyệt")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Đã duyệt",
                    chucNang: () => {
                        setModel("Đã duyệt")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Hủy",
                    chucNang: () => {
                        setModel("Hủy")
                        setModalVisible1(!visible)
                    }
                },
            ]
            break;
        case "HĐ nguyên tắc" && "Hợp đồng vay" && "Hợp đồng mua bán" && "Hợp đồng dịch vụ":
            Customer = [
                {

                    Ten: "Khởi tạo",
                    chucNang: () => {
                        setModel("Khởi tạo")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Đã duyệt",
                    chucNang: () => {
                        setModel("Đã duyệt")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Đã trình ký",
                    chucNang: () => {
                        setModel("Đã trình ký")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Đã ký",
                    chucNang: () => {
                        setModel("Đã ký")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Đã bàn giao về sàn",
                    chucNang: () => {
                        setModel("Đã bàn giao về sàn")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Đã bàn giao về KH",
                    chucNang: () => {
                        setModel("Đã bàn giao về KH")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Hoàn tất",
                    chucNang: () => {
                        setModel("Hoàn tất")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Thanh lý",
                    chucNang: () => {
                        setModel("Thanh lý")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Hủy",
                    chucNang: () => {
                        setModel("Hủy")
                        setModalVisible1(!visible)
                    }
                },
            ]
            break;
        case "Yêu cầu book chéo":
            Customer = [
                {

                    Ten: "Khởi tạo",
                    chucNang: () => {
                        setModel("Khởi tạo")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Đã duyệt",
                    chucNang: () => {
                        setModel("Đã duyệt")
                        setModalVisible1(!visible)
                    }
                },

            ]
            break;
        case "Đề xuất chuyển tên":
            Customer = [
                {

                    Ten: "Khởi tạo",
                    chucNang: () => {
                        setModel("Khởi tạo")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Đang duyệt",
                    chucNang: () => {
                        setModel("Đang duyệt")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Đã duyệt",
                    chucNang: () => {
                        setModel("Đã duyệt")
                        setModalVisible1(!visible)
                    }
                },
                {

                    Ten: "Hủy",
                    chucNang: () => {
                        setModel("Hủy")
                        setModalVisible1(!visible)
                    }
                },
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
                            margin: 5,
                            backgroundColor: "white",
                            width: 300,

                            shadowColor: "#000",
                            shadowOffset:
                            {
                                width: 0,
                                height: 2
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                        }}
                    >
                        <View
                            style=
                            {{
                                // padding: 10,
                                alignItems: 'center'
                            }}
                        >


                            {
                                Customer.map((item, index) => (
                                    <TouchableOpacity
                                        onPress={() => {
                                            item.chucNang()
                                        }}
                                        key={index}
                                    >
                                        <Text style={style.textStyle1}>
                                            {item.Ten}
                                        </Text>
                                        <Text style={style.textMoreStyle}>
                                            {item.More}
                                        </Text>
                                    </TouchableOpacity>
                                ))
                            }
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
        margin: 5
    },
    backgoundModal:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
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
        width: 300,
        padding: 5,

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
export default ModalManageComponent