import React, { useState } from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import StyleCommon from '../../theme/StyleCommon'
import ModalCuocGoiComponent from './ModalCuocGoiComponent'
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
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
                            </TouchableOpacity>
                            {
                                dataOption != null ? (<ModalCuocGoiComponent
                                    setModalVisible={setModalVisible}
                                    visible={modalVisible}
                                    setValue={setValue}
                                    value={value}
                                    dataOption={dataOption}
                                />) : null
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
