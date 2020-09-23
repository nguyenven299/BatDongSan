import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import ModalComponent from '../../common/ModalComponent'
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
const Sale = ({ navigation }) => {
    const [Model, setModel] = useState("Testing-DB-DCho-2209")
    const [modalVisible, setModalVisible] = useState(false);
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
                        }
                    }
                    style={style.Touch}
                >
                    <FontAwesome
                        name="tasks" size={25} color='white'

                    ></FontAwesome>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress=
                    {
                        () => {
                        }
                    }
                    style={style.Touch}

                >
                    <FontAwesome
                        name="image" size={25} color='white'

                    ></FontAwesome>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress=
                    {
                        () => {
                        }
                    }
                    style={style.Touch}

                >

                    <FontAwesome
                        name="calendar" size={25} color='white'


                    ></FontAwesome>
                </TouchableOpacity>

            </View>

        ),
        headerTitle: () =>
            (
                <TouchableOpacity
                    style=
                    {{
                        width: 300,
                        height: 70,
                        flexDirection: 'row'
                    }}
                    onPress={
                        () => {
                            setModalVisible(true)

                        }}
                >
                    <ModalComponent
                        visible={modalVisible} setModalVisible1={setModalVisible} setModel={setModel} Mode={"BanHang"}
                    />
                    <FontAwesome name="caret-down" size={20} color="#9B999B"
                        style=
                        {{
                            marginLeft: 20,
                            marginTop: 25,
                            color: 'white'
                        }}
                    />
                    <Text
                        style=
                        {{
                            fontSize: 20,
                            margin: 20,
                            color: 'white'
                        }}
                    >
                        {Model}
                    </Text>

                </TouchableOpacity>
            )
    });
    return (
        <View
            style=
            {{
                flex: 1,
            }}
        >
            <View
                style=
                {{
                    flexDirection: 'row',
                    borderBottomWidth: 0.5,

                }}
            >
                <TouchableOpacity
                    style=
                    {{
                        margin: 10
                    }}
                >
                    <FontAwesome
                        name='filter' size={30} color='#FFA605'
                    />
                </TouchableOpacity>
                <View
                    style=
                    {{
                        backgroundColor: '#C5C3C5',
                        width: 230,
                        height: 50,
                        flexDirection: 'row'
                    }}
                >
                    <FontAwesome
                        name="search" size={20} color="#A09EA0"
                        style=
                        {{
                            margin: 15
                        }}
                    />

                    <TextInput
                        style=
                        {{
                            width: 170,
                            height: 50,
                            fontSize: 17
                        }}
                        placeholder="Tìm kiếm"
                    >

                    </TextInput>
                </View>
                <TouchableOpacity
                    style=
                    {{
                        width: 25,
                        height: 25,
                        flexDirection: 'row',
                        marginHorizontal: 2,
                        marginVertical: 10
                    }}
                >
                    <View>
                        <Text
                            style=
                            {{
                                backgroundColor: "#FF1900",
                                width: 10,
                                height: 10,
                                margin: 2
                            }}
                        ></Text>
                        <Text
                            style=
                            {{
                                backgroundColor: "#FFA605",
                                width: 10,
                                height: 10,
                                margin: 2
                            }}
                        ></Text>
                    </View>
                    <View>
                        <Text
                            style=
                            {{
                                backgroundColor: "#FFA605",
                                width: 10,
                                height: 10,
                                margin: 2
                            }}
                        ></Text>
                        <Text
                            style=
                            {{
                                backgroundColor: "#FF1900",
                                width: 10,
                                height: 10,
                                margin: 2
                            }}
                        ></Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style=
                    {{
                        width: 25,
                        height: 25,
                        backgroundColor: "#006C00",
                        marginHorizontal: 2,
                        marginVertical: 12
                    }}
                >

                </TouchableOpacity>
                <TouchableOpacity
                    style=
                    {{
                        width: 25,
                        height: 25,
                        backgroundColor: "#000FFF",
                        marginHorizontal: 2,
                        marginVertical: 12
                    }}
                >

                </TouchableOpacity>
                <TouchableOpacity
                    style=
                    {{
                        width: 25,
                        height: 25,
                        backgroundColor: "#FFA400",
                        marginHorizontal: 2,
                        marginVertical: 12
                    }}
                >

                </TouchableOpacity>
                <TouchableOpacity
                    style=
                    {{
                        width: 25,
                        height: 25,
                        backgroundColor: "#FF1900",
                        marginHorizontal: 2,
                        marginVertical: 12
                    }}
                >

                </TouchableOpacity>
            </View>
            <TouchableOpacity
                style=
                {{
                    backgroundColor: '#FFA605',
                    padding: 13,
                    position: 'absolute',
                    width: 60,
                    height: 60,
                    borderRadius: 40,
                    right: 10,
                    bottom: 20
                }}
                onPress={
                    () => {
                        navigation.navigate("CreateSale")
                    }}
            >
                <FontAwesome
                    name='plus' size={40} color="white"
                />
            </TouchableOpacity>
            <TouchableOpacity
                style=
                {{
                    backgroundColor: '#FFA605',
                    padding: 10,
                    position: 'absolute',
                    width: 60,
                    height: 60,
                    borderRadius: 40,
                    left: 10,
                    bottom: 20
                }}
            >
                <FontAwesome
                    name='shopping-cart' size={40} color="white"
                />
            </TouchableOpacity>

        </View>
    )
}
const style = StyleSheet.create({
    Touch:
    {
        margin: 10
    },
    backgoundModal:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    textStyle:
    {
        color: "black",
        fontSize: 20,
        marginLeft: 15,
        marginTop: 20
    },
    textStyleClose:
    {
        color: "black",
        fontSize: 20,
        textAlign: "center"
    },
    buttonClose:
    {
        backgroundColor: "#F0EEF0",
        width: 350,
        padding: 10,
        marginTop: 20,
        elevation: 2,

    },
})
export default Sale;