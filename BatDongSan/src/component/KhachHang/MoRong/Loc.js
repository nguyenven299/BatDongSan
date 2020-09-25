import React, { useEffect, useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import ButtonFilterComponent from '../../../common/ButtonFilterComponent'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ScrollView
} from 'react-native';

const Rename = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [Model, setModel] = useState("Khởi tạo")

    const [chonTatCa1, setChonTatCa1] = useState(false);
    const [ratTiemNang, setRatTiemNang] = useState(false);
    const [TiemNang, setTiemNang] = useState(false);
    const [binhThuong, setBinhThuong] = useState(false);
    const [khongQuanTam, setKhongQuanTam] = useState(false);

    const [chonTatCa2, setChonTatCa2] = useState(false);
    const [duoi5Trieu, setDuoi5Trieu] = useState(false);
    const [tu5Trieu, setTu5Trieu] = useState(false);
    const [tu10Trieu, setTu10Trieu] = useState(false);
    const [tu20Trieu, setTu20Trieu] = useState(false);
    const [tu30Trieu, setTu30Trieu] = useState(false);
    const [hon50Trieu, setHon50Trieu] = useState(false);

    const [chonTatCa3, setChonTatCa3] = useState(false);
    const [datNen, setDatNen] = useState(false);
    const [canHo, setCanHo] = useState(false);
    const [condotel, setCondotel] = useState(false);
    const [shophouse, setShophouse] = useState(false);
    const [bietThu, setBietThu] = useState(false);
    const [bietThuNghiDuong, setBietThuNghiDuong] = useState(false);
    const [vanPhongChoThue, setVanPhongChoThue] = useState(false);
    const [nhaLienKe, setNhaLienKe] = useState(false);

    const [chonTatCa4, setChonTatCa4] = useState(false);
    const [dauTuDeBan, setDauTuDeBan] = useState(false);
    const [choTang, setChoTang] = useState(false);
    const [dauTuChoThue, setDauTuChoThue] = useState(false);
    const [muaDeO, setMuaDeO] = useState(false);

    const [chonTatCa5, setChonTatCa5] = useState(false);
    const [tu30m, setTu30m] = useState(false);
    const [tu60m, setTu60m] = useState(false);
    const [tu80m, setTu80m] = useState(false);
    const [tu100m, setTu100m] = useState(false);
    const [tu120m, setTu120m] = useState(false);

    navigation.setOptions({
        headerRight: () => (

            <TouchableOpacity
                onPress=
                {
                    () => {
                        // navigation.navigate("CreateRename")
                    }
                }
                style={{
                    padding: 5,
                    margin: 10
                }}
            >
                <FontAwesome
                    name="search" size={20} color='white'
                    style={{ marginRight: 5 }}
                ></FontAwesome>
            </TouchableOpacity>
        ),
        headerTitle: () =>
            (

                <Text
                    style=
                    {{
                        justifyContent: 'center',
                        fontSize: 20,
                        color: 'white',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}
                >Bộ lọc</Text>
            )
    });

    useEffect(() => {
        if (chonTatCa1) {
            setRatTiemNang(true);
            setTiemNang(true);
            setBinhThuong(true);
            setKhongQuanTam(true);
        }
        else {
            setRatTiemNang(false);
            setTiemNang(false);
            setBinhThuong(false);
            setKhongQuanTam(false);
        }
    }, [chonTatCa1])

    useEffect(() => {
        if (chonTatCa2) {
            setDuoi5Trieu(true);
            setTu5Trieu(true);
            setTu10Trieu(true);
            setTu20Trieu(true);
            setTu30Trieu(true);
            setHon50Trieu(true);
        }
        else {
            setDuoi5Trieu(false);
            setTu5Trieu(false);
            setTu10Trieu(false);
            setTu20Trieu(false);
            setTu30Trieu(false);
            setHon50Trieu(false);
        }
    }, [chonTatCa2])

    useEffect(() => {
        if (chonTatCa3) {
            setChonTatCa3(true);
            setDatNen(true);
            setCanHo(true);
            setCondotel(true);
            setShophouse(true);
            setBietThu(true);
            setBietThuNghiDuong(true);
            setVanPhongChoThue(true);
            setNhaLienKe(true);

        }
        else {
            setChonTatCa3(false);
            setDatNen(false);
            setCanHo(false);
            setCondotel(false);
            setShophouse(false);
            setBietThu(false);
            setBietThuNghiDuong(false);
            setVanPhongChoThue(false);
            setNhaLienKe(false);
        }
    }, [chonTatCa3])

    useEffect(() => {
        if (chonTatCa4) {
            setChonTatCa4(true);
            setDauTuDeBan(true);
            setChoTang(true);
            setDauTuChoThue(true);
            setMuaDeO(true);

        }
        else {
            setChonTatCa4(false);
            setDauTuDeBan(false);
            setChoTang(false);
            setDauTuChoThue(false);
            setMuaDeO(false);
        }
    }, [chonTatCa4])

    useEffect(() => {
        if (chonTatCa5) {
            setChonTatCa5(true);
            setTu30m(true);
            setTu60m(true);
            setTu80m(true);
            setTu100m(true);
            setTu120m(true);
        }
        else {
            setChonTatCa5(false);
            setTu30m(false);
            setTu60m(false);
            setTu80m(false);
            setTu100m(false);
            setTu120m(false);
        }
    }, [chonTatCa5])
    return (
        <View
            style=
            {{
                backgroundColor: 'white',
            }}
        >
            <ScrollView>

                <TouchableOpacity
                    style=
                    {{
                        flexDirection: 'row',
                        padding: 10
                    }}
                >
                    <Text
                        style=
                        {{
                            marginHorizontal: 20
                        }}
                    >
                        Mức độ tiềm năng
                </Text>
                    <FontAwesome name="chevron-down" size={15} color="black" />
                </TouchableOpacity>
                <ButtonFilterComponent textName="Chọn tất cả" setCount={setChonTatCa1} count={chonTatCa1} />
                <ButtonFilterComponent textName='Rất tiềm năng' setCount={setRatTiemNang} count={ratTiemNang} />
                <ButtonFilterComponent textName="Tiềm năng" setCount={setTiemNang} count={TiemNang} />
                <ButtonFilterComponent textName="Bình thường" setCount={setBinhThuong} count={binhThuong} />
                <ButtonFilterComponent textName='Không quan tâm' setCount={setKhongQuanTam} count={khongQuanTam} />
                <TouchableOpacity
                    style=
                    {{
                        flexDirection: 'row',
                        padding: 10
                    }}
                >
                    <Text
                        style=
                        {{
                            marginHorizontal: 20
                        }}
                    >
                        Mức thu nhập
                </Text>
                    <FontAwesome name="chevron-down" size={15} color="black" />
                </TouchableOpacity>
                <ButtonFilterComponent textName="Chọn tất cả" setCount={setChonTatCa2} count={chonTatCa2} />
                <ButtonFilterComponent textName="< 5 triệu" setCount={setDuoi5Trieu} count={duoi5Trieu} />
                <ButtonFilterComponent textName="Từ 5 triệu < 10 triệu" setCount={setTu5Trieu} count={tu5Trieu} />
                <ButtonFilterComponent textName="Từ 10 triệu < 20 triệu" setCount={setTu10Trieu} count={tu10Trieu} />
                <ButtonFilterComponent textName="Từ 20 triệu < 30 triệu" setCount={setTu20Trieu} count={tu20Trieu} />
                <ButtonFilterComponent textName="Từ 30 triệu < 50 triệu" setCount={setHon50Trieu} count={hon50Trieu} />
                <ButtonFilterComponent textName="> 50 triệu" setCount={setHon50Trieu} count={hon50Trieu} />

                <TouchableOpacity
                    style=
                    {{
                        flexDirection: 'row',
                        padding: 10
                    }}
                >
                    <Text
                        style=
                        {{
                            marginHorizontal: 20
                        }}
                    >
                        Loại sản phẩm
                </Text>
                    <FontAwesome name="chevron-down" size={15} color="black" />
                </TouchableOpacity>
                <ButtonFilterComponent textName="Chọn tất cả" setCount={setChonTatCa3} count={chonTatCa3} />
                <ButtonFilterComponent textName="Đất nền" setCount={setDatNen} count={datNen} />
                <ButtonFilterComponent textName="Căn hộ" setCount={setCanHo} count={canHo} />
                <ButtonFilterComponent textName="Condotel" setCount={setCondotel} count={condotel} />
                <ButtonFilterComponent textName="Shophouse" setCount={setShophouse} count={shophouse} />
                <ButtonFilterComponent textName="Biệt thự" setCount={setBietThu} count={bietThu} />
                <ButtonFilterComponent textName="Biệt thự nghỉ dưỡng" setCount={setBietThuNghiDuong} count={bietThuNghiDuong} />
                <ButtonFilterComponent textName="Văn phòng cho thuê" setCount={setVanPhongChoThue} count={vanPhongChoThue} />
                <ButtonFilterComponent textName="Nhà liền kề" setCount={setNhaLienKe} count={nhaLienKe} />

                <TouchableOpacity
                    style=
                    {{
                        flexDirection: 'row',
                        padding: 10
                    }}
                >
                    <Text
                        style=
                        {{
                            marginHorizontal: 20
                        }}
                    >
                        Mục đích mua
                </Text>
                    <FontAwesome name="chevron-down" size={15} color="black" />
                </TouchableOpacity>
                <ButtonFilterComponent textName="Chọn tất cả" setCount={setChonTatCa4} count={chonTatCa4} />
                <ButtonFilterComponent textName="Đầu tư để bán" setCount={setDauTuDeBan} count={dauTuDeBan} />
                <ButtonFilterComponent textName="Cho tặng" setCount={setChoTang} count={choTang} />
                <ButtonFilterComponent textName="Đầu tư cho thuê" setCount={setDauTuChoThue} count={dauTuChoThue} />
                <ButtonFilterComponent textName="Mua để ở" setCount={setMuaDeO} count={muaDeO} />

                <TouchableOpacity
                    style=
                    {{
                        flexDirection: 'row',
                        padding: 10
                    }}
                >
                    <Text
                        style=
                        {{
                            marginHorizontal: 20
                        }}
                    >
                        Diện tích
                </Text>
                    <FontAwesome name="chevron-down" size={15} color="black" />
                </TouchableOpacity>
                <ButtonFilterComponent textName="Chọn tất cả" setCount={setChonTatCa5} count={chonTatCa5} />
                <ButtonFilterComponent textName="Từ 30m2 < 60m2" setCount={setTu30m} count={tu30m} />
                <ButtonFilterComponent textName="Từ 60 m2 < 80m2" setCount={setTu60m} count={tu60m} />
                <ButtonFilterComponent textName="Từ 80m2 < 100m2" setCount={setTu80m} count={tu80m} />
                <ButtonFilterComponent textName="Từ 100m2 < 120m2" setCount={setTu100m} count={tu100m} />
                <ButtonFilterComponent textName="> 120m2" setCount={setTu120m} count={tu120m} />
                <View
                    style=
                    {{
                        height: 50,
                        padding: 10,
                        backgroundColor: '#FFA400'
                    }}
                >
                    <Text
                        style=
                        {{
                            fontSize: 20,
                            color: 'white'
                        }}
                    >
                        Kết quả
                    </Text>
                </View>
                <View
                    style=
                    {{
                        height: 50,
                        padding: 10,

                    }}
                >
                    <Text
                        style=
                        {{
                            fontSize: 15,
                            color: 'black',
                            textAlign: 'center'
                        }}
                    >
                        Không có dữ liệu
                    </Text>
                </View>
            </ScrollView>

        </View>
    )
}
const style = StyleSheet.create({
    iconButtonStyle:
    {
        padding: 5,
        margin: 5
    },
    iconStyle:
    {
        marginRight: 5
    }
})
export default Rename;