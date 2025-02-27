import React, { useState, useEffect } from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import StyleCommon from '../../theme/StyleCommon'
import {
    View,
    Modal,
    ScrollView,
    Text,
    TouchableOpacity,
} from 'react-native';
import { color } from 'react-native-reanimated';
function OptionSetComponent({ textName, visible, disable, required, value, setValue, dataOption, caret }) {
    const [modalVisible, setModalVisible] = useState(false)
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
                                            Alert.alert("Modal has been closed.");
                                        }}
                                    >
                                        <View style={StyleCommon.backgoundModal}>
                                            <View style=
                                                {{
                                                    backgroundColor: "white",
                                                    width: "70%",
                                                    height: "50%",
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
                                                    style={{ height: "85%", width: "100%" }}
                                                >
                                                    <ScrollView>
                                                        {

                                                            dataOption.map((item, index) => (

                                                                <TouchableOpacity
                                                                    style={StyleCommon.buttonModalStyle}
                                                                    onPress={() => {
                                                                        setValue(item)
                                                                        setModalVisible(!modalVisible)

                                                                    }}
                                                                >
                                                                    <FontAwesome
                                                                        name='check' color={item == value ? 'orange' : "#C5C3C5"} size={20} />
                                                                    <Text
                                                                        style=
                                                                        {{
                                                                            fontWeight: 'bold',
                                                                            marginLeft: 10,
                                                                            alignContent: 'center'
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
                                                        setModalVisible(!modalVisible);
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
export default OptionSetComponent
