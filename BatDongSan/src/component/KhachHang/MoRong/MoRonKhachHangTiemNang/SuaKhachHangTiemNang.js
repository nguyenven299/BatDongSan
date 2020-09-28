import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import ButtonComponent from '../../../../common/ButtonComponent'
import InputTextComponent from '../../../../common/InputTextComponent'
import MultiLineTextInputComponent from '../../../../common/MultiLineTextInputComponent'

import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Modal
} from 'react-native';

const SuaKhachHangTiemNang = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);

    navigation.setOptions({
        headerRight: () => (
            <View
                style=
                {{
                    flexDirection: 'row'
                }}
            >
                <TouchableOpacity
                    onPress=
                    {
                        () => {

                        }
                    }
                    style={{
                        padding: 5,
                        margin: 10
                    }}
                >
                    <FontAwesome
                        name="save" size={20} color='white'
                        style={{ marginRight: 5 }}
                    ></FontAwesome>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress=
                    {
                        () => {
                            setModalVisible(!modalVisible)
                        }
                    }
                    style={{
                        padding: 5,
                        margin: 10
                    }}
                >
                    <FontAwesome
                        name="ellipsis-v" size={20} color='white'
                        style={{ marginRight: 5 }}
                    ></FontAwesome>
                </TouchableOpacity>

            </View>

        ),
        headerTitle: () =>
            (

                <Text
                    style=
                    {{
                        fontSize: 20,
                        marginVertical: 20,
                        color: 'white'
                    }}
                >
                    Khách hàng tiềm năng
                </Text>
            )

    });
    return (
        <View
            style=
            {{
                justifyContent: 'center',
            }}
        >
            <ScrollView>

                <ButtonComponent textName="Loại khách hàng" />
                <ButtonComponent textName="Phân loại khách hàng" />
                <ButtonComponent textName="Khách hàng nước ngoài" />
                <InputTextComponent textName="Họ và tên đệm (VD:Nguyễn Văn)" />
                <InputTextComponent textName="Tên (VD: Nam)" />
                <ButtonComponent textName="Giới tính" />
                <InputTextComponent textName="Số điện thoại" />
                <InputTextComponent textName="Biệt danh" />
                <ButtonComponent textName="Ngày sinh" />
                <ButtonComponent textName="Dân tộc" />
                <InputTextComponent textName="Số điện thoại thứ 2" />
                <InputTextComponent textName="Số điện thoại thứ 3" />
                <InputTextComponent textName="Email" />
                <ButtonComponent textName="Mức thu nhập" />
                <InputTextComponent textName="Số CMND" />
                <InputTextComponent textName="Nơi cấp CMND" />
                <ButtonComponent textName="Ngày cấp CMND" />
                <InputTextComponent textName="Số CCCD" />
                <ButtonComponent textName="Nơi cấp CCCD" />
                <ButtonComponent textName="Ngày cấp CCCD" />
                <InputTextComponent textName="Số Passport" />
                <ButtonComponent textName="Nơi cấp Passport" />
                <ButtonComponent textName="Ngày cấp Passport" />
                <ButtonComponent textName="Quốc gia liên hệ" />
                <ButtonComponent textName="Tỉnh/Thành phố thường trú" />
                <ButtonComponent textName="Quận/ Huyện thường trú" />
                <ButtonComponent textName="Phường/Xã thường trú" />
                <InputTextComponent textName="Số nhà, tên đường thường trú" />
                <MultiLineTextInputComponent textName="Địa chỉ thường trú" />
                <ButtonComponent textName="Quốc gia liên hệ" />
                <ButtonComponent textName="Tỉnh/Thành phố liên hệ" />
                <ButtonComponent textName="Quận/ Huyện liên hệ" />
                <ButtonComponent textName="Phường/Xã liên hệ" />
                <InputTextComponent textName="Số nhà, tên đường liên hệ" />
                <MultiLineTextInputComponent textName="Địa chỉ liên hệ" />
                <MultiLineTextInputComponent textName="Ghi chú" />
                <View
                    style=
                    {{
                        width: "90%",
                        height: 50,
                        margin: "5%",
                        padding: "2%",
                        backgroundColor: 'orange',
                        flexDirection: 'row',
                        alignContent: 'center',
                        borderRadius: 5

                    }}
                >
                    <Text
                        style=
                        {{
                            color: 'white',
                            fontSize: 20,

                        }}
                    >
                        Hình ảnh đính kèm
    </Text>
                    <FontAwesome
                        name='plus' size={20} color="white"
                        style=
                        {{
                            position: 'absolute',
                            right: "5%",
                            top: '40%'
                        }}
                    />
                </View>
            </ScrollView>
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
                            height: 200,
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
                                    // navigation.navigate("TaoCuocGoi"),
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
                                Khách hàng giao dịch
                                </Text>
                        </TouchableOpacity>
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
    )
}

export default SuaKhachHangTiemNang;
