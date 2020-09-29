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
                <ButtonComponent textName="Chính sách giá" />
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
                        Giá gốc
                    </Text>
                </View>
                <InputTextComponent textName="Giá trị đất" />
                <InputTextComponent textName="Giá tài sản (có VAT)" />
                <InputTextComponent textName="Giá sản phẩm (có VAT)" />
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
                        Chiết khấu/ Khuyến mãi
                    </Text>
                </View>
                <InputTextComponent textName="Tổng giá trị CK/CM" />
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
                        Giá sau Chiết khấu/ Khuyến mãi
                    </Text>
                </View>
                <InputTextComponent textName="Giá trị đất" />
                <InputTextComponent textName="Giá tài sản (có VAT)" />
                <InputTextComponent textName="Giá sản phẩm (có VAT)" />
                <InputTextComponent textName="Phí dịch vụ" />
                <InputTextComponent textName="Phí bảo trì (số tiền)" />
                <InputTextComponent textName="Tổng cộng" />

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