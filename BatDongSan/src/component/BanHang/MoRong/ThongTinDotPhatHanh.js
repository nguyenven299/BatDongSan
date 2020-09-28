import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import TextBanHangComponent from '../../../common/TextBanHangComponent'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';
const ThongTinDotPhatHanh = ({ navigation }) => {
    return (
        <View
            style=
            {{
                alignContent: 'center',
                // alignItems: 'center'
                // paddingHorizontal: 10
                paddingLeft: "5%"
            }}
        >
            <ScrollView>
                <View
                    style=
                    {style.viewStyle1}
                >
                    <Text
                        style=
                        {style.textStyle1}
                    >
                        Thông tin chung
                </Text>
                </View>
                <TextBanHangComponent TextTitle="Mã đợt phát hành: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Tên đợt phát hành: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Dự án: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Loại phát hành: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Ngày phát hành dự kiến: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Thời gian ra hợp đồng (ngày): " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Phân chia rổ hàng: " TextDetails="PH3DB" />
                <View
                    style=
                    {style.viewStyle1}
                >
                    <Text
                        style=
                        {style.textStyle1}
                    >
                        Thông tin khác
                </Text>
                </View>
                <TextBanHangComponent TextTitle="Ngày phát hành: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Ngày thu hồi: " TextDetails="PH3DB" />
                <View
                    style=
                    {style.viewStyle1}
                >
                    <Text
                        style=
                        {style.textStyle1}
                    >
                        Thông tin lãi suất
                </Text>
                </View>
                <TextBanHangComponent TextTitle="Số ngày tính lãi trong năm: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Lãi chậm bàn giao(%/năm): " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Lãi thanh toán sớm(%/năm): " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Lãi phạt chậm thanh toán(%/năm): " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Lãi chậm bàn giao(%/ngày): " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Lãi thanh toán sớm(%/ngày): " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Lãi phạt chậm thanh toán(%/ngày): " TextDetails="PH3DB" />
                <View
                    style=
                    {style.viewStyle1}
                >
                    <Text
                        style=
                        {style.textStyle1}
                    >
                        Luật booking
                </Text>
                </View>
                <TextBanHangComponent TextTitle="Thời hạn mỗi lượt booking(phút): " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Thời gian chênh lẹch tạo giữ chỗ(phút): " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Số người dùng booking tối đa/ sản phẩm/ thời điểm: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Tổng số lượt booking/ người dùng/ ngày: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Tổng số lượt booking/sàn/sản phầm/ngày: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Tổng số lượt booking/người dùng/sản phẩm/ngày: " TextDetails="PH3DB" />
                <View
                    style=
                    {style.viewStyle1}
                >
                    <Text
                        style=
                        {style.textStyle1}
                    >
                        Thông tin đặt chỗ
                </Text>
                </View>
                <TextBanHangComponent TextTitle="Ssô tiền đặt chỗ: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Thời hạn đóng tiền đặt chỗ: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Số tiền đặt chõ tối thiểu: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Cho phép gia hạn thanh toán đặt chỗ: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Thời điểm kết thúc ưu tiên: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Số người dùng giữ chỗ tốit đa/ sản phẩm: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Thời gian chuyển cọc mỗi ưu tiên(phút): " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Chuyển cọc khi chưa đóng đủ tiền đạt chỗ: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Đã cho phép chuyển cọc: " TextDetails="PH3DB" />
                <View
                    style=
                    {style.viewStyle1}
                >
                    <Text
                        style=
                        {style.textStyle1}
                    >
                        Tài liêu kinh doanh
                </Text>
                </View>
                <View
                    style=
                    {style.viewStyle1}
                >
                    <Text
                        style=
                        {style.textStyle1}
                    >
                        Book chéo sản phẩm
                </Text>
                </View>
                <TextBanHangComponent TextTitle="Cho phép book chéo giữa các sàn: " TextDetails="PH3DB" />
                <TextBanHangComponent TextTitle="Thời điểm kết thúc bán hàng độc quyền: " TextDetails="PH3DB" />

            </ScrollView>
        </View>
    )
}
const style = StyleSheet.create({
    viewStyle1:
    {
        backgroundColor: 'orange',
        width: '95%',
        height: 50,
        borderRadius: 5,
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 10

    },
    textStyle1:
    {
        color: 'white',
        fontSize: 20,
        margin: 20
    }
})
export default ThongTinDotPhatHanh;