import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"

import OptionSetComponent from '../../../common/HoatDong/OptionSetComponent'
import TextInputComponent from '../../../common/HoatDong/TextInputComponent'
import MultiTextInputComponent from '../../../common/HoatDong/MultiInputCuocGoiComponent'
import DateTimeComponent from '../../../common/HoatDong/DateTimeComponent'
import {
    View,
    TouchableOpacity,
    ScrollView,
    Text
} from 'react-native';
import StyleCommon from '../../../theme/StyleCommon';
const TaoCuocGoi = ({ navigation }) => {
    const [tieuDe, setTieuDe] = useState("")
    const [nguoiGoi, setNguoiGoi] = useState("Lee Thi Lai")
    const [nguoiNhan, setNguoiNhan] = useState("")
    const [loaiCuocGoi, setLoaiCuocGoi] = useState(true)
    const [dienGiai, setDienGiai] = useState("")
    const [thoiGianCuocGoi, setThoiGianCuocGoi] = useState("")
    const [ngayDuKien, setNgayDuKien] = useState("")
    const [thoiGianThongBao, setThoiGianThongBao] = useState("")
    const [ngayThucHien, setNgayThucHien] = useState("")
    const [trangThai, setTrangThai] = useState("")
    const [danhGiaMucDoTiemNang, setDanhGiaMucDoTiemNang] = useState("")
    const [mucThuNhap, setMucThuNhap] = useState("")
    const [loaiHinhSanPham, setLoaiHinhSanPham] = useState("")
    const [mucDichMua, setMucDichMua] = useState("")
    const [khoangGia, setKhoangGia] = useState("")
    const [huong, setHuong] = useState("")
    const [tongDienTich, setTongDienTich] = useState("")
    var ThoiGianCuocGoi =
        [
            "1 phút", "15 phút", "30 phút", "45 phút", "1 giờ", "1.5 giờ", "2 giờ", "2.5 giờ", "3 giờ", "3.5 giờ", "4 giờ", "4.5 giờ", " 5 giờ", "5.5 giờ", "6 giờ", "6.5 giờ", "7 giờ", "7.5 giờ", "8 giờ"
        ]
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
                    console.log(tieuDe)
                }}
                style={{ padding: 15 }}
            >
                <FontAwesome
                    name="save" size={20} color='white'
                    style={{ marginRight: 10 }}
                ></FontAwesome>
            </TouchableOpacity>
        ),
        title: "Cuộc gọi",
    });

    return (
        <View
            style=
            {{
                backgroundColor: 'white',
                paddingBottom: 10
            }}
        >
            <ScrollView>
                <TextInputComponent
                    textName="Tiêu đề"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setTieuDe}
                    value={tieuDe}
                />
                {
                    loaiCuocGoi ?
                        (
                            <View>
                                <TextInputComponent textName="Người gọi"
                                    disable={true}
                                    visible={true}
                                    required={true}
                                    setValue={setNguoiGoi}
                                    value={nguoiGoi}
                                />
                                <OptionSetComponent textName="Người nhận"
                                    disable={true}
                                    visible={true}
                                    required={true}
                                    setValue={setNguoiNhan}
                                    value={nguoiNhan}
                                    caret={true}
                                />
                            </View>
                        ) : (
                            <View>
                                <OptionSetComponent textName="Người gọi"
                                    disable={true}
                                    visible={true}
                                    required={true}
                                    setValue={setNguoiNhan}
                                    value={nguoiNhan}
                                    caret={true}
                                />
                                <TextInputComponent textName="Người nhận"
                                    disable={true}
                                    visible={true}
                                    required={true}
                                    setValue={setNguoiGoi}
                                    value={nguoiGoi}
                                />
                            </View>
                        )
                }

                <View>
                    <Text style={StyleCommon.textTitleInputStyle}>Loại cuộc gọi</Text>
                    <TouchableOpacity
                        style={StyleCommon.buttonStyle}
                        onPress={() => { setLoaiCuocGoi(!loaiCuocGoi) }}
                    >
                        <Text
                        >{loaiCuocGoi ? "Outcoming" : "Incoming"}</Text>
                    </TouchableOpacity>
                </View>

                <MultiTextInputComponent textName="Diễn giải"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setDienGiai}
                    value={dienGiai}
                />
                <OptionSetComponent textName="Thời gian cuộc gọi"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setThoiGianCuocGoi}
                    value={thoiGianCuocGoi}
                    caret={true}
                    dataOption={ThoiGianCuocGoi}
                />
                <DateTimeComponent textName="Ngày dự kiến"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setNgayDuKien}
                    value={ngayDuKien}
                />
                <DateTimeComponent textName="Thời gian thông báo"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setThoiGianThongBao}
                    value={thoiGianThongBao}
                />
                <DateTimeComponent textName="Ngày thực hiện"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setNgayThucHien}
                    value={ngayThucHien}
                />
                <TextInputComponent textName="Trạng thái"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setTrangThai}
                    value={trangThai}
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
                <OptionSetComponent textName="Loại hình sản phẩm"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setLoaiHinhSanPham}
                    value={loaiHinhSanPham}
                    caret={true}
                    dataOption={LoaiHinhSanPham}
                />
                <OptionSetComponent textName="Mục đích mua"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setMucDichMua}
                    value={mucDichMua}
                    caret={true}
                    dataOption={MucDichMua}
                />
                <OptionSetComponent textName="Khoảng giá"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setKhoangGia}
                    value={khoangGia}
                    caret={true}
                    dataOption={KhoangGia}
                />
                <OptionSetComponent textName="Hướng"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setHuong}
                    value={huong}
                    caret={true}
                    dataOption={Huong}
                />
                <OptionSetComponent textName="Tổng diện tích"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setTongDienTich}
                    value={tongDienTich}
                    caret={true}
                    dataOption={TongDienTich}
                />

            </ScrollView>

        </View>
    )
}
export default TaoCuocGoi;