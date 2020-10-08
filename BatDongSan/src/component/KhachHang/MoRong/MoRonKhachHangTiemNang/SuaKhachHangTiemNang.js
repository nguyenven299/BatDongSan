import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import OptionSetComponent from '../../../../common/HoatDong/OptionSetComponent'
import TextInputComponent from '../../../../common/HoatDong/TextInputComponent'
import BoolenComponent from '../../../../common/HoatDong/BoolenComponent'
import MultiInputCuocGoiComponent from '../../../../common/HoatDong/MultiInputCuocGoiComponent'
import DateComponemt from '../../../../common/HoatDong/DateComponemt'
import StyleCommon from '../../../../theme/StyleCommon'
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    Modal
} from 'react-native';

const SuaKhachHangTiemNang = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [loaiKhachHang, setLoaiKhachHang] = useState("");
    const [phanLoaiKhachHang, setPhanLoaiKhachHang] = useState("");
    const [khachHangNuocNgoai, setKhachHangNuocNgoai] = useState(false);
    const [hoVaTen, setHoVaTen] = useState("");
    const [ten, setTen] = useState("");
    const [gioiTinh, setGioiTinh] = useState("");
    const [soDienThoai, setSoDienThoai] = useState("");
    const [bietDanh, setBietDanh] = useState("");
    const [ngaySinh, setNgaySinh] = useState("");
    const [danToc, setDanToc] = useState("");
    const [sdt2, setSDT2] = useState("");
    const [sd3, setSDT3] = useState("");
    const [email, setEmail] = useState("");
    const [mucThuNhap, setMucThuNhap] = useState("");
    const [soCMND, setSoCMND] = useState("");
    const [noiCapCMND, setNoiCapCMND] = useState("");
    const [ngayCapCMND, setngayCapCMND] = useState("");
    const [soCCCD, setSoCCCD] = useState("");
    const [noiCapCCCD, setNoiCapCCCD] = useState("");
    const [ngayCapCCCD, setNgayCapCCCD] = useState("");
    const [soPassport, setSoPassport] = useState("");
    const [noiCapPassport, setNoiCapPassport] = useState("");
    const [ngayCapPassport, setNgayCapPassport] = useState("");
    const [quocGiaLienHe, setQuocGiaLienHe] = useState("");
    const [tinhThanhPhoThuongTru, setTinhThanhPhoThuongTru] = useState("");
    const [quanHuyenThuongTru, setQuanHuyenThuongTru] = useState("");
    const [phuongxaThuongTru, setPhuongxaThuongTru] = useState("");
    const [soNhaThuongTru, setSoNhaThuongTru] = useState("");
    const [diaChiThuongTru, setDiaChiThuongTru] = useState("");
    const [quocGiaThuongTru, setQuocGiaThuongTru] = useState("");
    const [tinhThanhLienHe, setTinhThanhLienHe] = useState("");
    const [quanHuyenLienHe, setQuanHuyenLienHe] = useState("");
    const [phuongXaLienHe, setPhuongXaLienHe] = useState("");
    const [soNhaLienHe, setSoNhaLienHe] = useState("");
    const [diaChiLienHe, setDiaChiLienHe] = useState("");
    const [ghiChu, setGhiChu] = useState("");
    var MucThuNhap =
        [
            "< 5 triệu", "Từ 5 triệu < 10 triệu", "Từ 10 triệu < 20 triệu", "Từ 20 triệu < 30 triệu", "Từ 30 triệu < 50 triệu", ">50 triệu"
        ]
    var GioiTinh =
        [
            "Nam", "Nữ", "Khác"
        ]
    navigation.setOptions({
        headerRight: () => (
            <View
                style=
                {{
                    flexDirection: 'row'
                }}
            >
                <TouchableOpacity
                    onPress=
                    {
                        () => {

                        }
                    }
                    style={{
                        padding: 5,
                        margin: 10
                    }}
                >
                    <FontAwesome
                        name="save" size={20} color='white'
                        style={{ marginRight: 5 }}
                    ></FontAwesome>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress=
                    {
                        () => {
                            setModalVisible(!modalVisible)
                        }
                    }
                    style={{
                        padding: 5,
                        margin: 10
                    }}
                >
                    <FontAwesome
                        name="ellipsis-v" size={20} color='white'
                        style={{ marginRight: 5 }}
                    ></FontAwesome>
                </TouchableOpacity>

            </View>

        ),
        headerTitle: () =>
            (

                <Text
                    style=
                    {{
                        fontSize: 20,
                        marginVertical: 20,
                        color: 'white'
                    }}
                >
                    Khách hàng tiềm năng
                </Text>
            )

    });
    return (
        <View
            style=
            {{
                justifyContent: 'center',
            }}
        >
            <ScrollView>

                <OptionSetComponent textName="Loại khách hàng"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setLoaiKhachHang}
                    value={loaiKhachHang}
                    caret={true}
                />
                <OptionSetComponent textName="Phân loại khách hàng"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setPhanLoaiKhachHang}
                    value={phanLoaiKhachHang}
                    caret={true}
                />
                <BoolenComponent textName="Khách hàng nước ngoài"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setKhachHangNuocNgoai}
                    value={khachHangNuocNgoai}
                    check={khachHangNuocNgoai ? ("Có") : ("Không")}
                />
                <TextInputComponent textName="Họ và tên đệm (VD:Nguyễn Văn)"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setHoVaTen}
                    value={hoVaTen}
                    caret={false}
                />
                <TextInputComponent textName="Tên (VD: Nam)"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setTen}
                    value={ten}
                    caret={false}
                />
                <OptionSetComponent textName="Giới tính"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setGioiTinh}
                    value={gioiTinh}
                    caret={true}
                    dataOption={GioiTinh}
                />
                <TextInputComponent textName="Số điện thoại (chính)"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setSoDienThoai}
                    value={soDienThoai}
                />
                <TextInputComponent textName="Biệt danh"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setBietDanh}
                    value={bietDanh}
                />
                <DateComponemt textName="Ngày sinh"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setNgaySinh}
                    value={ngaySinh}
                />
                <OptionSetComponent textName="Dân tộc"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setDanToc}
                    value={danToc}
                    caret={true}
                />
                <TextInputComponent textName="Số điện thoại thứ 2"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setSDT2}
                    value={sdt2}
                />
                <TextInputComponent textName="Số điện thoại thứ 3"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setSDT3}
                    value={sd3}
                />
                <TextInputComponent textName="Email"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setEmail}
                    value={email}
                />
                <OptionSetComponent textName="Mức thu nhập"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setMucThuNhap}
                    value={mucThuNhap}
                    caret={true}
                //  dataOption={MucThuNhap}
                />
                <TextInputComponent textName="Số CMND"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setSoCMND}
                    value={soCMND}
                />
                <TextInputComponent textName="Nơi cấp CMND"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setNoiCapCMND}
                    value={noiCapCMND}
                />
                <DateComponemt textName="Ngày cấp CMND"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setngayCapCMND}
                    value={ngayCapCMND}
                />
                <TextInputComponent textName="Số CCCD"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setSoCCCD}
                    value={soCCCD}
                />
                <OptionSetComponent textName="Nơi cấp CCCD"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setNoiCapCCCD}
                    value={noiCapCCCD}
                    caret={true}
                //   dataOption={MucThuNhap}
                />
                <OptionSetComponent textName="Ngày cấp CCCD"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setNgayCapCCCD}
                    value={ngayCapCCCD}
                    caret={true}
                //   dataOption={MucThuNhap}
                />
                <TextInputComponent textName="Số Passport"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setSoPassport}
                    value={soPassport}
                />
                <OptionSetComponent textName="Nơi cấp Passport"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setNoiCapPassport}
                    value={noiCapPassport}
                    caret={true}
                //  dataOption={MucThuNhap}
                />
                <OptionSetComponent textName="Ngày cấp Passport"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setNgayCapPassport}
                    value={ngayCapPassport}
                    caret={true}
                //  dataOption={MucThuNhap}
                />
                <OptionSetComponent textName="Quốc gia thường trú"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setQuocGiaThuongTru}
                    value={quocGiaThuongTru}
                    caret={true}
                //  dataOption={MucThuNhap}
                />
                <OptionSetComponent textName="Tỉnh/Thành phố thường trú"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setTinhThanhPhoThuongTru}
                    value={tinhThanhPhoThuongTru}
                    caret={true}
                //  dataOption={MucThuNhap}
                />
                <OptionSetComponent textName="Quận/ Huyện thường trú"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setQuanHuyenThuongTru}
                    value={quanHuyenThuongTru}
                    caret={true}
                //  dataOption={MucThuNhap}
                />
                <OptionSetComponent textName="Phường/Xã thường trú"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setPhuongxaThuongTru}
                    value={phuongxaThuongTru}
                    caret={true}
                //  dataOption={phuongxaThuongTru}
                />
                <TextInputComponent textName="Số nhà, tên đường thường trú"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setSoNhaThuongTru}
                    value={soNhaThuongTru}
                />
                <MultiInputCuocGoiComponent textName="Địa chỉ thường trú"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setDiaChiThuongTru}
                    value={diaChiThuongTru}
                />
                <OptionSetComponent textName="Quốc gia liên hệ"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setQuocGiaLienHe}
                    value={quocGiaLienHe}
                    caret={true}
                    dataOption={MucThuNhap}
                />
                <OptionSetComponent textName="Tỉnh/Thành phố liên hệ"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setTinhThanhLienHe}
                    value={tinhThanhLienHe}
                    caret={true}
                // dataOption={MucThuNhap}
                />
                <OptionSetComponent textName="Quận/ Huyện liên hệ"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setQuanHuyenLienHe}
                    value={quanHuyenLienHe}
                    caret={true}
                // dataOption={MucThuNhap}
                />
                <OptionSetComponent textName="Phường/Xã liên hệ"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setPhuongXaLienHe}
                    value={phuongXaLienHe}
                    caret={true}
                // dataOption={MucThuNhap}
                />
                <TextInputComponent textName="Số nhà, tên đường liên hệ"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setSoNhaLienHe}
                    value={soNhaLienHe}
                />
                <MultiInputCuocGoiComponent textName="Địa chỉ liên hệ"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setDiaChiLienHe}
                    value={diaChiLienHe}
                />
                <MultiInputCuocGoiComponent textName="Ghi chú"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setGhiChu}
                    value={ghiChu}
                />
                <View
                    style=
                    {{
                        width: "90%",
                        height: 50,
                        margin: "5%",
                        padding: "2%",
                        backgroundColor: 'orange',
                        flexDirection: 'row',
                        alignContent: 'center',
                        borderRadius: 5

                    }}
                >
                    <Text
                        style=
                        {{
                            color: 'white',
                            fontSize: 20,

                        }}
                    >
                        Hình ảnh đính kèm
    </Text>
                    <FontAwesome
                        name='plus' size={20} color="white"
                        style=
                        {{
                            position: 'absolute',
                            right: "5%",
                            top: '40%'
                        }}
                    />
                </View>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={StyleCommon.backgoundModal}>
                    <View style=
                        {{
                            margin: 20,
                            backgroundColor: "white",
                            width: 350,
                            height: 200,
                            alignItems: "center",
                            shadowColor: "#000",
                            shadowOffset:
                            {
                                width: 0,
                                height: 2
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5
                        }}
                    >
                        <TouchableOpacity
                            style=
                            {{
                                marginTop: 10,
                                height: 50,
                                width: 250,
                                justifyContent: 'center',
                            }}
                            onPress={
                                () => {
                                    // navigation.navigate("TaoCuocGoi"),
                                    setModalVisible(!modalVisible);

                                }}

                        >
                            <Text
                                style=
                                {{
                                    textAlign: 'center',
                                    fontSize: 17

                                }}
                            >
                                Khách hàng giao dịch
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style=
                            {{
                                marginTop: 10,
                                height: 50,
                                width: 250,
                                justifyContent: 'center',
                            }}
                            onPress={
                                () => {
                                    navigation.navigate("TaoCuocGoi"),
                                        setModalVisible(!modalVisible);

                                }}

                        >
                            <Text
                                style=
                                {{
                                    textAlign: 'center',
                                    fontSize: 17

                                }}
                            >
                                Tạo cuộc gọi
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style=
                            {{
                                height: 50,
                                width: 250,
                                padding: 20,
                                textAlign: 'center',

                            }}
                            onPress={
                                () => {
                                    navigation.navigate("TaoPhieuTiepKhach"),
                                        setModalVisible(!modalVisible);

                                }}
                        >
                            <Text
                                style=
                                {{
                                    textAlign: 'center',
                                    fontSize: 17
                                }}
                            >
                                Tạo phiếu khách hàng
                                </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#F0EEF0",
                                width: 350,
                                padding: 10,
                                marginTop: 20,
                                elevation: 2,
                            }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={{
                                color: "black",
                                fontSize: 20,
                                textAlign: "center"
                            }}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

export default SuaKhachHangTiemNang;
