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
function BoolenComponent({ textName, visible, disable, required, value, setValue, check }) {
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
                                    setValue(!value)
                                }}
                            >
                                <Text
                                >{check}</Text>


                            </TouchableOpacity>
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
export default BoolenComponent
