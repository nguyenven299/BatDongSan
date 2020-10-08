import React, { useState } from 'react';
import ButtonRefesh from '../../../../../common/ButtonRefesh'
import MultiInputCuocGoiComponent from '../../../../../common/HoatDong/MultiInputCuocGoiComponent'
import TextInputComponent from '../../../../../common/HoatDong/TextInputComponent'
import OptionSetComponent from '../../../../../common/HoatDong/OptionSetComponent'
import BoolenComponent from '../../../../../common/HoatDong/BoolenComponent'
import OptionSetSearchComponent from '../../../../../common/HoatDong/OptionSetSearchComponent'

import {
    View,
    ScrollView
} from 'react-native';
const ThongTinThanhToan = ({ navigation }) => {
    const [hinhThucThanhToan, setHinhThucThanhToan] = useState("")
    const [tachTienDoThanhToan, setTachTienDoThanhToan] = useState("")
    const [hinhThucMuaSanPham, setHinhThucMuaSanPham] = useState("")
    const [chinhSachThanhToanSanPham, setChinhSachThanhToanSanPham] = useState("")
    const [chinhSachThanhToanSanPhamData, setChinhSachThanhToanSanPhamData] = useState("Chính sách thanh toán")
    const [soNgayChoPhepTreHan, setSoNgayChoPhepTreHan] = useState("")
    const [soTienDatCoc, setSoTienDatCoc] = useState("")
    const [soTienThanhToan, setSoTienThanhToan] = useState("")
    const [soTienConLai, setSoTienConLai] = useState("")
    const [soTienThuTaiEvent, setSoTienThuTaiEvent] = useState("")
    const [ngayHoanTatThuCoc, setNgayHoanTatThuCoc] = useState("")
    const [tienDatCocDongTruoc, setTienDatCocDongTruoc] = useState("")
    const [tienDatCocBoSung, setTienDatCocBoSung] = useState("")
    const [vayNganHang, setVayNganHang] = useState(false)
    const [thongTinGoiVay, setThongTinGoiVay] = useState("")
    const [nganHangChoVay, setNganHangChoVay] = useState("")
    const [tienDoThanhToanSanPham, setTienDoThanhToanSanPham] = useState("")
    const [tienDoThanhToanTaiSan, setTienDoThanhToanTaiSan] = useState("")
    var ChinhSachThanhToanSanPhamData = ["Chính sách thanh toán", "123"]
    var ChinhSachThanhToanSanPham = ["CSTT-Góp Vốn", "CSTT Đất nền khách hàng tự xây dựng"]
    return (
        <View>
            <ScrollView>
                <OptionSetComponent
                    textName="Hình thức thanh toán"
                    disable={false}
                    visible={true}
                    required={true}
                    caret={true}
                    setValue={setHinhThucThanhToan}
                    value={hinhThucThanhToan}
                />
                <OptionSetComponent
                    textName="Tách Tiến độ thanh toán"
                    disable={false}
                    visible={true}
                    required={false}
                    caret={true}
                    setValue={setTachTienDoThanhToan}
                    value={tachTienDoThanhToan}
                />
                <OptionSetComponent
                    textName="Hình thức mua sản phẩm"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setHinhThucMuaSanPham}
                    value={hinhThucMuaSanPham}
                />
                <OptionSetSearchComponent
                    textName="Chính sách thanh toán sản phẩm"
                    disable={true}
                    visible={true}
                    required={true}
                    caret={true}
                    setValue={setChinhSachThanhToanSanPham}
                    value={chinhSachThanhToanSanPham}
                    dataOption={ChinhSachThanhToanSanPham}
                    option={ChinhSachThanhToanSanPhamData}
                    value1={chinhSachThanhToanSanPhamData}
                    setValue1={setChinhSachThanhToanSanPhamData}
                />
                <OptionSetComponent
                    textName="Só ngày cho phép trễ hạn(ngày)"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setSoNgayChoPhepTreHan}
                    value={soNgayChoPhepTreHan}
                />
                <OptionSetComponent
                    textName="Số tiền đặt cọc"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setSoTienDatCoc}
                    value={soTienDatCoc}
                />
                <OptionSetComponent
                    textName="Số tiền đã thanh toán"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setSoTienThanhToan}
                    value={soTienThanhToan}
                />
                <OptionSetComponent
                    textName="Số tiền còn lại"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setSoTienConLai}
                    value={soTienConLai}
                />
                <OptionSetComponent
                    textName="Số tiền thu tại Event"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setSoTienThuTaiEvent}
                    value={soTienThuTaiEvent}
                />
                <OptionSetComponent
                    textName="Ngày hoàn tất thu cọc"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setNgayHoanTatThuCoc}
                    value={ngayHoanTatThuCoc}
                />
                <OptionSetComponent
                    textName="Tiền đặt cọc đóng truóc"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setTienDatCocDongTruoc}
                    value={tienDatCocDongTruoc}
                />
                <OptionSetComponent
                    textName="Tiền đặt cọc bổ sung"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setTienDatCocBoSung}
                    value={tienDatCocBoSung}
                />
                <BoolenComponent
                    textName="Vay ngân hàng"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setVayNganHang}
                    value={vayNganHang}
                    check={vayNganHang ? ("Có") : ("Không")}
                />
                <OptionSetComponent
                    textName="Ngân hàng cho vay"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setNganHangChoVay}
                    value={nganHangChoVay}
                />
                <MultiInputCuocGoiComponent
                    textName="Thông tin gói vay"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setThongTinGoiVay}
                    value={thongTinGoiVay}
                />
                <OptionSetComponent
                    textName="Tình trạng thu chi"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setNganHangChoVay}
                    value={nganHangChoVay}
                />
                {/* <ButtonRefesh
                    textName="Tiến Độ Thanh Toán - Sản Phẩm"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setTienDoThanhToanSanPham}
                    value={tienDoThanhToanSanPham}
                />
                <ButtonRefesh
                    textName="Tiến Độ Thanh Toán - Tài Sản"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setTienDoThanhToanTaiSan}
                    value={tienDoThanhToanTaiSan}
                /> */}
            </ScrollView>
        </View>
    )
}
export default ThongTinThanhToan;