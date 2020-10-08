import React, { useState, useReducer } from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import StyleCommon from '../../theme/StyleCommon'
import ModalCuocGoiComponent from './ModalCuocGoiComponent'
import {
    View,
    Text,
    Modal,
    TouchableOpacity,
    ScrollView
} from 'react-native';
function MultiOptionSetComponent({ textName, visible, disable, required, value, setValue, dataOption, caret }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [initArray, setInitArray] = useState([])
    const [, forceUpdate] = useReducer(x => x + 1, 0); //re render
    var arr = []
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


    if (value != "" && value != null) {
        value.map((item, index) => {
            if (index != value.length - 1) {
                arr.push(item + "; ")
            }
            else {
                arr.push(item)
            }
        })
    }
    else { null }

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
                                        value == null || value == [] ? StyleCommon.buttonRequiredStyle : StyleCommon.buttonStyle
                                    ) : (StyleCommon.buttonStyle)
                                ) : (StyleCommon.buttonDisableStyle)}
                                onPress={() => {
                                    setModalVisible(!modalVisible)

                                }}
                            >
                                <Text>
                                    {arr}
                                </Text>

                                {caret ?
                                    <IconCaretDown /> : null
                                }
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
                                                    width: 300,
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
                                                    elevation: 5,
                                                }}
                                            >
                                                <View
                                                    style={{ height: 300, width: 300 }}
                                                >
                                                    <ScrollView>
                                                        {
                                                            dataOption.map((item, index) => (

                                                                <TouchableOpacity
                                                                    style={StyleCommon.buttonModalStyle}
                                                                    onPress={() => {
                                                                        // setValue(item)
                                                                        forceUpdate()
                                                                        if (initArray.indexOf(item) == -1) { //indexOf lấy phần tử trong mảng ở vị trí, nếu ko có thì -1
                                                                            initArray.push(item)
                                                                        }
                                                                        else {
                                                                            initArray.splice(initArray.indexOf(item), 1) // spice xóa phần tử ở vị trí( phần tử, vị trí)
                                                                        }
                                                                        setInitArray(initArray)
                                                                        setValue(initArray)

                                                                    }}

                                                                >
                                                                    <FontAwesome
                                                                        name='check' color={initArray.indexOf(item) != -1 ? 'orange' : "#C5C3C5"} size={20} />
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
                                required && value == [] ? (
                                    <Text style={StyleCommon.textRequird}>Trường này không được để trống</Text>
                                ) : null
                            }
                        </View>
                    ) : (null)
            }
        </View>
    )
}
export default MultiOptionSetComponent
