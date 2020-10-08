import React, { useState } from 'react';
import ButtonComponent from '../../../common/ButtonComponent'
import OptionSetComponent from '../../../../../../common/HoatDong/OptionSetComponent'
import TextInputComponent from '../../../../../../common/HoatDong/TextInputComponent'
import ButtonRefesh from '../../../common/ButtonRefesh'


import {
    View,
    ScrollView
} from 'react-native';
const DeXuatChuyenTen = ({ navigation }) => {
    const [tieuDe, setTieuDe] = useState("")
    const [loaiChungTu, setLoaiChungTu] = useState("")
    const [phieuDatCho, setPhieuDatCho] = useState("")
    const [phiChuyenTen, setPhiChuyenTen] = useState("")
    const [lyDo, setLyDo] = useState("")
    const [hoaHong, setHoaHong] = useState("")
    const [nhanVien, setNhanVien] = useState("")
    const [khachHang, setKhachHang] = useState("")
    const [trangThai, setTrangThai] = useState("")
    LoaiChungTu =
        [
            "Đặt chỗ", "Đặt cọc"
        ]
    navigation.setOptions({
        headerRight: () => (
            <View
                style=
                {{
                    flexDirection: 'row',
                }}>
                <TouchableOpacity
                    onPress=
                    {
                        () => {
                            // setActivity(1)
                        }
                    }
                    style={style.Touch}
                >
                    <FontAwesome
                        name="save" size={25} color='white'

                    ></FontAwesome>
                </TouchableOpacity>


            </View>

        ),
        headerTitle: () =>
            (
                <Text>
                    Đề xuất chuyển tên
                </Text>
            )
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
                <OptionSetComponent textName="Loại chứng từ"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setLoaiChungTu}
                    value={loaiChungTu}
                    caret={true}
                    dataOption={LoaiChungTu}
                />
                <OptionSetComponent textName="Phiếu đặt chỗ"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setPhieuDatCho}
                    value={phieuDatCho}
                    caret={true}
                />
                <TextInputComponent textName="Phí chuyển tên"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setPhiChuyenTen}
                    value={phiChuyenTen}
                />
                <TextInputComponent textName="Lý do"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setLyDo}
                    value={lyDo}
                />
                <TextInputComponent textName="Hoa hồng"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setHoaHong}
                    value={hoaHong}
                />

                <ButtonComponent textName="Nhân viên"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setNhanVien}
                    value={nhanVien}
                    caret={true}
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
                        {{
                            color: 'white',
                            fontSize: 20,
                            margin: 20
                        }}
                    >
                        Thông tin thay đổi
                </Text>
                </View>
                <ButtonComponent textName="Khách hàng"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setKhachHang}
                    value={khachHang}
                    caret={true}
                />
                <ButtonComponent textName="Trạng thái"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setTrangThai}
                    value={trangThai}
                    caret={true}
                />
                {/* <ButtonRefesh textName="Tài khoản ngân hàng" />
                <ButtonRefesh textName="Chủ tài khoản" />
                <ButtonRefesh textName="Ngân hàng" />
                <ButtonRefesh textName="Chi nhánh ngân hàng" />
                <ButtonRefesh textName="Trạng thái" /> */}
                <ButtonRefesh textName="Khách hàng đồng sở hữu" />
            </ScrollView>
        </View>
    )
}
export default DeXuatChuyenTen;