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
const ThongTinKhac = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
                <InputTextComponent textName="Chủ đầu tư" />
                <ButtonComponent textName="Phiếu đặt cọc" />
                <ButtonComponent textName="Hợp đồng vay" />
                <ButtonComponent textName="Hợp đồng góp vốn nội bộ" />
                <InputTextComponent textName="Lãi suất chậm bàn giao (%/năm)" />
                <InputTextComponent textName="Lãi suất chậm bàn giao (%/ngày)" />
                <InputTextComponent textName="Lãi suất chậm thanh toán (%/năm)" />
                <InputTextComponent textName="Lãi suất chậm thanh toán (%/ngày)" />
                <InputTextComponent textName="Lãi suất thanh toán sớm (%/ngày" />
                <InputTextComponent textName="Lãi suất thanh toán sớm (%/ngày" />
                <ButtonComponent textName="Văn bản thanh lý" />
                <ButtonComponent textName="Ngày thanh lý" />
                <ButtonComponent textName="Lý do thanh lý" />
                <ButtonComponent textName="Chính sách hoa hồng" />
                <ButtonComponent textName="Chi tiết hoa hồng" />
                <InputTextComponent textName="Doanh thu" />
                <InputTextComponent textName="Hoa hồng" />
                <ButtonRefesh textName="Chia sẻ doanh thu" />
                <ButtonRefesh textName="Chia sẻ hoa hồng" />

            </ScrollView>
        </View>
    )
}
export default ThongTinKhac;