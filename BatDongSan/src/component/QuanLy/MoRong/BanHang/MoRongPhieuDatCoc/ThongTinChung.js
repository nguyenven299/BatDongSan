import React, { useState } from 'react';
import ButtonComponent from '../../../../../common/ButtonComponent'
import InputTextComponent from '../../../../../common/InputTextComponent'
import MultiLineTextInputComponent from '../../../../../common/MultiLineTextInputComponent'
import ButtonRefesh from '../../../../../common/ButtonRefesh'
import FontAwesome from "react-native-vector-icons/FontAwesome5"


import {
    View,
    ScrollView,
    Text
} from 'react-native';
const ThongTinChung = ({ navigation }) => {

    return (
        <View>
            <ScrollView>
                <InputTextComponent textName="Mã" />
                <InputTextComponent textName="Tiêu đề" />
                <ButtonComponent textName="Khách hàng" />
                <ButtonComponent textName="Dự án" />
                <ButtonComponent textName="Đợt phát hàng" />
                <ButtonComponent textName="Sản phẩm" />
                <ButtonComponent textName="Chủ đầu tư" />
                <ButtonComponent textName="Loại phát hàng" />
                <ButtonComponent textName="Bắt đầu đặt cọc" />
                <ButtonComponent textName="Kết thúc đặt cọc" />
                <ButtonComponent textName="Ngày đóng tiền cọc bổ sung" />
                <ButtonComponent textName="Gia hạn đến ngày" />
                <ButtonComponent textName="Trạng thái" />
                <ButtonComponent textName="Tình trạng duyệt" />
                <ButtonComponent textName="Tình trạng gia hạn" />
                <ButtonRefesh textName="Khách hàng đồng sở hữu" />
                <View
                    style=
                    {{
                        backgroundColor: 'orange',
                        height: 50,
                        width: '90%',
                        alignContent: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 20,
                        paddingHorizontal: 10,
                        marginBottom: 20,
                        borderRadius: 5
                    }}
                >
                    <Text
                        style=
                        {{
                            fontSize: 20,
                            color: 'white'
                        }}
                    >
                        Hình ảnh khách hàng
                    </Text>
                    <FontAwesome
                        name="plus" size={20} color="white"
                        style=
                        {{
                            position: 'absolute',
                            right: '5%'
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
export default ThongTinChung;