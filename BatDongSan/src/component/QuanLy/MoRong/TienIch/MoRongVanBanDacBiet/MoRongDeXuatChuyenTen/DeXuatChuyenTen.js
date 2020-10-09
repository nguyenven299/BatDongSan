import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import OptionSetComponent from '../../../../../../common/HoatDong/OptionSetComponent'
import InputTextCurrentcy from '../../../../../../common/HoatDong/InputTextCurrentcy'
import TextInputComponent from '../../../../../../common/HoatDong/TextInputComponent'
import OptionSetSearchComponent from '../../../../../../common/HoatDong/OptionSetSearchComponent'
import ButtonRefesh from '../../../../../../common/ButtonRefesh'
import StyleCommon from '../../../../../../theme/StyleCommon'
import {
    View,
    TouchableOpacity,
    ScrollView,
    Text
} from 'react-native';
const DeXuatChuyenTen = ({ navigation }) => {
    const [tieuDe, setTieuDe] = useState("")
    const [loaiChungTu, setLoaiChungTu] = useState("")
    const [loaiChungTuData, setLoaiChungTuData] = useState("")
    const [phieuDatCho, setPhieuDatCho] = useState("")
    const [phieuDatChoData, setPhieuDatChoData] = useState("Phiếu đặt chỗ")
    const [phiChuyenTien, setPhiChuyenTien] = useState("")
    const [lyDo, setLyDo] = useState("")
    const [hoaHong, setHoaHong] = useState("")
    const [nhanVien, setNhanVien] = useState("")
    const [thongTinThayDoi, setThongTinThayDoi] = useState("")
    const [khachHang, setKhachHang] = useState("")
    const [khachHangData, setKhachHangData] = useState("Khách hàng giao dịch")
    const [trangThai, setTrangThai] = useState("")
    const [khachHangDongSoHuu, setKhachHangDongSoHuu] = useState("")
    LoaiDatCho = ["Đặt chỗ", "Đặt cọc"]
    PhieuDatChoData = ["Phiếu đặt chỗ"]
    KhachHangData = ["Khách hàng giao dịch", "Khách hàng đồng sơ hữu"]
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
        title: "Đề xuất chuyển tên",
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
                <OptionSetComponent
                    textName="Loại chứng từ"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setLoaiChungTu}
                    value={loaiChungTu}
                    caret={true}
                />
                <OptionSetSearchComponent
                    textName="Phiếu đặt chỗ"
                    disable={true}
                    visible={true}
                    required={false}
                    value={phieuDatCho}
                    setValue={setPhieuDatCho}
                    value1={phieuDatChoData}
                    setValue1={setPhieuDatChoData}
                    option={PhieuDatChoData}
                />
                <TextInputComponent
                    textName="Phí chuyển tiền"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setPhiChuyenTien}
                    value={phiChuyenTien}
                />
                <TextInputComponent
                    textName="Lý do"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setLyDo}
                    value={lyDo}
                />
                <InputTextCurrentcy
                    textName="Hoa hồng"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setHoaHong}
                    value={hoaHong}
                />
                <OptionSetComponent
                    textName="Nhân viên"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setNhanVien}
                    value={nhanVien}
                />
                <View
                    style=
                    {{
                        backgroundColor: 'orange',
                        width: '95%',
                        height: 50,
                        borderRadius: 5,
                        alignContent: 'center',
                        justifyContent: 'center',
                        marginTop: 10

                    }}
                >
                    <Text
                        style=
                        {style.textStyle1}
                    >
                        Thông tin thay đổi
                </Text>
                </View>
                <OptionSetSearchComponent
                    textName="Khách hàng"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setKhachHang}
                    value={khachHang}
                    value1={khachHangData}
                    setValue1={setKhachHangData}
                    option={KhachHangData}
                />
                <ButtonConponent
                    textName="Trạng thái"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setTrangThai}
                    value={trangThai}
                />
                <ButtonRefesh textName="Khách hàng đồng sở hữu" />
            </ScrollView>

        </View>
    )
}
export default DeXuatChuyenTen;