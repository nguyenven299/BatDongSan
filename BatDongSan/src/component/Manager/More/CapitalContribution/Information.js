import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import TextInputComponent from '../../../../common/InputTextComponent'
import ButtonComponent from '../../../../common/ButtonComponent'
import MultiLineInputTextComponent from '../../../../common/MultiLineTextInputComponent'
import {
    View, ScrollView
} from 'react-native';
const PaymentPolicy = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
                <TextInputComponent textName="Tiêu đề" />
                <ButtonComponent textName="Đợt phát hành" />
                <ButtonComponent textName="Chính sách góp vốn nội bộ" />
                <ButtonComponent textName="Chi tiết chính sách góp vốn nội bộ" />
                <ButtonComponent textName="Khách hàng" />
                <ButtonComponent textName="Hình thức thanh toán" />
                <ButtonComponent textName="Tài khoản ngân hàng" />
                <TextInputComponent textName="Chủ tài khoản" />
                <ButtonComponent textName="Chi nhánh ngân hàng" />
                <ButtonComponent textName="Ngân hàng" />
                <TextInputComponent textName="Giá trị góp vốn" />
                <ButtonComponent textName="Trạng thái" />
                <MultiLineInputTextComponent textName="Ghi chú" />
            </ScrollView>
        </View>
    )
}
export default PaymentPolicy;