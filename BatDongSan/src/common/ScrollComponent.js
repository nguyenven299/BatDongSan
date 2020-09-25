import React from 'react'
import {
    TextInput, View, Text, TouchableOpacity, StyleSheet, ScrollView
} from 'react-native';

const MultiLineTextInputComponent = ({ textName, navigation }) => {

    var Customer = ""
    switch (textName) {
        case "Bán hàng":
            Customer = [
                {

                    Ten: "Đề xuất bán sỉ",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("DeXuatBanSi")
                    }
                },
                {

                    Ten: "SP đang Booking",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("SPDangBooking")
                    }
                },
                {

                    Ten: "Phiếu đặt chỗ",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("PhieuDatCho")
                    }
                },
                {

                    Ten: "Phiếu đặt cọc",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("PhieuDatCoc")
                    }
                },
                {

                    Ten: "Yêu cầu hủy đặt cọc",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("YeuCauHuyDatCoc")
                    }
                }
            ]
            break;
        case "Góp vốn":
            Customer = [
                {

                    Ten: "Đề xuất góp vốn nội bộ",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("DeXuatGopVonNoiBo")
                    }
                },
                {

                    Ten: "HĐ góp vốn nội bộ",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("HoatDongGopVonNoiBo")

                    }
                },
            ]
            break;
        case "Môi giới":
            Customer = [
                {
                    Ten: "Yêu cầu môi giới",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("YeuCauMoiGioi")
                    }
                },
                {

                    Ten: "Phiếu đặt cọc(72h)",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate('PhieuDatCoc72h')
                    }
                },
                {

                    Ten: "Phiếu đặt cọc 3 bên",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate('PhieuCoc3Ben')
                    }
                },
            ]
            break;
        case "Hợp đồng":
            Customer = [
                {

                    Ten: "HĐ nguyên tắc",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate('HDNguyenTac')
                    }
                },
                {

                    Ten: "HĐ vay",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("HDVay")
                    }
                },
                {

                    Ten: "HĐ mua bán",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("HDMuaBan")
                    }
                },
                {

                    Ten: "HĐ dịch vụ",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("HDDichVu")
                    }
                },
            ]
            break;
        case "Tiện ích":
            Customer = [
                {

                    Ten: "Doanh thu hoa hồng",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("DoanhThuHoaHong")
                    }
                },
                {

                    Ten: "SP khóa",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("SPKhoa")
                    }
                },
                {

                    Ten: "SP yêu thích",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("SanPhamYeuThich")
                    }
                },
                {

                    Ten: "Văn bản đặc biệt",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("VanBanDacBiet")
                    }
                },
                {

                    Ten: "Tài khoản",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("TaiKhoan")
                    }
                },
                {

                    Ten: "Yêu cầu book chéo",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("YeuCauBookCheo")
                    }
                },
            ]
            break;
        default:

            break;
    }
    return (
        <View

        >
            <Text
                style={style.textStyleTitle}
            >
                {textName}
            </Text>
            <ScrollView
                horizontal={true}
            >
                {
                    Customer.map((item, index) => (
                        <TouchableOpacity
                            style={{
                                borderBottomWidth: 0.5,

                            }}
                            onPress={() => {
                                item.chucNang()
                            }}
                            key={index}
                        >
                            <Text style={style.textStyle}>
                                {item.Ten}
                            </Text>

                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </View>

    )
}
const style = StyleSheet.create({
    Touch:
    {
        margin: 10
    },

    textStyle:
    {
        width: 80,
        color: "black",
        fontSize: 20,
        marginLeft: 15,
        marginTop: 20,
        marginBottom: 10
    },
    textMoreStyle:
    {
        color: "#A09EA0",
        fontSize: 15,
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 5
    },
    textStyleTitle:
    {
        fontSize: 25,
        margin: 10,
        textDecorationLine: 'underline',
        textDecorationColor: '#FFA605',
        color: '#FFA605'
    }
})
export default MultiLineTextInputComponent