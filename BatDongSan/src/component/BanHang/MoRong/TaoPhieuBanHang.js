import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/MaterialIcons"
import TextInputComponent from '../../../common/HoatDong/TextInputComponent'
import OptionSetComponent from '../../../common/HoatDong/OptionSetComponent'
import MultiInputCuocGoiComponent from '../../../common/HoatDong/MultiInputCuocGoiComponent'
import ButtonRefesh from '../../../common/ButtonRefesh'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    ScrollView
} from 'react-native';
const TaoPhieuBanHang = ({ navigation }) => {
    const [tieuDe, setTieuDe] = useState("")
    const [duAn, setDuAn] = useState("")
    const [dotPhatHanh, setDotPhatHanh] = useState("")
    const [khachHang, setKhachHang] = useState("")
    const [hinhThucThanhToan, setHinhThucThanhToan] = useState("")
    const [taiKhoanNganHang, setTaiKhoanNganHang] = useState("")
    const [chuTaiKhoan, setChuTaiKhoan] = useState("")
    const [nganHang, setNganHang] = useState("")
    const [chiNhanhNganHang, setChiNhanhNganHang] = useState("")
    const [dienGiai, setDienGiai] = useState("")
    const [trangThai, setTrangThai] = useState("")
    const [khachHangDongSoHuu, setKhachHangDongSoHuu] = useState("")
    const [sanPhamBanSi, setSanPhamBanSi] = useState("")

    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(true);
                }}
                style=
                {{
                    padding: 15
                }}
            >
                <FontAwesome
                    name="save" size={30} color='white'
                    style=
                    {{
                        marginRight: 10
                    }}
                ></FontAwesome>
            </TouchableOpacity>
        ),
    },

    );
    return (
        <View>
            <ScrollView>
                <TextInputComponent
                    textName="Tiêu đề"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setTieuDe}
                    value={tieuDe} />
                <OptionSetComponent
                    textName="Dự án"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setDuAn}
                    value={duAn}
                    caret={true}
                />
                <OptionSetComponent
                    textName="Đợt phát hành"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setDotPhatHanh}
                    value={dotPhatHanh}
                    caret={true}
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
                <OptionSetComponent
                    textName="Hình thức thanh toán"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setDuAn}
                    value={duAn}
                    caret={true}
                />
                <OptionSetComponent textName="Tài khoản ngân hàng" />
                <TextInputComponent textName="Chủ tài khoản" />
                <OptionSetComponent textName="Ngân hàng" />
                <OptionSetComponent textName="Chi nhánh ngân hàng" />
                <MultiInputCuocGoiComponent textName="Diễn giải" />
                <OptionSetComponent textName="Trạng thái" />
                <ButtonRefesh textName="Khách hàng đồng sở hữu" />
                <ButtonRefesh textName="Sản phẩm bán sỉ" />

            </ScrollView>
        </View>
    )
}
const style = StyleSheet.create({
    textStyle:
    {
        color: 'white',
        fontSize: 20,
        padding: 10,
    },
    viewStyle:
    {
        backgroundColor: '#FFA605',
        width: "90%",
        marginHorizontal: 20,
        marginVertical: 20,
        flexDirection: 'row'

    }
})
export default TaoPhieuBanHang