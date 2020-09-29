import React, { useState } from 'react';
import ButtonComponent from '../../../../../common/ButtonComponent'
import InputTextComponent from '../../../../../common/InputTextComponent'
import MultiLineTextInputComponent from '../../../../../common/MultiLineTextInputComponent'
import ButtonRefesh from '../../../../../common/ButtonRefesh'


import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';
const ThongTinGia = ({ navigation }) => {

    return (
        <View>
            <ScrollView>

                <View
                    style=
                    {style.ViewStyle}
                >
                    <Text
                        style=
                        {{
                            fontSize: 20,
                            color: 'white'
                        }}
                    >
                        Giá Sản Phẩm - Giá Gốc
                    </Text>
                </View>
                <InputTextComponent textName="Đơn giá (chưa VAT)" />
                <InputTextComponent textName="Đơn giá (VAT)" />
                <InputTextComponent textName="Giá sản phẩm (chưa VAT)" />
                <InputTextComponent textName="Giá sản phầm (VAT)" />
                <InputTextComponent textName="Phí dịch vụ" />
                <InputTextComponent textName="Phí bảo trì" />
                <View
                    style=
                    {style.ViewStyle}
                >
                    <Text
                        style=
                        {{
                            fontSize: 20,
                            color: 'white'
                        }}
                    >
                        Giá Sản Phẩm - Áp Dụng Chính Sách
                    </Text>
                </View>
                <InputTextComponent textName="Giá sản phẩm (chưa VAT)" />
                <InputTextComponent textName="Giá sản phẩm (VAT)" />
                <InputTextComponent textName="Phí dịch vụ" />
                <InputTextComponent textName="Phí bảo trì (Số tiền)" />
                <InputTextComponent textName="Phí bảo trì(%)" />
                <InputTextComponent textName="Đơn giá sau chiết khấu(chưa VAT)" />
                <InputTextComponent textName="Đơn giá sau chiết khấu (VAT)" />

                <View
                    style=
                    {style.ViewStyle}
                >
                    <Text
                        style=
                        {{
                            fontSize: 20,
                            color: 'white'
                        }}
                    >
                        Giá trị hợp đồng
                    </Text>
                </View>
                <InputTextComponent textName="Phần trăm giá trị HĐ" />
                <InputTextComponent textName="Giá trị hợp đồng" />
                <InputTextComponent textName="Giá trị hợp đồng (Bằng chữ)" />
            </ScrollView>
        </View>
    )
}
const style = StyleSheet.create({
    ViewStyle:
    {
        backgroundColor: 'orange',
        height: 50,
        width: '90%',
        alignContent: 'center',
        justifyContent: 'center',
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginTop: 20
    }
})
export default ThongTinGia;