import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import TextInputComponent from '../../../../../common/HoatDong/TextInputComponent'
import InputTextCurrentcy from '../../../../../common/HoatDong/InputTextCurrentcy'
import OptionSetSearchComponent from '../../../../../common/HoatDong/OptionSetSearchComponent'
import OptionSetComponent from '../../../../../common/HoatDong/OptionSetComponent'
import MultiLineInputTextComponent from '../../../../../common/HoatDong/MultiInputCuocGoiComponent'
import {
    View, ScrollView
} from 'react-native';
const ThongTinChung = ({ navigation }) => {
    const [tieuDe, setTieuDe] = useState("")
    const [dotPhatHanh, setDotPhatHanh] = useState("Đợt phát hành")
    const [dotPhatHanhData, setDotPhatHanhData] = useState("Đợt phát hành")
    const [chinhSachGopVonNoiBo, setChinhSachGopVonNoiBo] = useState("Chính sách góp vốn nội bộ")
    const [chinhSachGopVonNoiBoData, setChinhSachGopVonNoiBoData] = useState("Chính sách góp vốn nội bộ")
    const [chiTietChinhSachGopVonNoiBo, setChiTietChinhSachGopVonNoiBo] = useState("Chi tiết chính sách góp vốn nội bộ")
    const [chiTietChinhSachGopVonNoiBoData, setChiTietChinhSachGopVonNoiBoData] = useState("Chi tiết chính sách góp vốn nội bộ")
    const [khachHang, setKhachHang] = useState("Khách hàng giao dịch")
    const [khachHangData, setKhachHangData] = useState("Khách hàng giao dịch")
    const [hinhThucThanhToan, setHinhThucThanhToan] = useState("")
    const [taiKhoanNganHang, setTaiKhoanNganHang] = useState("")
    const [taiKhoanNganHangData, setTaiKhoanNganHangData] = useState("Tài khoản ngân hàng")
    const [chuTaiKhoan, setChuTaiKhoan] = useState("")
    const [chiNhanhNganHang, setChiNhanhNganHang] = useState("")
    const [nganHang, setNganHang] = useState("")
    const [giaTriGopVon, setGiaTriGopVon] = useState("")
    const [trangThai, setTrangThai] = useState("")
    const [ghiChu, setGhiChu] = useState("")
    var KhachHang = ["Khách hàng giao dịch", "Khách hàng đồng sở hữu"]
    var HinhThucThanhToan = ["Chuyển khoản", "Tiền mặt", "Chuyển khoản/Tiền mặt"]
    var TaiKhoanNganHang = ["101412312"]
    return (
        <View>
            <ScrollView>
                <TextInputComponent
                    textName="Tiêu đề"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setTieuDe}
                    value={tieuDe}
                />
                <OptionSetSearchComponent
                    textName="Đợt phát hành"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setDotPhatHanh}
                    value={dotPhatHanh}
                    value1={dotPhatHanhData}
                    setValue1={setDotPhatHanhData}
                />
                <OptionSetSearchComponent
                    textName="Chính sách góp vốn nội bộ"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setChinhSachGopVonNoiBo}
                    value={chinhSachGopVonNoiBo}
                    value1={chinhSachGopVonNoiBoData}
                    setValue1={setChinhSachGopVonNoiBoData}
                />
                <OptionSetSearchComponent
                    textName="Chi tiết chính sách góp vốn nội bộ"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setChiTietChinhSachGopVonNoiBo}
                    value={chiTietChinhSachGopVonNoiBo}
                    value1={chiTietChinhSachGopVonNoiBoData}
                    setValue1={setChiTietChinhSachGopVonNoiBoData}
                />
                <OptionSetSearchComponent textName="Khách hàng"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setKhachHang}
                    value={khachHang}
                    value1={khachHangData}
                    setValue1={setKhachHangData}
                    option={KhachHang}
                />
                <OptionSetComponent
                    textName="Hình thức thanh toán"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setKhachHang}
                    value={khachHang}
                    dataOption={HinhThucThanhToan}
                />
                <OptionSetSearchComponent
                    textName="Tài khoản ngân hàng"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setTaiKhoanNganHang}
                    value={taiKhoanNganHang}
                    value1={taiKhoanNganHangData}
                    setValue1={setTaiKhoanNganHangData}
                    option={TaiKhoanNganHang}
                />
                <TextInputComponent
                    textName="Chủ tài khoản"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setChuTaiKhoan}
                    value={chuTaiKhoan}
                />
                <OptionSetComponent
                    textName="Chi nhánh ngân hàng"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setChiNhanhNganHang}
                    value={chiNhanhNganHang}
                />
                <OptionSetComponent
                    textName="Ngân hàng"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setNganHang}
                    value={nganHang}
                />
                <InputTextCurrentcy
                    textName="Giá trị góp vốn"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setGiaTriGopVon}
                    value={giaTriGopVon}
                />
                <OptionSetSearchComponent
                    textName="Trạng thái"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setTrangThai}
                    value={trangThai}
                />
                <MultiLineInputTextComponent
                    textName="Ghi chú"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setGhiChu}
                    value={ghiChu}
                />
            </ScrollView>
        </View>
    )
}
export default ThongTinChung;