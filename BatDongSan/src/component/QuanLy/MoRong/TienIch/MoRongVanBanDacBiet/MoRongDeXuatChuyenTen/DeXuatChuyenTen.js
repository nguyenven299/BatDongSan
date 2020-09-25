import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import TextInputComponent from '../../../../../../common/InputTextComponent'
import ButtonConponent from '../../../../../../common/ButtonComponent'
import ButtonRefesh from '../../../../../../common/ButtonRefesh'
import {
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
const DeXuatChuyenTen = ({ navigation }) => {
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
        title: "Đề xuất chuyển tên",
    });

    return (
        <View>
            <ScrollView>
                <TextInputComponent textName="Tiêu đề" />
                <ButtonConponent textName="Loại chứng từ" />
                <TextInputComponent textName="Phí chuyển tiền" />
                <TextInputComponent textName="Lý do" />
                <TextInputComponent textName="Hoa hồng" />
                <TextInputComponent textName="Nhân viên" />
                <ButtonRefesh textName="Thông tin thay đổi" />
                <ButtonConponent textName="Khách hàng" />
                <ButtonConponent textName="Trạng thái" />
                <ButtonRefesh textName="Khách hàng đồng sở hữu" />
            </ScrollView>

        </View>
    )
}
export default DeXuatChuyenTen;