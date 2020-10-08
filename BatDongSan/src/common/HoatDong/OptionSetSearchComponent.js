import React, { useState, useEffect } from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import StyleCommon from '../../theme/StyleCommon'
import {
    View,
    Modal,
    ScrollView,
    Text,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { color } from 'react-native-reanimated';
function OptionSetSearchComponent({ textName, visible, disable, required, value, setValue, value1, setValue1, dataOption, caret, option }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [modalVisible1, setModalVisible1] = useState(false)
    const IconCaretDown = () => {
        return (
            <FontAwesome name="caret-down" size={20} color="#4A4D53"
                style=
                {{
                    position: 'absolute',
                    right: 10,
                    bottom: 10
                }}
            />
        )
    }
    const cleanValue = () => {
        return (
            <TouchableOpacity
                style=
                {{
                    position: 'absolute',
                    right: 30,
                    bottom: 10
                }}
                onPress={() => {
                    setValue("")
                }}
            >
                <FontAwesome name="times" size={20} color="#4A4D53" />
            </TouchableOpacity>

        )
    }
    return (
        <View>
            {
                visible ?
                    (
                        <View>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={StyleCommon.textTitleInputStyle}>{textName}</Text>
                                {
                                    required ? (<Text style={StyleCommon.textRequiredTitleInputStyle}>*</Text>) : (null)
                                }
                            </View>
                            <TouchableOpacity
                                style=
                                {disable ? (
                                    required ? (
                                        value == null || value == "" ? StyleCommon.buttonRequiredStyle : StyleCommon.buttonStyle
                                    ) : (StyleCommon.buttonStyle)
                                ) : (StyleCommon.buttonDisableStyle)}
                                onPress={() => {
                                    setModalVisible(!modalVisible)
                                }}
                            >
                                <Text
                                >{value}</Text>
                                {caret ?
                                    <IconCaretDown /> : null
                                }
                                {value != null && value != "" ? (cleanValue()) : null}
                            </TouchableOpacity>
                            {
                                dataOption != null ? (<View>
                                    <Modal
                                        animationType="slide"
                                        transparent={true}
                                        visible={modalVisible}
                                        onRequestClose={() => {
                                        }}
                                    >
                                        <View style={StyleCommon.backgoundModal}>
                                            <View style=
                                                {{
                                                    margin: 20,
                                                    backgroundColor: "white",
                                                    width: "90%",
                                                    height: "70%",
                                                    alignItems: "center",
                                                    shadowColor: "#000",
                                                    shadowOffset:
                                                    {
                                                        width: 0,
                                                        height: 2
                                                    },
                                                    shadowOpacity: 0.25,
                                                    shadowRadius: 3.84,
                                                    elevation: 5,
                                                }}
                                            >
                                                <View
                                                    style={{ height: "100%", width: "100%" }}
                                                >
                                                    <TouchableOpacity
                                                        style={{
                                                            justifyContent: 'center',
                                                            height: 40,
                                                            width: "80%",
                                                            marginHorizontal: '10%',
                                                            flexDirection: 'row',
                                                            alignContent: 'center',
                                                            alignItems: 'center',
                                                        }}
                                                        onPress={() => {
                                                            setModalVisible1(!modalVisible1)
                                                        }}
                                                    >

                                                        <Text
                                                            style=
                                                            {{
                                                                color: 'black',
                                                                fontSize: 20,
                                                                textAlign: 'center',
                                                                marginRight: 10
                                                                // width: "80%"s
                                                            }}
                                                        >
                                                            {value1}

                                                        </Text>
                                                        <FontAwesome
                                                            name='caret-down' color="black" size={20}
                                                        />
                                                    </TouchableOpacity>
                                                    <View
                                                        style=
                                                        {{
                                                            backgroundColor: '#DEDEDE',
                                                            marginHorizontal: 10,
                                                            height: 50,
                                                            flexDirection: 'row',
                                                            marginTop: 5,
                                                            borderRadius: 3,
                                                            justifyContent: 'center',
                                                            alignItems: 'center'
                                                        }}
                                                    >
                                                        <FontAwesome
                                                            name="search" size={20} color="#A09EA0"
                                                        />
                                                        <TextInput
                                                            style=
                                                            {{
                                                                width: "80%",
                                                                height: "100%",
                                                                fontSize: 17
                                                            }}
                                                            placeholder="Tìm kiếm"
                                                        >
                                                        </TextInput>
                                                    </View>
                                                    <ScrollView>
                                                        {

                                                            dataOption.map((item, index) => (

                                                                <TouchableOpacity
                                                                    style={StyleCommon.buttonModalStyle1}
                                                                    onPress={() => {
                                                                        setValue(item)
                                                                        setModalVisible(!modalVisible)

                                                                    }}
                                                                >
                                                                    <Text
                                                                        style=
                                                                        {{

                                                                            marginLeft: 10,
                                                                            alignContent: 'center',
                                                                            fontSize: 20
                                                                        }}
                                                                    >
                                                                        {item}

                                                                    </Text>

                                                                </TouchableOpacity>
                                                            ))
                                                        }
                                                    </ScrollView>
                                                </View>
                                                <TouchableOpacity
                                                    style={{
                                                        position: "absolute",
                                                        top: 5,
                                                        right: 5
                                                    }}
                                                    onPress={() => {
                                                        setModalVisible(!modalVisible);
                                                    }}
                                                >
                                                    <FontAwesome
                                                        name="times" color="black" size={25}
                                                    />
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
                                        <View style={StyleCommon.backgoundModal}>
                                            <View style=
                                                {{
                                                    backgroundColor: "white",
                                                    width: "70%",
                                                    alignItems: "center",
                                                    shadowColor: "#000",
                                                    shadowOffset:
                                                    {
                                                        width: 0,
                                                        height: 2
                                                    },
                                                    shadowOpacity: 0.25,
                                                    shadowRadius: 3.84,
                                                    elevation: 5,
                                                }}
                                            >
                                                <View
                                                    style={{ width: "100%" }}
                                                >
                                                    <ScrollView>
                                                        {

                                                            option.map((item, index) => (

                                                                <TouchableOpacity
                                                                    style={StyleCommon.buttonModalStyle1}
                                                                    onPress={() => {
                                                                        setValue1(item)
                                                                        setModalVisible1(!modalVisible1)

                                                                    }}
                                                                >
                                                                    <Text
                                                                        style=
                                                                        {{
                                                                            marginLeft: 10,
                                                                            alignContent: 'center',
                                                                            fontSize: 20
                                                                        }}
                                                                    >
                                                                        {item}
                                                                    </Text>

                                                                </TouchableOpacity>
                                                            ))
                                                        }

                                                    </ScrollView>
                                                </View>
                                                <TouchableOpacity
                                                    style={StyleCommon.buttonClose}
                                                    onPress={() => {
                                                        setModalVisible1(!modalVisible1);
                                                    }}
                                                >
                                                    <Text style={StyleCommon.textStyleClose}>Đóng</Text>
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </Modal>
                                </View>) : null
                            }
                            {
                                required && value == "" ? (
                                    <Text style={StyleCommon.textRequird}>Trường này không được để trống</Text>
                                ) : null
                            }
                        </View>
                    ) : (null)
            }
        </View>
    )
}
export default OptionSetSearchComponent
