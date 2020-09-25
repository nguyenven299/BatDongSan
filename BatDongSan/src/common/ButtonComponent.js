import React, { useState } from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"

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

function InputTextComponent({ textName }) {
    const [Customer, setCustomer] = useState("Khách hàng tiềm năng");
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [modalVisible3, setModalVisible3] = useState(false);

    const [List, setList] = useState([]);
    const [List1, setList1] = useState([]);
    const IconCheck = () => {
        return (
            <FontAwesome
                name='check' color='#C5C3C5' size={20}
                style=
                {{
                    marginTop: 15
                }}
            />
        )
    }

    const IconCaretDown = () => {
        return (
            <FontAwesome name="caret-down" size={20} color="#9B999B"
                style=
                {{
                    position: 'absolute',
                    right: 10,
                    bottom: 10

                }}
            />
        )
    }

    return (
        <View

        >
            <Text
                style=
                {{
                    margin: 10,
                    fontSize: 17,
                    marginLeft: 20
                }}
            >
                {textName}
            </Text>
            <TouchableOpacity
                style=
                {{
                    width: "90%",
                    height: 40,
                    backgroundColor: 'white',
                    borderRadius: 10,
                    borderWidth: 0.5,
                    borderColor: '#9B999B',
                    marginTop: 10,
                    paddingLeft: 20,
                    paddingRight: 30,
                    marginHorizontal: 20
                }}
                onPress={
                    () => {
                        switch (textName) {
                            case "Khách hàng":
                                setModalVisible(true);

                                setList([{
                                    Ten: "Khách hàng tiềm năng",
                                    chucNang: () => {
                                        setCustomer("Khách hàng tiềm năng")
                                        setModalVisible1(!modalVisible1);
                                    }
                                },
                                {
                                    Ten: "Khách hàng phát sinh",
                                    chucNang: () => {
                                        setCustomer("Khách hàng phát sinh")
                                        setModalVisible1(!modalVisible1);

                                    }
                                },
                                {
                                    Ten: "Khách hàng giao dịch",
                                    chucNang: () => {
                                        setCustomer("Khách hàng giao dịch")
                                        setModalVisible1(!modalVisible1);

                                    }
                                },
                                {
                                    Ten: "Khách hàng đồng sở hữu",
                                    chucNang: () => {
                                        setCustomer("Khách hàng đồng sở hữu")
                                        setModalVisible1(!modalVisible1);

                                    }
                                },])
                                break;
                            case "Đánh giá mức độ tiềm năng":
                                setModalVisible2(true)
                                setList1([{
                                    Ten: "A: Rất tiềm năng",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "B: Tiềm năng",
                                    chucNang: () => {
                                        alert(123)

                                    }
                                },
                                {
                                    Ten: "C: Quan tâm mức trung bình",
                                    chucNang: () => {

                                    }
                                },
                                {
                                    Ten: "D: Không quan tâm",
                                    chucNang: () => {

                                    }
                                },])
                                break;
                            case "Mức thu nhập":
                                setModalVisible2(true)
                                setList1([{
                                    Ten: "< 5 triệu",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Từ 5 triệu < 10 triệu",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Từ 10 triệu < 20 triệu",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Từ 20 triệu < 30 triệu",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Từ 30 triệu < 50 triệu",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "> 50 triệu",
                                    chucNang: () => {
                                    }
                                },
                                ])
                                break;
                            case "Loại hình sản phẩm":
                                setModalVisible2(true)
                                setList1([{
                                    Ten: "Đất nền",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Căn hộ",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Condotel",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Shophouse",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Biệt thự",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Biệt thự nghỉ dưỡng",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Văn phòng cho thuê",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Nhà liền kề",
                                    chucNang: () => {
                                    }
                                },
                                ])
                                break;
                            case "Mục đích mua":
                                setModalVisible2(true)
                                setList1([{
                                    Ten: "Đầu tư để bán",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Cho tặng",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Đầu tư cho thuê",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Mua để ở",
                                    chucNang: () => {
                                    }
                                },

                                ])
                                break;
                            case "Khoảng giá":
                                setModalVisible2(true)
                                setList1([{
                                    Ten: "< 500 triệu",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Từ 500 triệu < 1 tỷ",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Từ 1 tỷ < 2 tỷ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Từ 2 tỷ < 3 tỷ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Từ 3 tỷ <  tỷ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Từ 4 tỷ < 5 tỷ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Từ 5 tỷ < 6 tỷ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Từ 6 tỷ < 7 tỷ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Từ 7 tỷ < 8 tỷ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Từ 9 tỷ < 10 tỷ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: " > 10 tỷ",
                                    chucNang: () => {
                                    }
                                },

                                ])
                                break;
                            case "Hướng":
                                setModalVisible2(true)
                                setList1([{
                                    Ten: "Đông",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Tây",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Nam",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Bắc",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Đông - Nam",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Đông - Bắc",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Tây - Nam",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Tây -Bắc",
                                    chucNang: () => {
                                    }
                                },
                                ])
                                break;
                            case "Tổng diện tích":
                                setModalVisible2(true)
                                setList1([{
                                    Ten: "Từ 60m2 < 60m2",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Từ 60m2 < 80m2",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Từ 80m2 < 100m2",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "100m2 < 120m2",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: ">120m2",
                                    chucNang: () => {
                                    }
                                },
                                ])
                                break;
                            case "Thời gian cuộc gọi":
                                setModalVisible2(true)
                                setList1([{
                                    Ten: "1 phút",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "15 phút",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "30 phút",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "45 phút",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "1 giờ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "1.5 giờ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "2 giờ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "2.5 giờ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "3 giờ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "3.5 giờ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "4 giờ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "4.5 giờ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "5 giờ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "5.5 giờ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "6 giờ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "6.5 giờ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "7 giờ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "7.5 giờ",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "8 giờ",
                                    chucNang: () => {
                                    }
                                },
                                ])
                                break;
                            case "Loại khách hàng":
                                setModalVisible2(true)
                                setList1([{
                                    Ten: "Cá nhân",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Doanh nghiệp",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                ])
                                break;
                            case "Phân loại khách hàng":
                                setModalVisible2(true)
                                setList1([{
                                    Ten: "Khách hàng tiềm năng",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Khách hàng phát sinh",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                ])
                                break;
                            case "Giới tính":
                                setModalVisible2(true)
                                setList1([{
                                    Ten: "Nam",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Nữ",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Khác",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                ])
                                break;
                            case "Dân tộc":
                                setModalVisible3(true)
                                setList1([{
                                    Ten: "Ba-na",
                                    chucNang: () => {
                                    }
                                },
                                {
                                    Ten: "Bố Y",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Brâu",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Bru-Vân Kiều",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Cao Lan",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Chăm",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Chơ-ro",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Chu-ru",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Chứt",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Co",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Cờ lao",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Cơ-ho",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Cống",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Cơ-tu",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Dao",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Dáy",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Ê-đê",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Gia-Rai",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Giáy",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Giế-Triêng",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Hà Nhì",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Hmông",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Hoa",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Hrê",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Khác",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Kháng",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Khơ-me",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Khơmú",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Kinh",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "La Ha",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "La Hủ",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "La-chí",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Lào",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "LôLô",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                }, {
                                    Ten: "Lự",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Mạ",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Mảng",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Mnông",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Mường",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Ngái",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Ngạn",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Nùng",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Ơ-đu",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Pè Thẻn",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Phù Lá",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Pu Píeo",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Ra-glay",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Rơ-măm",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Sán Cháy",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Sán Dìu",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Si La",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Ta-ôi",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Tày",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Thái",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Thổ",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Xinh-mun",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "Xơ-đăng",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                {
                                    Ten: "X'tiêng",
                                    chucNang: () => {
                                        alert(123)
                                    }
                                },
                                ])
                                break;
                        }

                    }

                }
            >
                <IconCaretDown />
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}

            >
                <View style={style.backgoundModal}>
                    <View style=
                        {{
                            margin: 20,
                            backgroundColor: "white",
                            width: 350,
                            height: 400,
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
                                    setModalVisible1(true)
                                }}
                        >
                            <Text
                                style=
                                {{
                                    textAlign: 'center',
                                    fontSize: 17

                                }}
                            >
                                {Customer}
                            </Text>
                            <IconCaretDown />
                        </TouchableOpacity>
                        <View
                            style=
                            {{
                                flexDirection: 'row',
                                backgroundColor: '#DEDDDE',
                                alignItems: 'center',

                            }}
                        >
                            <FontAwesome name="search" size={15} color="#9B999B"
                                style=
                                {{
                                    marginLeft: 20

                                }}
                            />
                            <TextInput
                                style=
                                {{
                                    width: 300,
                                    borderRadius: 3,
                                    paddingLeft: 10,
                                    padding: 10,
                                    fontSize: 20
                                }}
                                placeholder="Tiềm kiếm"
                            >

                            </TextInput>

                        </View>
                        <View
                            style=
                            {{
                                height: 200,
                                width: 300
                            }}
                        >
                            <ReceiverList></ReceiverList>

                        </View>

                        <TouchableOpacity
                            style={style.buttonClose}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={style.textStyleClose}>Đóng</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible1}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}

            >
                <View style={style.backgoundModal}>
                    <View style=
                        {{
                            margin: 20,
                            backgroundColor: "white",
                            width: 350,
                            height: 250,
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
                        {

                            List.map((item, index) => (
                                <TouchableOpacity
                                    style={{}}
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
                        <TouchableOpacity
                            style={style.buttonClose}
                            onPress={() => {
                                setModalVisible1(!modalVisible1);
                            }}
                        >
                            <Text style={style.textStyleClose}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible2}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}

            >
                <View style={style.backgoundModal}>
                    <View style=
                        {{
                            margin: 20,
                            backgroundColor: "white",
                            width: 350,
                            height: 350,
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
                        <Text
                            style=
                            {{
                                fontSize: 20,
                                margin: 10,
                                borderBottomWidth: 1,
                                width: 350,
                                padding: 10,
                                borderBottomColor: '#FFA605'
                            }}>
                            {textName}
                        </Text>
                        <ScrollView>
                            {
                                List1.map((item, index) => (
                                    <TouchableOpacity
                                        style={style.buttonStyle}
                                        onPress={() => {
                                            item.chucNang()
                                        }}
                                        key={index}
                                    >
                                        <IconCheck />
                                        <Text style={style.textStyle1}>
                                            {item.Ten}
                                        </Text>
                                    </TouchableOpacity>
                                ))
                            }
                        </ScrollView>

                        <TouchableOpacity
                            style={style.buttonClose}
                            onPress={() => {
                                setModalVisible2(!modalVisible2);
                            }}
                        >
                            <Text style={style.textStyleClose}>Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible3}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}

            >
                <View style={style.backgoundModal}>
                    <View style=
                        {{
                            margin: 20,
                            backgroundColor: "white",
                            width: 350,
                            height: 500,
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
                                    setModalVisible3(true)
                                }}
                        >
                            <Text
                                style=
                                {{
                                    textAlign: 'center',
                                    fontSize: 17

                                }}
                            >
                                Dân tộc
                            </Text>
                            <IconCaretDown />
                        </TouchableOpacity>
                        <View
                            style=
                            {{
                                flexDirection: 'row',
                                backgroundColor: '#DEDDDE',
                                alignItems: 'center',

                            }}
                        >
                            <FontAwesome name="search" size={15} color="#9B999B"
                                style=
                                {{
                                    marginLeft: 20

                                }}
                            />
                            <TextInput
                                style=
                                {{
                                    width: 300,
                                    borderRadius: 3,
                                    paddingLeft: 10,
                                    padding: 10,
                                    fontSize: 20
                                }}
                                placeholder="Tiềm kiếm"
                            >

                            </TextInput>

                        </View>
                        <View
                            style=
                            {{
                                height: 350,
                                width: 300
                            }}
                        >
                            <ScrollView>
                                {
                                    List1.map((item, index) => (
                                        <TouchableOpacity
                                            style={style.buttonStyle}
                                            onPress={() => {
                                                item.chucNang()
                                            }}
                                            key={index}
                                        >
                                            <IconCheck />
                                            <Text style={style.textStyle}>
                                                {item.Ten}
                                            </Text>
                                        </TouchableOpacity>
                                    ))
                                }
                            </ScrollView>

                        </View>

                        <TouchableOpacity
                            style={style.buttonClose}
                            onPress={() => {
                                setModalVisible3(!modalVisible3);
                            }}
                        >
                            <Text style={style.textStyleClose}>Đóng</Text>

                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>

    )
}
const style = StyleSheet.create({

    textStyle:
    {
        color: "black",
        fontSize: 17,
        marginLeft: 15,
        marginTop: 15
    },
    textStyle1:
    {
        color: "black",
        fontSize: 15,
        fontFamily: 'bold',
        marginLeft: 15,
        fontWeight: 'bold',

    },
    modelViewStyle:
    {
        margin: 20,
        backgroundColor: "white",
        width: 350,
        height: 350,
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
    },
    backgoundModal:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    buttonClose:
    {
        backgroundColor: "#F0EEF0",
        width: 350,
        padding: 10,
        marginTop: 20,
        elevation: 2,

    },
    textStyleClose:
    {
        color: "black",
        fontSize: 20,
        textAlign: "center"
    },
    buttonStyle:
    {
        backgroundColor: "#FBFAFB",
        width: 300,
        padding: 10,
        marginTop: 10,
        borderRadius: 2,
        flexDirection: 'row',
        marginHorizontal: 20
    },
})
export default InputTextComponent
