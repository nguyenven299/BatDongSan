import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import TextInputComponent from '../../../common/InputTextComponent'
import ButtonConponent from '../../../common/ButtonComponent'
import {
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
const Infomation = ({ navigation }) => {
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
        title: "Phiếu đặt cọc (72h)",
    });

    return (
        <View>
            <ScrollView>
                <TextInputComponent textName="Mã phiếu" />
                <ButtonConponent textName="Dự án" />
                <ButtonConponent textName="Sản phẩm" />
                <ButtonConponent textName="Nhân viên kinh doanh" />
                <ButtonConponent textName="Khách hàng" />
                <ButtonConponent textName="Yêu cầu mô giới" />
                <ButtonConponent textName="Chinh sách môi giới" />
                <ButtonConponent textName="Chi tiết chính sách mô giới" />
                <ButtonConponent textName="Giá trị hợp đồng gốc" />
                <ButtonConponent textName="Yêu cầu mô giới" />

            </ScrollView>

        </View>
    )
}
export default Infomation;