import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import TextInputComponent from '../../../common/InputTextComponent'
import ButtonConponent from '../../../common/ButtonComponent'
import {
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

const TaoPhieuTiepKhach = ({ navigation }) => {
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
        title: "Phiếu khách hàng",
    });
    return (
        <View>
            <ScrollView>
                <TextInputComponent textName="Tiêu đề" />
                <ButtonConponent textName="Khách hàng" />
                <TextInputComponent textName="Địa điểm" />
                <ButtonConponent textName="Ngày bắt đầu dự kiến" />
                <ButtonConponent textName="Ngày kết thúc dự kiến" />
                <ButtonConponent textName="Khoản thời gian dự kiến" />
                <ButtonConponent textName="Ngày bắt đầu thực tế" />
                <ButtonConponent textName="Khoảng thời gian thực tế" />
                <ButtonConponent textName="Đánh giá mức độ tiềm năng" />
                <ButtonConponent textName="Mức thu nhập" />
                <ButtonConponent textName="Loại hình sản phẩm" />
                <ButtonConponent textName="Mục đích mua" />
                <ButtonConponent textName="Khoảng giá" />
                <ButtonConponent textName="Hướng" />
                <ButtonConponent textName="Tổng diện tích" />
                <TextInputComponent textName="Quan tâm khác" />
                <TextInputComponent textName="Ý kiến đóng góp" />
            </ScrollView>
        </View>
    )
}

export default TaoPhieuTiepKhach;