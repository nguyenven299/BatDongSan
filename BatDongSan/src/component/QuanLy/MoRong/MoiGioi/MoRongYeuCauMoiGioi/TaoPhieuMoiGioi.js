import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import TextInputComponent from '../../../../../common/HoatDong/TextInputComponent'
import OptionSetComponent from '../../../../../common/HoatDong/OptionSetComponent'
import OptionSetSearchComponent from '../../../../../common/HoatDong/OptionSetSearchComponent'
import DateComponemt from '../../../../../common/HoatDong/DateComponemt'
import InputTextCurrentcy from '../../../../../common/HoatDong/InputTextCurrentcy'


import {
    ImageBackground,
    View,
    Text,
    TouchableOpacity,
    Alert,
    ScrollView,
    StyleSheet,
    TextInput,
    Modal
} from 'react-native';

const TaoPhieuMoiGioi = ({ navigation }) => {
    const [tieuDe, setTieuDe] = useState("")
    const [duAn, setDuAn] = useState("")
    const [duAnData, setDuAnData] = useState("Dự án")
    const [tenKhachHang, setTenKhachHang] = useState("")
    const [sanPham, setSanPham] = useState("")
    const [sanPhamData, setSanPhamData] = useState("Sản Phẩm")
    const [giatriHopDongDichVu, setGiatriHopDongDichVu] = useState("")
    const [giaTriHopDongGoc, setGiaTriHopDongGoc] = useState("")
    const [giaChuyenNhuong, setGiaChuyenNhuong] = useState("")
    const [ngayYeuCau, setNgayYeuCau] = useState("")
    const [ngayHetHan, setNgayHetHan] = useState("")
    const [hopDongVay, setHopDongVay] = useState("")
    const [hopDongMuaBan, setHopDongMuaBan] = useState("")
    const [hopDongNguyenTac, setHopDongNguyenTac] = useState("")
    const [hopDongDichVu, setHopDongDichVu] = useState("")
    const [nhanVienKinhDoanh, setNhanVienKinhDoanh] = useState("")
    const [trangThai, setTrangThai] = useState("")
    var DuAnData = ["Dự án"]
    var SanPhamData = ["Sản phẩm"]
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {

                }}
                style=
                {{
                    padding: 15
                }}
            >
                <FontAwesome
                    name="save" size={20} color='white'
                    style=
                    {{
                        marginRight: 10
                    }}
                ></FontAwesome>
            </TouchableOpacity>
        ),
        title: "Khách hàng tiềm năng",
    });
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
                    textName="Dự án"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setDuAn}
                    value={duAn}
                    setValue1={setDuAnData}
                    value1={duAnData}
                    caret={true}
                    option={DuAnData} />
                <TextInputComponent
                    textName="Tên khách hàng"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setTenKhachHang}
                    value={tenKhachHang}

                />
                <OptionSetSearchComponent
                    textName="Sản phẩm"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setSanPham}
                    value={sanPham}
                    setValue1={setSanPhamData}
                    value1={sanPhamData}
                    caret={true}
                    option={SanPhamData}
                />
                <InputTextCurrentcy
                    textName="Giá trị hợp đồng dịch vụ"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setGiatriHopDongDichVu}
                    value={giatriHopDongDichVu}
                />
                <InputTextCurrentcy
                    textName="Giá trị hợp đồng gốc"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setGiaTriHopDongGoc}
                    value={giaTriHopDongGoc}
                />
                <InputTextCurrentcy
                    textName="Giá chuyển nhượng"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setGiaChuyenNhuong}
                    value={giaChuyenNhuong}
                />
                <DateComponemt
                    textName="Ngày yêu cầu"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setNgayYeuCau}
                    value={ngayYeuCau}
                />
                <DateComponemt
                    textName="Ngày hết hạn"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setNgayHetHan}
                    value={ngayHetHan}
                />

                <OptionSetComponent
                    textName="Hợp đồng vay"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setHopDongVay}
                    value={hopDongVay}
                    caret={true}
                />
                <OptionSetComponent
                    textName="Hợp đồng mua bán"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setHopDongMuaBan}
                    value={hopDongMuaBan}
                    caret={true}
                />
                <OptionSetComponent
                    textName="Hợp đồng nguyên tắc"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setHopDongNguyenTac}
                    value={hopDongNguyenTac}
                    caret={true}
                />
                <OptionSetComponent
                    textName="Hợp đồng dịch vụ"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setHopDongDichVu}
                    value={hopDongDichVu}
                    caret={true}
                />
                <OptionSetComponent
                    textName="Nhân viên kinh doanh"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setNhanVienKinhDoanh}
                    value={nhanVienKinhDoanh}
                    caret={true}
                />
                <OptionSetComponent
                    textName="Trạng thái"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setTrangThai}
                    value={trangThai}
                    caret={true}
                />
            </ScrollView>



        </View>
    )
}
export default TaoPhieuMoiGioi;