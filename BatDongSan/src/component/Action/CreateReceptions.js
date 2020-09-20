import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import Action from './Navigation/Action.js'
import BirthDate from './Navigation/BirthDate'
import ReceiverList from './Modal/ReceiverList'
import TimeList from './Modal/TimeList'
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
const MakeACall = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const [User, setUser] = useState(1);

    var Customer = ""
    switch (User) {
        case 1:
            Customer = "Khách hàng tiềm năng"
            break;
        case 2:
            Customer = "Khách hàng phát sinh"
            break;
        case 3:
            Customer = "Khách hàng giao dịch"
            break;
        case 4:
            Customer = "Khách hàng đồng sở hữu"
            break;
        default:
            Customer = "Khách hàng tiềm năng"
            break;
    }
    return (
        <View
            style=
            {{
                justifyContent: 'center',
                flexDirection: 'column',
                backgroundColor: 'white'
            }}
        >
            <ScrollView>
                <Text
                    style={style.text}
                >
                    Tiêu đề
                    </Text>
                <TextInput
                    style={style.textInput}
                >

                </TextInput>
                <Text
                    style={style.text}
                >
                    Khách hàng
                    </Text>
                <TouchableOpacity
                    style={style.textInput}
                    onPress={
                        () => {
                            setModalVisible(true);
                        }

                    }
                >
                    <FontAwesome name="caret-down" size={20} color="#9B999B"
                        style=
                        {{
                            position: 'absolute',
                            right: 10,
                            bottom: 10

                        }}
                    />
                    <Text
                        style=
                        {{
                            position: 'absolute',
                            left: 10,
                            bottom: 10
                        }}
                    >
                        tẽt
                    </Text>
                </TouchableOpacity>
                <Text
                    style={style.text}
                >
                    Địa điểm
                    </Text>
                <TextInput
                    style={style.textInput}
                >

                </TextInput>
                <Text
                    style={style.text}
                >
                    Ngày bắt đầu dự kiến
                     </Text>
                <TextInput
                    style={style.textInput}
                >

                </TextInput>
                <Text
                    style={style.text}
                >
                    Ngày kết thúc dự kiến
                     </Text>
                <TextInput
                    style={style.textInput}
                >

                </TextInput>
                <Text
                    style={style.text}
                >
                    Khoản thời gian dự kiến
                      </Text>
                <TextInput
                    style={style.textInput}
                >

                </TextInput>
                <Text
                    style={style.text}
                >
                    Ngày bắt đầu thực tế
                      </Text>
                <TouchableOpacity
                    style={style.textInput}

                >

                </TouchableOpacity>
                <Text
                    style={style.text}
                >
                    Khoảng thời gian thực tế
                     </Text>
                <TextInput
                    style={style.textInput}
                >

                </TextInput>
                <Text
                    style={style.text}
                >
                    Đánh giá mức độ tiềm năng
                      </Text>
                <TouchableOpacity
                    style={style.textInput}
                    onPress={
                        () => {
                            setModalVisible1(true);
                        }

                    }
                >

                </TouchableOpacity>
                <Text
                    style={style.text}
                >
                    Mức thu nhập
                      </Text>
                <TextInput
                    style={style.textInput}
                >

                </TextInput>
                <Text
                    style={style.text}
                >
                    Loại hình sản phẩm
                      </Text>
                <TextInput
                    style={style.textInput}
                >

                </TextInput>
                <Text
                    style={style.text}
                >
                    Mục đích mua
                      </Text>
                <TextInput
                    style={style.textInput}
                >

                </TextInput>
                <Text
                    style={style.text}
                >
                    Khoảng giá
                      </Text>
                <TextInput
                    style={style.textInput}
                >

                </TextInput>
                <Text
                    style={style.text}
                >
                    Hướng
                      </Text>
                <TextInput
                    style={style.textInput}
                >

                </TextInput>
                <Text
                    style={style.text}
                >
                    Tổng diện tích
                      </Text>
                <TextInput
                    style={style.textInput}
                >

                </TextInput>
                <Text
                    style={style.text}
                >
                    Quan tâm khác
                      </Text>
                <TextInput
                    style={style.textInput}
                >

                </TextInput>
                <Text
                    style={style.text}
                >
                    Ý kiến đóng góp
                      </Text>
                <TextInput
                    style={style.textInput}
                >

                </TextInput>
            </ScrollView>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}

            >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }}>
                    <View style=
                        {{
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
                            <FontAwesome name="caret-down" size={20} color="#9B999B"
                                style=
                                {{
                                    position: 'absolute',
                                    right: 10,
                                    bottom: 10

                                }}
                            />
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
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible1}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}

            >
                <View style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: 'rgba(0,0,0,0.5)'
                }}>
                    <View style=
                        {{
                            margin: 20,
                            backgroundColor: "white",
                            width: 350,
                            height: 300,
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
                        <Text>
                            Đánh giá mức độ tiềm năng
                     </Text>

                        <TouchableOpacity
                            style={{
                                backgroundColor: "#F0EEF0",
                                width: 350,
                                padding: 10,
                                marginTop: 20,
                                elevation: 2,
                            }}
                            onPress={() => {
                                setModalVisible1(!modalVisible1);
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
const style = StyleSheet.create({
    text:
    {
        margin: 10,
        fontSize: 17,
        marginLeft: 20
    },
    textInput:
    {
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
    }
})

export default MakeACall;