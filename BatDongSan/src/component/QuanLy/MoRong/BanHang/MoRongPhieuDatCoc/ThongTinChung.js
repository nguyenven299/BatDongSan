import React, { useState } from 'react';
import ButtonComponent from '../../../../../common/ButtonComponent'
import InputTextComponent from '../../../../../common/InputTextComponent'
import MultiLineTextInputComponent from '../../../../../common/MultiLineTextInputComponent'
import ButtonRefesh from '../../../../../common/ButtonRefesh'
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import OptionSetComponent from '../../../../../common/HoatDong/OptionSetComponent'
import TextInputComponent from '../../../../../common/HoatDong/TextInputComponent'
import DateTimeComponent from '../../../../../common/HoatDong/DateTimeComponent'
import {
    View,
    ScrollView,
    Text
} from 'react-native';
const ThongTinChung = ({ navigation }) => {
    const [ma, setMa] = useState("")
    const [tieuDe, setTieuDe] = useState("")
    const [khachHang, setKhachHang] = useState("")
    const [duAn, setDuAn] = useState("")
    const [dotPhatHang, setDotPhatHang] = useState("")
    const [sanPham, setSanPham] = useState("")
    const [chuDauTu, setChuDauTu] = useState("")
    const [loaiPhatHang, setLoaiPhatHang] = useState("")
    const [batDauDatCoc, setBatDauDatCoc] = useState("")
    const [ketThucDatCoc, setKetThucDatCoc] = useState("")
    const [ngayDongTienCocBoSung, setNgayDongTienCocBoSung] = useState("")
    const [giaHanDenNgay, setGiaHanDenNgay] = useState("")
    const [trangThai, setTrangThai] = useState("")
    const [tinhTrangDuyet, setTinhTrangDuyet] = useState("")
    const [tinhTrangGiaHan, setTinhTrangGiaHan] = useState("")
    const [khachHangDongSoHuu, setKhachHangDongSoHuu] = useState("")
    return (
        <View>
            <ScrollView>
                <TextInputComponent textName="Mã"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setMa}
                    value={ma}
                />
                <TextInputComponent textName="Tiêu đề"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setTieuDe}
                    value={tieuDe} />
                <OptionSetComponent textName="Khách hàng"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setKhachHang}
                    value={khachHang}
                    caret={true}
                />
                <OptionSetComponent textName="Dự án"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setDuAn}
                    value={duAn}
                    caret={true}
                />
                <OptionSetComponent textName="Đợt phát hàng"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setDotPhatHang}
                    value={dotPhatHang}
                    caret={true}
                />
                <OptionSetComponent textName="Sản phẩm"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setSanPham}
                    value={sanPham}
                    caret={true}
                />
                <OptionSetComponent textName="Chủ đầu tư"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setChuDauTu}
                    value={chuDauTu}
                    caret={true}
                />
                <OptionSetComponent textName="Loại phát hàng"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setLoaiPhatHang}
                    value={loaiPhatHang}
                    caret={true}
                />
                <DateTimeComponent textName="Bắt đầu đặt cọc"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setBatDauDatCoc}
                    value={batDauDatCoc}
                    caret={true}
                />
                <DateTimeComponent textName="Kết thúc đặt cọc"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setKetThucDatCoc}
                    value={ketThucDatCoc}
                    caret={true}
                />
                <DateTimeComponent textName="Kết thúc đặt cọc"
                    textName="Ngày đóng tiền cọc bổ sung"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setNgayDongTienCocBoSung}
                    value={ngayDongTienCocBoSung}
                    caret={true}
                />
                <DateTimeComponent textName="Kết thúc đặt cọc"
                    textName="Gia hạn đến ngày"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setGiaHanDenNgay}
                    value={giaHanDenNgay}
                    caret={true}
                />
                <OptionSetComponent textName="Trạng thái"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setTrangThai}
                    value={trangThai}
                    caret={true}
                />
                <OptionSetComponent textName="Tình trạng duyệt"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setTinhTrangDuyet}
                    value={tinhTrangDuyet}
                    caret={true}
                />
                <OptionSetComponent textName="Tình trạng gia hạn"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setTinhTrangGiaHan}
                    value={tinhTrangGiaHan}
                    caret={true}
                />
                <ButtonRefesh textName="Khách hàng đồng sở hữu"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setKhachHangDongSoHuu}
                    value={khachHangDongSoHuu}
                    caret={true}
                />
                <View
                    style=
                    {{
                        backgroundColor: 'orange',
                        height: 50,
                        width: '90%',
                        alignContent: 'center',
                        justifyContent: 'center',
                        marginHorizontal: 20,
                        paddingHorizontal: 10,
                        marginBottom: 20,
                        borderRadius: 5
                    }}
                >
                    <Text
                        style=
                        {{
                            fontSize: 20,
                            color: 'white'
                        }}
                    >
                        Hình ảnh khách hàng
                    </Text>
                    <FontAwesome
                        name="plus" size={20} color="white"
                        style=
                        {{
                            position: 'absolute',
                            right: '5%'
                        }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}
export default ThongTinChung;