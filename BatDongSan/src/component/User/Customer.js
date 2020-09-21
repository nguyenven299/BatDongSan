import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import ButtonComponent from '../../common/ButtonComponent'
import TextInputComponent from '../../common/InputTextComponent'
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

const Customer = ({ navigation }) => {
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
        title: "Khách hàng tiềm năng",
    });
    return (
        <View>
            <ScrollView>
                <ButtonComponent textName="Loại khách hàng" />
                <ButtonComponent textName="Phân loại khách hàng" />
                <TextInputComponent textName="Khách hàng nước ngoài" />
                <TextInputComponent textName="Khách hàng nước ngoài" />
                <TextInputComponent textName="Tên (VD: Nam)" />
                <ButtonComponent textName="Phân loại khách hàng" />
                <TextInputComponent textName="Số điện thoại (Chính)" />
                <TextInputComponent textName="Biệt danh" />
                <ButtonComponent textName="Ngày sinh" />
                <ButtonComponent textName="Dân tộc" />
                <TextInputComponent textName="Số điện thoại thứ 2" />
                <TextInputComponent textName="Số điện thoại thứ 3" />
                <TextInputComponent textName="Email" />
                <ButtonComponent textName="Mức thu nhập" />
                <TextInputComponent textName="Số CMND" />
                <ButtonComponent textName="Nơi cấp CMND" />
                <ButtonComponent textName="Ngày cấp CMND" />
                <TextInputComponent textName="Số CCCD" />
                <ButtonComponent textName="Nơi cấp CCCD" />
                <ButtonComponent textName="Ngày cấp CCCD" />
                <TextInputComponent textName="Số Passport" />
                <ButtonComponent textName="Nơi cấp Passport" />
                <ButtonComponent textName="Quốc gia thường trú" />
                <ButtonComponent textName="Tỉnh/Thành phố thường trú" />
                <ButtonComponent textName="Quận thường trú" />
                <ButtonComponent textName="Địa chỉ thường trú" />
                <ButtonComponent textName="Quốc gia liên hệ" />
                <ButtonComponent textName="Tỉnh/Thành phố liên hệ" />
                <ButtonComponent textName="Quận liên hệ" />
                <ButtonComponent textName="Phường/Xã liên hệ" />
                <ButtonComponent textName="Số nhà, tên đường liên hệ" />
                <ButtonComponent textName="Địa chỉ liên hệ" />
                <ButtonComponent textName="Ghi chú" />




            </ScrollView>



            <ButtonComponent textName="Giới tính" />
        </View>
    )
}
export default Customer;