import React, { useState } from 'react';
import ButtonComponent from '../../../../../common/ButtonComponent'
import TextInputComponent from '../../../../../common/HoatDong/TextInputComponent'
import InputTextCurrentcy from '../../../../../common/HoatDong/InputTextCurrentcy'


import {
    View,
    ScrollView,
    Text,
    StyleSheet
} from 'react-native';
const ThongTinGia = ({ navigation }) => {
    const [donGiaChuaVAT, setDonGiaChuaVAT] = useState("")
    const [donGiaVAT, setDonGiaVAT] = useState("")
    const [giaSanPhamChuaVAT, setGiaSanPhamChuaVAT] = useState("")
    const [giaSanPhamVAT, setGiaSanPhamVAT] = useState("")
    const [phiDichVu, setPhiDichVu] = useState("")
    const [phiBaoTri, setPhiBaoTri] = useState("")
    const [giaSanPhamChuaVAT1, setGiaSanPhamChuaVAT1] = useState("")
    const [giaSanPhamVAT1, setGiaSanPhamVAT1] = useState("")
    const [phiDichVu1, setPhiDichVu1] = useState("")
    const [phiBaoTriSoTien, setPhiBaoTriSoTien] = useState("")
    const [phiBaoTri1, setPhiBaoTri1] = useState("")
    const [donGiaSauTrietKhauChuaVAT, setDonGiaSauTrietKhauChuaVAT] = useState("")
    const [donGiaSauTrietKhauVAT, setDonGiaSauTrietKhauVAT] = useState("")
    const [phanTramGiaTriHD, setPhanTramGiaTriHD] = useState("")
    const [giaTriHopDong, setGiaTriHopDong] = useState("")
    const [giaTriHopDongBangChu, setGiaTriHopDongBangChu] = useState("")
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

                {title("Giá Sản Phẩm - Giá Gốc")}
                <InputTextCurrentcy
                    textName="Đơn giá (chưa VAT)"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setDonGiaChuaVAT}
                    value={donGiaChuaVAT}
                />
                <InputTextCurrentcy
                    textName="Đơn giá (VAT)"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setDonGiaVAT}
                    value={donGiaVAT}
                />
                <InputTextCurrentcy
                    textName="Giá sản phẩm (chưa VAT)"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setGiaSanPhamChuaVAT}
                    value={giaSanPhamChuaVAT}
                />
                <InputTextCurrentcy
                    textName="Giá sản phầm (VAT)"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setDonGiaChuaVAT}
                    value={giaSanPhamVAT}
                />
                <InputTextCurrentcy
                    textName="Phí dịch vụ"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setPhiDichVu}
                    value={phiDichVu}
                />
                <InputTextCurrentcy
                    textName="Phí bảo trì"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setPhiBaoTri}
                    value={phiBaoTri}
                />
                {title("Giá Sản Phẩm - Áp Dụng Chính Sách")}
                <InputTextCurrentcy
                    textName="Giá sản phẩm (chưa VAT)"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setGiaSanPhamChuaVAT1}
                    value={giaSanPhamChuaVAT1}
                />
                <InputTextCurrentcy
                    textName="Giá sản phẩm (VAT)"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setGiaSanPhamVAT1}
                    value={giaSanPhamVAT1}
                />
                <InputTextCurrentcy
                    textName="Phí dịch vụ"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setPhiDichVu1}
                    value={phiDichVu1}
                />
                <InputTextCurrentcy
                    textName="Phí bảo trì (Số tiền)"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setPhiBaoTriSoTien}
                    value={phiBaoTriSoTien}
                />
                <InputTextCurrentcy
                    textName="Phí bảo trì(%)"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setPhiBaoTri1}
                    value={setPhiBaoTri1}
                />
                <InputTextCurrentcy
                    textName="Đơn giá sau chiết khấu(chưa VAT)"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setDonGiaSauTrietKhauChuaVAT}
                    value={donGiaSauTrietKhauChuaVAT}
                />
                <InputTextCurrentcy
                    textName="Đơn giá sau chiết khấu (VAT)"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setDonGiaSauTrietKhauVAT}
                    value={donGiaSauTrietKhauVAT}
                />
                {title("Giá trị hợp đồng")}
                <InputTextCurrentcy
                    textName="Phần trăm giá trị HĐ"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setPhanTramGiaTriHD}
                    value={phanTramGiaTriHD}
                />
                <InputTextCurrentcy
                    textName="Giá trị hợp đồng"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setGiaTriHopDong}
                    value={giaTriHopDong}
                />
                <InputTextCurrentcy
                    textName="Giá trị hợp đồng (Bằng chữ)"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setGiaTriHopDongBangChu}
                    value={giaTriHopDongBangChu}
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