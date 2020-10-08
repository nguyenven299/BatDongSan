import React, { useState } from 'react';
import ButtonComponent from '../../../../../common/ButtonComponent'
import TextInputComponent from '../../../../../common/TextInputComponent'
import MultiLineTextInputComponent from '../../../../../common/MultiLineTextInputComponent'
import ButtonRefesh from '../../../../../common/ButtonRefesh'
import OptionSetComponent from '../../../../../common/HoatDong/OptionSetComponent'
import TextInputComponent from '../../../../../common/HoatDong/TextInputComponent'

import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';
const ThongTinGia = ({ navigation }) => {
    const [chinhSachGia, setChinhSachGia] = useState("")
    const [giaTriDat, setGiaTriDat] = useState("")
    const [giaTriTaiSan, setGiaTriTaiSan] = useState("")
    const [giaSanPham, setGiaTriSanPham] = useState("")
    const [phiDichVu, setPhiDichVu] = useState("")
    const [phiBaoTri, setPhiBaoTri] = useState("")
    const [tongGiaTri, setTongGiaTri] = useState("")
    const [giaTriDat1, setGiaTriDat1] = useState("")
    const [giaTaiSan1, setGiaTaiSan1] = useState("")
    const [giaSanPham1, setGiaSanPham] = useState("")
    const [phiDichVu1, setPhiDichVu1] = useState("")
    const [phiBaoTri1, setPhiBaoTri1] = useState("")
    const [tongCong, setTongCong] = useState("")

    const title = (title) => {
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
                {title}
            </Text>
        </View>
    }
    return (
        <View>
            <ScrollView>
                <OptionSetComponent
                    textName="Chính sách giá"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setChinhSachGia}
                    value={chinhSachGia}
                    caret={true}
                />
                {title("Giá gốc")}
                <TextInputComponent
                    textName="Giá trị đất"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setGiaTriDat}
                    value={giaTriDat}
                />
                <TextInputComponent
                    textName="Giá tài sản (có VAT)"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setGiaTriTaiSan}
                    value={giaTriTaiSan}
                />
                <TextInputComponent
                    textName="Giá sản phẩm (có VAT)"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setGiaSanPham}
                    value={giaTriTaiSan}
                />
                <TextInputComponent
                    textName="Phí dịch vụ"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setPhiDichVu}
                    value={phiDichVu}
                />
                <TextInputComponent
                    textName="Phí bảo trì"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setPhiBaoTri}
                    value={setPhiBaoTri}
                />
                {title("Chiết khấu/khuyến mãi")}
                <TextInputComponent
                    textName="Tổng giá trị CK/CM"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setTongGiaTri}
                    value={tongGiaTri}
                />
                {title("Giá sau Chiết khấu/ Khuyến mãi")}
                <TextInputComponent
                    textName="Giá trị đất"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setGiaTriDat1}
                    value={giaTriDat1}
                />
                <TextInputComponent
                    textName="Giá tài sản (có VAT)"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setGiaTaiSan1}
                    value={giaTaiSan1}
                />
                <TextInputComponent
                    textName="Giá sản phẩm (có VAT)"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setGiaSanPham}
                    value={giaSanPham}
                />
                <TextInputComponent
                    textName="Phí dịch vụ"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setPhiDichVu1}
                    value={phiDichVu1}
                />
                <TextInputComponent
                    textName="Phí bảo trì (số tiền)"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setPhiBaoTri1}
                    value={phiBaoTri1}
                />
                <TextInputComponent
                    textName="Tổng cộng"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setTongCong}
                    value={tongCong}
                />

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