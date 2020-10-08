import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import TextInputComponent from '../../../../../common/HoatDong/TextInputComponent'
import MultiLineInputTextComponent from '../../../../../common/MultiLineTextInputComponent'
import {
    View, ScrollView
} from 'react-native';
import ButtonRefesh from '../../../../../common/ButtonRefesh';
import OptionSetComponent from '../../../../../common/HoatDong/OptionSetComponent';
const ThongTinKhac = ({ navigation }) => {
    const [chuDauTu, setChuDauTu] = useState("")
    const [phieuDatCoc, setPhieuDatCoc] = useState("")
    const [hopDongVay, setHopDongVay] = useState("")
    const [hopDongGopVongNoiBo, setHopDongGopVongNoiBo] = useState("")
    const [laiSuaChamBanGiaoNam, setLaiSuaChamBanGiaoNam] = useState("")
    const [laiSuaChamBanGiaoNgay, setLaiSuaChamBanGiaoNgay] = useState("")
    const [laiSuaChamThanhToanNam, setLaiSuaChamThanhToanNam] = useState("")
    const [laiSuaChamThanhToanNgay, setLaiSuaChamThanhToanNgay] = useState("")
    const [laiSuaThanhToanSomNam, setLaiSuaThanhToanSomNam] = useState("")
    const [laiSuaThanhToanSomNgay, setLaiSuaThanhToanSomNgay] = useState("")
    const [vanBanThanhLy, setVanBanThanhLy] = useState("")
    const [ngayThanhLy, setNgayThanhLy] = useState("")
    const [lyDoThanhLy, setLyDoThanhLy] = useState("")
    const [chinhSachHoaHong, setChinhSachHoaHong] = useState("")
    const [chiTietHoaHong, setChiTietHoaHong] = useState("")
    const [doanhThu, setDoanhThu] = useState("")
    const [chiaSeDoanhThu, setChiaSeDoanhThu] = useState("")
    const [hoaHong, setHoaHong] = useState("")
    return (
        <View>
            <ScrollView>
                <OptionSetComponent
                    textName="Chủ đầu tư"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setChuDauTu}
                    value={chuDauTu}
                    caret={true}
                />
                <OptionSetComponent
                    textName="Phiếu đặt cọc"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setPhieuDatCoc}
                    value={phieuDatCoc}
                    caret={true}
                />
                <OptionSetComponent
                    textName="Hợp đồng vay"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setHopDongVay}
                    value={hopDongVay}
                    caret={true}
                />
                <OptionSetComponent
                    textName="Hợp đồng góp vốn nội bộ"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setHopDongGopVongNoiBo}
                    value={hopDongGopVongNoiBo}
                    caret={true}
                />
                <TextInputComponent
                    textName="Lãi suất chậm bàn giao (%/năm)"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setLaiSuaChamBanGiaoNam}
                    value={laiSuaChamBanGiaoNam}
                />
                <TextInputComponent
                    textName="Lãi suất chậm bàn giao (%/ngày)"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setLaiSuaChamBanGiaoNgay}
                    value={laiSuaChamBanGiaoNgay}
                />
                <TextInputComponent
                    textName="Lãi suất chậm thanh toán (%/năm)"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setLaiSuaChamThanhToanNam}
                    value={laiSuaChamThanhToanNam}
                />
                <TextInputComponent
                    textName="Lãi suất chậm thanh toán (%/ngày)"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setLaiSuaChamThanhToanNgay}
                    value={laiSuaChamThanhToanNgay}
                />
                <TextInputComponent
                    textName="Lãi suất thanh toán sớm (%/nam)"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setLaiSuaThanhToanSomNam}
                    value={laiSuaChamBanGiaoNam}
                />
                <TextInputComponent
                    textName="Lãi suất thanh toán sớm (%/ngày)"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setLaiSuaThanhToanSomNgay}
                    value={laiSuaThanhToanSomNgay}
                />
                <OptionSetComponent
                    textName="Văn bản thanh lý"

                />
                <OptionSetComponent
                    textName="Ngày thanh lý"

                />
                <OptionSetComponent
                    textName="Lý do thanh lý"

                />
                <OptionSetComponent
                    textName="Chính sách hoa hồng"

                />
                <OptionSetComponent
                    textName="Chi tiết hoa hồng"

                />
                <TextInputComponent
                    textName="Doanh thu"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setDoanhThu}
                    value={doanhThu}
                />
                <TextInputComponent
                    textName="Hoa hồng"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setHoaHong}
                    value={hoaHong}
                />
                <ButtonRefesh
                    textName="Chia sẻ doanh thu"

                />
                <ButtonRefesh
                    textName="Chia sẻ hoa hồng"

                />

            </ScrollView>
        </View>
    )
}
export default ThongTinKhac;