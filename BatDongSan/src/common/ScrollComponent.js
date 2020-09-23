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
                        navigation.navigate("Wholesale")
                    }
                },
                {

                    Ten: "SP đang Booking",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("Booking")
                    }
                },
                {

                    Ten: "Phiếu đặt chỗ",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("Reservations")
                    }
                },
                {

                    Ten: "Phiếu đặt cọc",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("Deposit")
                    }
                },
                {

                    Ten: "Yêu cầu đặt cọc",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("CancelDeposit")
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
                        navigation.navigate("Offer")
                    }
                },
                {

                    Ten: "HĐ góp vốn nội bộ",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        navigation.navigate("Action")

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
                        alert('123')
                    }
                },
                {

                    Ten: "Phiếu đặt cọc(72h)",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        alert('456')
                    }
                },
                {

                    Ten: "Phiếu đặt cọc 3 bên",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        alert('456')
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
                        alert('123')
                    }
                },
                {

                    Ten: "HĐ vay",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        alert('456')
                    }
                },
                {

                    Ten: "HĐ mua bán",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        alert('456')
                    }
                },
                {

                    Ten: "HĐ dịch vụ",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        alert('456')
                    }
                },
            ]
            break;
        case "Tiện ích":
            Customer = [
                {

                    Ten: "Doanh thi hoa hồng",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        alert('123')
                    }
                },
                {

                    Ten: "SP khóa",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        alert('456')
                    }
                },
                {

                    Ten: "SP yêu thích",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        alert('456')
                    }
                },
                {

                    Ten: "Văn bản đặc biệt",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        alert('456')
                    }
                },
                {

                    Ten: "Tài khoản",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        alert('456')
                    }
                },
                {

                    Ten: "Yêu cầu book chéo",
                    More: 'Mua sỉ bán lẻ',
                    chucNang: () => {
                        alert('456')
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