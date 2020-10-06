import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet, Modal,
    ScrollView
} from 'react-native';
const ModalCuocGoiComponent = ({ setModalVisible, visible, setValue, value, dataOption }) => {
    const IconCheck = () => {
        return (
            <FontAwesome
                name='check' color='#C5C3C5' size={20}

            />
        )
    }
    var obj = {}
    var obj1 = {}
    var objThoiGianCuocGoi = {}
    var objDanhGiaMucDoTiemNang = {}
    var objMucThuNhap = {}
    var objLoaiHinhSanPham = {}
    var objMucDichMua = {}
    var objKhoangGia = {}
    var objHuong = {}
    var objTongDienTich = {}

    {/*for (let i = 1; i <= ThoiGianCuocGoi.length; i++) {
        objThoiGianCuocGoi["id"] = i,
            objThoiGianCuocGoi['thongTin'] = ThoiGianCuocGoi
    }
    for (let i = 1; i <= DanhGiaMucDoTiemNang.length; i++) {
        objDanhGiaMucDoTiemNang["id"] = i,
            objDanhGiaMucDoTiemNang['thongTin'] = DanhGiaMucDoTiemNang
    }
    for (let i = 1; i <= MucThuNhap.length; i++) {
        objMucThuNhap["id"] = i,
            objMucThuNhap['thongTin'] = MucThuNhap
    }
    for (let i = 1; i <= LoaiHinhSanPham.length; i++) {
        objLoaiHinhSanPham["id"] = i,
            objLoaiHinhSanPham['thongTin'] = LoaiHinhSanPham
    }
    for (let i = 1; i <= MucDichMua.length; i++) {
        objMucDichMua["id"] = i,
            objMucDichMua['thongTin'] = MucDichMua
    }
    for (let i = 1; i <= KhoangGia.length; i++) {
        objKhoangGia["id"] = i,
            objKhoangGia['thongTin'] = KhoangGia
    }
    for (let i = 1; i <= Huong.length; i++) {
        objHuong["id"] = i,
            objHuong['thongTin'] = Huong
    }
    for (let i = 1; i <= TongDienTich.length; i++) {
        objTongDienTich["id"] = i,
            objTongDienTich['thongTin'] = TongDienTich
    }*/}



    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={style.backgoundModal}>
                    <View style=
                        {{
                            margin: 20,
                            backgroundColor: "white",
                            width: 300,
                            height: 350,
                            alignItems: "center",
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
                            style={{ height: 300, width: 300 }}
                        >
                            <ScrollView>
                                {
                                    dataOption.map((item, index) => (
                                        <TouchableOpacity
                                            style={style.buttonStyle}
                                            onPress={() => {
                                                setValue(item)
                                            }}
                                        ><IconCheck />
                                            <Text
                                                style=
                                                {{
                                                    fontWeight: 'bold',
                                                    marginLeft: 10,
                                                    alignContent: 'center'
                                                }}
                                            >
                                                {item}
                                            </Text>


                                        </TouchableOpacity>
                                    ))
                                }
                            </ScrollView>
                        </View>
                        <TouchableOpacity
                            style={style.buttonClose}
                            onPress={() => {
                                setModalVisible(!visible);
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
    textStyle:
    {
        color: "black",
        fontSize: 17,
        marginLeft: 15,
        marginTop: 15
    },
    textStyle1:
    {
        color: "black",
        fontSize: 15,
        fontFamily: 'bold',
        marginLeft: 15,
        fontWeight: 'bold',

    },
    modelViewStyle:
    {
        margin: 20,
        backgroundColor: "white",
        width: 350,
        height: 350,
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
        width: 300,
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
    buttonStyle:
    {
        backgroundColor: "#FBFAFB",
        width: 300,
        padding: 10,
        marginTop: 10,
        borderRadius: 2,
        flexDirection: 'row',
        marginHorizontal: 20
    },
})
export default ModalCuocGoiComponent