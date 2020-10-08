import React, { useState } from 'react'
import {
    TextInput, View, Text
} from 'react-native';
import NumberFormat from 'react-number-format';

import StyleCommon from '../../theme/StyleCommon'
function InputTextCurrentcy({ textName, visible, disable, required, value, setValue }) {
    const [currentcy, setCurrentcy] = useState()
    console.log(currentcy + " :" + value)
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
                            keyboardType={"numeric"}
                            value={value}
                            editable={disable}
                            onChangeText={(text) => setCurrentcy(text)}
                        />
                        {value != null ? (<NumberFormat
                            value={currentcy}
                            displayType={'text'}
                            thousandSeparator={true}
                            renderText={formattedValue => setValue(formattedValue)} // <--- Don't forget this!
                        />) : null}
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
export default InputTextCurrentcy