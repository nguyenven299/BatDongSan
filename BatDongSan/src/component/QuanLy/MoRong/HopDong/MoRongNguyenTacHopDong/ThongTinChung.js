import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import TextInputComponent from '../../../../../common/HoatDong/TextInputComponent'

import OptionSetComponent from '../../../../../common/HoatDong/OptionSetComponent'
import DateComponemt from '../../../../../common/HoatDong/DateComponemt'
import BoolenComponent from '../../../../../common/HoatDong/BoolenComponent'
import {
    View, ScrollView
} from 'react-native';
import InputTextComponent from '../../../../../common/OptionSetComponent';
import ButtonRefesh from '../../../../../common/ButtonRefesh';
const ThongTinChung = ({ navigation }) => {
    const [ma, setMa] = useState("")
    const [duAn, setDuAn] = useState("")
    const [dotPhatHanh, setDotPhatHanh] = useState("")
    const [sanPham, setSanPham] = useState("")
    const [khachHang, setKhachHang] = useState("")
    const [hinhThucThanhToan, setHinhThucThanhToan] = useState("")
    const [donViKyHopDong, setDonViKyHopDong] = useState("")
    const [ngayChuyenHDVeTruSo, setNgayChuyenHDVeTruSo] = useState("")
    const [ngayTrinhKyHopDong, setNgayTrinhKyHopDong] = useState("")
    const [ngayKyKet, setNgayKyKet] = useState("")
    const [ngayBanGiaoHDVeSan, setNgayBanGiaoHDVeSan] = useState("")
    const [ngayBanGiaoHDVeKH, setNgayBanGiaoHDVeKH] = useState("")
    const [ngayBanGiaoHDVeCDT, setNgayBanGiaoHDVeCDT] = useState("")
    const [hoanTatBanCung, setHoanTatBanCung] = useState(false)
    const [vayNganHang, setVayNganHang] = useState(false)
    const [nguoiPhuTrachDuyet, setNguoiPhuTrachDuyet] = useState("")
    const [trangThai, setTrangThai] = useState("")
    const [tinhTrangDuyet, setTinhTrangDuyet] = useState("")
    return (
        <View>
            <ScrollView>
                <TextInputComponent
                    textName="Mã"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setMa}
                    value={ma}
                />
                <TextInputComponent
                    textName="Dự án"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setDuAn}
                    value={duAn}
                />
                <OptionSetComponent
                    textName="Đợt phát hàng"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setDotPhatHanh}
                    value={dotPhatHanh}
                    caret={true}
                />
                <OptionSetComponent
                    textName="Sản phẩm"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setSanPham}
                    value={sanPham}
                    caret={true}
                />
                <OptionSetComponent
                    textName="Khách hàng"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setKhachHang}
                    value={khachHang}
                    caret={true}
                />
                <OptionSetComponent
                    textName="Hình thức thanh toán"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setHinhThucThanhToan}
                    value={hinhThucThanhToan}
                    caret={true}
                />
                <OptionSetComponent
                    textName="Đơn vị ký hợp đồng"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setDonViKyHopDong}
                    value={donViKyHopDong}
                    caret={true}
                />
                <DateComponemt
                    textName="Ngày chuyển HĐ về trụ sở"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setNgayChuyenHDVeTruSo}
                    value={ngayChuyenHDVeTruSo}
                />
                <DateComponemt
                    textName="Ngày trình ký hợp đồng"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setNgayTrinhKyHopDong}
                    value={ngayTrinhKyHopDong}
                />
                <DateComponemt
                    textName="Ngày ký kết"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setNgayKyKet}
                    value={ngayKyKet}
                />
                <DateComponemt
                    textName="Ngày bàn giao HĐ về sàn"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setNgayBanGiaoHDVeSan}
                    value={ngayTrinhKyHopDong}
                />
                <DateComponemt
                    textName="Ngày bàn giao HĐ về KH"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setNgayBanGiaoHDVeKH}
                    value={ngayBanGiaoHDVeKH}
                />
                <DateComponemt
                    textName="Ngày bàn giao HĐ về CĐT"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setNgayBanGiaoHDVeCDT}
                    value={ngayBanGiaoHDVeCDT}
                />
                <TextInputComponent
                    textName="Hoàn tất bản cứng"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setHoanTatBanCung}
                    value={hoanTatBanCung}
                    check={vayNganHang ? "Có" : "Không"}
                />
                <BoolenComponent
                    textName="Vay ngân hàng"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setVayNganHang}
                    value={vayNganHang}
                    check={vayNganHang ? "Có" : "Không"}
                />
                <OptionSetComponent
                    textName="Người phụ trách duyệt"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setNguoiPhuTrachDuyet}
                    value={nguoiPhuTrachDuyet}
                    caret={true}
                />
                <OptionSetComponent
                    textName="Trạng thái"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setTrangThai}
                    value={trangThai}
                    caret={true}

                />
                <OptionSetComponent
                    textName="Tình trạng duyệt"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setTinhTrangDuyet}
                    value={tinhTrangDuyet}
                    caret={true}
                />
                <ButtonRefesh
                    textName="Khách hàng đồng sở hữu"

                />
            </ScrollView>
        </View>
    )
}
export default ThongTinChung;