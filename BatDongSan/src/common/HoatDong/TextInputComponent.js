import React, { useState } from 'react'
import {
    TextInput, View, Text
} from 'react-native';
import StyleCommon from '../../theme/StyleCommon'
function InputCuocGoiComponent({ textName, visible, disable, required, value, setValue }) {
    return (
        <View>
            {
                visible ? (
                    <View>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={StyleCommon.textTitleInputStyle}>{textName}</Text>
                            {
                                required ? (
                                    <Text style={StyleCommon.textRequiredTitleInputStyle}>*</Text>
                                ) : (null)
                            }
                        </View>
                        <TextInput
                            style=
                            {
                                disable ? (
                                    required ? (
                                        value == null || value == "" ? StyleCommon.inputRequiredStyle : StyleCommon.inputStyle
                                    ) : (StyleCommon.inputStyle)
                                ) : (StyleCommon.inputDisableStyle)
                            }
                            editable={disable}
                            value={value}
                            onChangeText={(text) => setValue(text)}
                        />
                        {
                            required && value == "" ? (
                                <Text style={StyleCommon.textRequird}>Trường này không được để trống</Text>
                            ) : null
                        }
                    </View>
                ) : null
            }
        </View>
    )
}
export default InputCuocGoiComponent