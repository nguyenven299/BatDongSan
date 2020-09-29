import React, { useState } from 'react';
import ButtonComponent from '../../../../../common/ButtonComponent'
import InputTextComponent from '../../../../../common/InputTextComponent'
import MultiLineTextInputComponent from '../../../../../common/MultiLineTextInputComponent'
import ButtonRefesh from '../../../../../common/ButtonRefesh'


import {
    View,
    ScrollView
} from 'react-native';
const ThongTinThanhToan = ({ navigation }) => {

    return (
        <View>
            <ScrollView>
                <InputTextComponent textName="Hình thức thanh toán" />
                <InputTextComponent textName="Tách Tiến độ thanh toán" />
                <ButtonComponent textName="Hình thức mua sản phẩm" />
                <ButtonComponent textName="Chính sách thanh toán sản phẩm" />
                <ButtonComponent textName="Só ngày cho phép trễ hạn(ngày)" />
                <ButtonComponent textName="Số tiền đặt cọc" />
                <ButtonComponent textName="Số tiền đã thanh toán" />
                <ButtonComponent textName="Số tiền còn lại" />
                <ButtonComponent textName="Số tiền thu tại Event" />
                <ButtonComponent textName="Ngày hoàn tất thu cọc" />
                <ButtonComponent textName="Tiền đặt cọc đóng truóc" />
                <ButtonComponent textName="Tiền đặt cọc bổ sung" />
                <ButtonComponent textName="Vay ngân hàng" />
                <MultiLineTextInputComponent textName="Thông tin gói vay" />
                <ButtonComponent textName="Tình trạng thu chi" />
                <ButtonRefesh textName="Tiến Độ Thanh Toán - Sản Phẩm" />
                <ButtonRefesh textName="Tiến Độ Thanh Toán - Tài Sản" />
            </ScrollView>
        </View>
    )
}
export default ThongTinThanhToan;