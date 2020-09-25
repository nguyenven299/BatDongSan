import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ScrollView, Image, ImageBackground,
    Modal
} from 'react-native';

const KhachHangTiemNang = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [typeActivity, setTypeActivity] = useState(1)

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
                            // navigation.navigate("CreateAgency")
                        }
                    }
                    style={{
                        padding: 5,
                        margin: 10
                    }}
                >
                    <FontAwesome
                        name="pen" size={20} color='white'
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
            style={{ backgroundColor: 'white' }}
        >
            <View
                style=
                {{

                    justifyContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: 0.5
                }}
            >
                <ImageBackground
                    style=
                    {{
                        marginTop: 10,
                        width: 160,
                        height: 160,

                    }}
                    imageStyle={{
                        borderRadius: 100,
                        borderWidth: 5,
                        borderColor: '#FFA605'
                    }}
                    source={require('../../../assest/BG.jpg')}
                >
                    <View
                        style=
                        {{
                            backgroundColor: 'white',
                            borderRadius: 50,
                            borderWidth: 1,
                            borderColor: '#FFA605',
                            position: 'absolute',
                            bottom: 10,
                            right: 10,
                            justifyContent: 'center',
                            alignItems: 'center',
                            padding: 7
                        }}
                    >
                        <TouchableOpacity>
                            <FontAwesome
                                name="image" size={20} color='#FFA605'
                                style={{

                                    backgroundColor: 'white',
                                    borderColor: '#FFA605',

                                }}
                            ></FontAwesome>
                        </TouchableOpacity>

                    </View>

                </ImageBackground>
                <Text
                    style=
                    {{
                        fontSize: 25,
                        textAlign: 'center',
                        margin: 10
                    }}
                >
                    Nguyên Vẹn
                    </Text>
            </View>
            <View
                style={style.viewStyle1}
            >
                <FontAwesome
                    name="phone-alt" size={20} color="#FFA400"
                />
                <Text
                    style={style.textStyle2}
                >
                    0941383163
          </Text>
            </View>
            <View
                style={style.viewStyle1}
            >
                <FontAwesome
                    name="envelope" size={20} color="#FFA400"
                />
                <Text
                    style={style.textStyle2}
                >

                </Text>
            </View>
            <View
                style={style.viewStyle1}
            >
                <FontAwesome
                    name="map-marker-alt" size={20} color="#FFA400"
                />
                <Text
                    style={style.textStyle2}
                >
                    Việt Nam
                    </Text>
            </View>
            <View
                style={style.viewStyle1}
            >
                <FontAwesome
                    name="mars" size={20} color="#FFA400"
                />
                <Text
                    style={style.textStyle2}
                >
                    Nam
                    </Text>
            </View>
            <View
                style=
                {{
                    height: 50,
                    backgroundColor: '#FFA400',
                    flexDirection: 'row',
                    alignItems: 'center',

                }}
            >
                <Text
                    style=
                    {{
                        color: 'white',
                        fontSize: 20,
                        marginLeft: 10
                    }}
                >
                    Lịch sử tương tác
</Text>
                <View
                    flexDirection="row"
                    style=
                    {{
                        position: "absolute",
                        right: 0
                    }}
                >
                    <FontAwesome
                        name="redo" size={20} color="white"
                        style=
                        {{
                            margin: 10
                        }}
                    />
                    <FontAwesome
                        name="plus" size={20} color="white"
                        style=
                        {{
                            margin: 10
                        }}
                    />
                </View>
            </View>
            <View
                style=
                {{

                    height: 50,

                    flexDirection: 'row',
                    alignContent: 'center',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    backgroundColor: 'white',
                    // borderBottomColor: 'black',
                    // borderBottomWidth: 2,
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 5,
                    },
                    shadowOpacity: 0.34,
                    shadowRadius: 6.27,
                    elevation: 10,
                }}
            >
                <TouchableOpacity
                    style=
                    {{
                        flex: 1,
                        borderBottomWidth: 2,
                        borderBottomColor: typeActivity == 1 ? 'yellow' : 'white',
                        height: 40

                    }}
                    onPress={
                        () => {
                            // setActivity("HanhDong")
                            setTypeActivity(1)
                        }}
                >
                    <Text
                        style=
                        {{
                            textAlign: 'center',
                            paddingVertical: 10,
                            fontSize: 15,
                            color: typeActivity == 1 ? '#FFA605' : 'black'


                        }}
                    >Phiếu tiếp khách</Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style=
                    {{
                        flex: 1,
                        borderBottomWidth: 2,
                        borderBottomColor: typeActivity == 2 ? 'yellow' : 'white',
                        height: 40

                    }}
                    onPress={
                        () => {
                            // setActivity("SinhNhat")
                            setTypeActivity(2)
                        }}
                >
                    <Text
                        style=
                        {{
                            textAlign: 'center',
                            paddingVertical: 10,
                            fontSize: 15,
                            color: typeActivity == 2 ? '#FFA605' : 'black'


                        }}
                    >Cuộc gọi</Text>
                </TouchableOpacity>

            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View style=
                    {{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: 'rgba(0,0,0,0.5)'
                    }}
                >
                    <View style=
                        {{
                            margin: 20,
                            backgroundColor: "white",
                            width: 350,
                            height: 100,
                            shadowColor: "#000",
                            shadowOffset:
                            {
                                width: 0,
                                height: 2
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                            borderRadius: 10
                        }}
                    >
                        <View
                            style=
                            {{
                                padding: 10,
                                height: 50,
                            }}
                        >

                            <TouchableOpacity>
                                <Text
                                    style=
                                    {{
                                        fontSize: 20,
                                        textAlign: 'center',
                                        marginTop: 10
                                    }}
                                >
                                    Khách hàng giao dịch
                               </Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity
                            style=
                            {{
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
                            <Text style=
                                {{
                                    color: "black",
                                    fontSize: 20,
                                    textAlign: 'center',
                                    marginLeft: 15,
                                    marginTop: 5,
                                    marginBottom: 5,

                                }}
                            >Đóng</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}
const style = StyleSheet.create({
    viewStyle:
    {
        flexDirection: 'row',
        margin: 10
    },
    textStyle:
    {
        fontSize: 18,
        margin: 5,
        marginLeft: 10,
    },
    textStyle1:
    {
        fontSize: 18,
        margin: 5,

        fontWeight: 'bold'
    },
    viewStyle1:
    {
        margin: 5,
        flexDirection: 'row'
    },
    textStyle2:
    {
        fontSize: 15,
        color: 'black',
        marginLeft: 10
    }
})
export default KhachHangTiemNang;
