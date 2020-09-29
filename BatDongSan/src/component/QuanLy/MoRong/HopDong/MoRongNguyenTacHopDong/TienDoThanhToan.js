import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import TextInputComponent from '../../../../../common/InputTextComponent'
import ButtonComponent from '../../../../../common/ButtonComponent'
import MultiLineInputTextComponent from '../../../../../common/MultiLineTextInputComponent'
import {
    View, ScrollView
} from 'react-native';
import InputTextComponent from '../../../../../common/ButtonComponent';
import ButtonRefesh from '../../../../../common/ButtonRefesh';
const TienDoThanhToan = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
                <ButtonComponent textName="Chính sách thanh toán" />
                <ButtonComponent textName="Hình thức mua sản phẩm" />
                <InputTextComponent textName="Số ngày cho phép trễ hạn(ngày)" />
                <InputTextComponent textName="Số tiền đã thanh tóan" />
                <InputTextComponent textName="Số tiền còn lại" />
                <ButtonRefesh textName="Danh sác đợt thanh toán" />
            </ScrollView>
        </View>
    )
}
export default TienDoThanhToan;