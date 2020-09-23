import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import TextInputComponent from '../../../../common/InputTextComponent'
import ButtonComponent from '../../../../common/ButtonComponent'
import MultiLineInputTextComponent from '../../../../common/MultiLineTextInputComponent'
import ButtonRefesh from '../../../../common/ButtonRefesh'
import {
    View, ScrollView
} from 'react-native';
const PaymentPolicy = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
                <ButtonComponent textName="Chính sách thanh toán" />
                <ButtonComponent textName="Thời hạn góp vốn(tháng)" />
                <ButtonComponent textName='Ngày bắt đầu dự kiến' />
                <ButtonComponent textName="Ngày kết thúc dự kiến" />
                <ButtonRefesh textName="Tiến độ góp vốn" />
            </ScrollView>
        </View>
    )
}
export default PaymentPolicy;