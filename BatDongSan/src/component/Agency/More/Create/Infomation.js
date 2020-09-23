import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import TextInputComponent from '../../../../common/InputTextComponent'
import ButtonConponent from '../../../../common/ButtonComponent'
import ButtonRefesh from '../../../../common/ButtonRefesh'

import {
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
const Infomation = ({ navigation }) => {
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
                <ButtonConponent textName="Chính sách mô giới" />
                <ButtonConponent textName="Chi tiết chính sách mô giới" />
                <ButtonConponent textName="Gía trị hợp đồng gốc" />
                <ButtonConponent textName="Số tiền đã thanh toán" />
                <ButtonConponent textName="Giá trị hợp dịch vụ" />
                <ButtonConponent textName="Giá trị chuyển nhượng" />
                <ButtonConponent textName="Chi phí công ty" />
                <ButtonConponent textName="Tổng cộng" />
                <ButtonConponent textName="Số tiền cọc" />
                <ButtonConponent textName="Số tiền cọc đã thanh toán" />
                <ButtonConponent textName="Ngày tạo phiếu cọc" />
                <ButtonConponent textName="Ngày kết thúc" />
                <ButtonConponent textName="Chính sách thanh toán" />
                <ButtonConponent textName="Hợp đồng nguyên tắc" />
                <ButtonConponent textName="Hợp đồng vay" />
                <ButtonConponent textName="Hợp đồng mua bán" />
                <ButtonConponent textName="Hợp đồng dịch vụ" />
                <ButtonConponent textName="Trạng thái" />
                <ButtonRefesh textName="Tiến độ thanh toán (giả định)" />
            </ScrollView>

        </View>
    )
}
export default Infomation;