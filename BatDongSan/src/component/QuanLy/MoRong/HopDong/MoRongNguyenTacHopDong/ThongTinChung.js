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
const ThongTinChung = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
                <TextInputComponent textName="Mã" />
                <TextInputComponent textName="Dự án" />
                <ButtonComponent textName="Đợt phát hàng" />
                <ButtonComponent textName="Sản phẩm" />
                <ButtonComponent textName="Khách hàng" />
                <ButtonComponent textName="Hình thức thanh toán" />
                <ButtonComponent textName="Đơn vị ký hợp đồng" />
                <InputTextComponent textName="NGày chuyển HĐ về trụ sở" />
                <InputTextComponent textName="Ngày trình ký hợp đồng" />
                <InputTextComponent textName="Ngày ký kết" />
                <InputTextComponent textName="Ngày bàn giap HĐ về sàn" />
                <InputTextComponent textName="Ngày bàn giao HĐ về KH" />
                <InputTextComponent textName="Ngày bàn giao HĐ về CĐT" />
                <InputTextComponent textName="Hoàn tất bản cứng" />
                <InputTextComponent textName="Vay ngân hàng" />
                <ButtonComponent textName="Người phụ trách duyệt" />
                <ButtonComponent textName="Trạng thái" />
                <ButtonComponent textName="Tình trạng duyệt" />
                <ButtonRefesh textName="Khách hàng đồng sở hữu" />
            </ScrollView>
        </View>
    )
}
export default ThongTinChung;