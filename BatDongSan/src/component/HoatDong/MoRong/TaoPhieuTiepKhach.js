import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
import TextInputComponent from '../../../common/HoatDong/TextInputComponent';
import OptionSetComponent from './../../../common/HoatDong/OptionSetComponent'
import DateComponemt from '../../../common/HoatDong/DateComponemt'
import DateTimeComponent from '../../../common/HoatDong/DateTimeComponent'
import MultiOptionSetComponent from '../../../common/HoatDong/MultiOptionSetComponent'

const TaoPhieuTiepKhach = ({ navigation }) => {
    const [tieuDe, setTieuDe] = useState()
    const [khachHang, setKhachHang] = useState("Lee Thi Lai")
    const [diaDiem, setDiaDiem] = useState("")
    const [thoiGianBatDauDuKien, setThoiGianBatDauDuKien] = useState(true)
    const [thoiGianKetThucDuKien, setThoiGianKetThucDuKien] = useState("")
    const [thoiGianThongBao, setThoiGianThongBao] = useState("")
    const [khoangThoiGianDuKien, setKhoangThoiGianDuKien] = useState("")
    const [thoiGianKetThucThucTe, setThoiGianKetThucThucTe] = useState("")
    const [khoangThoiGianThucTe, setKhoangThoiGianThucTe] = useState("")
    const [danhGiaMucDoTiemNang, setDanhGiaMucDoTiemNang] = useState("")
    const [mucThuNhap, setMucThuNhap] = useState("")
    const [loaiHinhSanPham, setLoaiHinhSanPham] = useState("")
    const [mucDichMua, setMucDichMua] = useState("")
    const [tongDienTich, setTongDienTich] = useState("")
    const [quanTamKhac, setQuanTamKhac] = useState("")
    const [yKienDongGop, setYKienDongGop] = useState("")
    const [khoangGia, setKhoangGia] = useState("")
    const [huong, setHuong] = useState("")
    const [thoiGianBatDauThucTe, setThoiGianBatDauThucTe] = useState("")
    var DanhGiaMucDoTiemNang =
        [
            "A. Rất tiềm năng", "B. Tiềm năng", "C. Quan tâm mức trung bình", "D. Không quan tâm"
        ]
    var MucThuNhap =
        [
            "< 5 triệu", "Từ 5 triệu < 10 triệu", "Từ 10 triệu < 20 triệu", "Từ 20 triệu < 30 triệu", "Từ 30 triệu < 50 triệu", ">50 triệu"
        ]
    var LoaiHinhSanPham =
        [
            "Đất nền", "Căn hộ", "Condotel", "Shophouse", "Biệt Thự", "Biệt thự nghỉ dưỡng", "Văn phòng cho thuê", "Nhà liền kề"
        ]
    var MucDichMua =
        [
            "Đầu tư để bán", "Cho tặng", "Đầu tư cho thuê", "Mua để ở"
        ]
    var KhoangGia =
        [
            "< 500 triệu", "Từ 500 triệu < 1 tỷ", "Từ 1 tỷ < 2 tỷ", "Từ 2 tỷ < 3 tỷ", "Từ 3 tỷ < 4 tỷ", "Từ 4 tỷ < 5 tỷ", "Từ 5 tỷ < 6 tỷ", "Từ 6 tỷ < 7 tỷ", "Từ 7 tỷ < 8 tỷ", "Từ 8 tỷ < 9 tỷ", "Từ 9 tỷ < 10 tỷ", "> 10 tỷ"
        ]
    var Huong =
        [
            "Đông", "Tây", "Nam", "Bắc", "Đông - Nam", "Đông - Bắc", " Tây - Nam", "Tây - Bắc"
        ]
    var TongDienTich =
        [
            "Từ 30m2 < 60m2", "Từ 60m2 < 80m2", "Từ 80m2 < 100m2", "Từ 100 m2 < 120m2", "> 120m2"
        ]
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {

                }}
                style={{ padding: 15 }}
            >
                <FontAwesome
                    name="save" size={20} color='white'
                    style={{ marginRight: 10 }}
                ></FontAwesome>
            </TouchableOpacity>
        ),
        title: "Phiếu khách hàng",
    });
    return (
        <View>
            <ScrollView>
                <TextInputComponent
                    textName="Tiêu đề"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setTieuDe}
                    value={tieuDe}
                />
                <OptionSetComponent
                    textName="Khách hàng"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setKhachHang}
                    value={khachHang}
                    caret={true}
                />
                <TextInputComponent
                    textName="Địa điểm"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setDiaDiem}
                    value={diaDiem}
                />
                <DateTimeComponent
                    textName="Thời gian bắt đầu dự kiến"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setThoiGianBatDauDuKien}
                    value={thoiGianBatDauDuKien}
                />
                <DateTimeComponent
                    textName="Thời gian kết thúc dự kiến"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setThoiGianKetThucDuKien}
                    value={thoiGianKetThucDuKien}
                />
                <DateTimeComponent
                    textName="Thời gian thông báo"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setThoiGianThongBao}
                    value={thoiGianThongBao}
                    value={tieuDe}
                />
                <OptionSetComponent
                    textName="Khoảng thời gian dự kiến"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setKhoangThoiGianDuKien}
                    value={khoangThoiGianDuKien}
                    caret={true}
                />

                <DateTimeComponent
                    textName="Thời gian bắt đầu thực tế"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setThoiGianBatDauThucTe}
                    value={thoiGianBatDauThucTe}
                />
                <DateTimeComponent
                    textName="Thời gian kết thúc thực tế"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setThoiGianKetThucThucTe}
                    value={thoiGianKetThucThucTe}
                />
                <OptionSetComponent
                    textName="Khoảng thời gian thực tế"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setKhoangThoiGianThucTe}
                    value={khoangThoiGianThucTe}
                    caret={true}
                />
                <OptionSetComponent textName="Đánh giá mức độ tiềm năng"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setDanhGiaMucDoTiemNang}
                    value={danhGiaMucDoTiemNang}
                    caret={true}
                    dataOption={DanhGiaMucDoTiemNang}
                />
                <OptionSetComponent textName="Mức thu nhập"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setMucThuNhap}
                    value={mucThuNhap}
                    caret={true}
                    dataOption={MucThuNhap}
                />
                <MultiOptionSetComponent textName="Loại hình sản phẩm"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setLoaiHinhSanPham}
                    value={loaiHinhSanPham}
                    caret={true}
                    dataOption={LoaiHinhSanPham}
                />
                <MultiOptionSetComponent textName="Mục đích mua"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setMucDichMua}
                    value={mucDichMua}
                    caret={true}
                    dataOption={MucDichMua}
                />
                <MultiOptionSetComponent textName="Khoảng giá"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setKhoangGia}
                    value={khoangGia}
                    caret={true}
                    dataOption={KhoangGia}
                />
                <MultiOptionSetComponent textName="Hướng"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setHuong}
                    value={huong}
                    caret={true}
                    dataOption={Huong}
                />
                <MultiOptionSetComponent textName="Tổng diện tích"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setTongDienTich}
                    value={tongDienTich}
                    caret={true}
                    dataOption={TongDienTich}
                />
                <TextInputComponent
                    textName="Quan tâm khác"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setQuanTamKhac}
                    value={quanTamKhac}
                    caret={true}
                />
                <TextInputComponent
                    textName="Ý kiến đóng góp"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setYKienDongGop}
                    value={yKienDongGop}
                    caret={true}
                />
            </ScrollView>
        </View>
    )
}

export default TaoPhieuTiepKhach;