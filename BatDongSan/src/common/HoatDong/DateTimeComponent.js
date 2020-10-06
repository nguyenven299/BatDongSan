import React, { useState } from 'react'
import FontAwesome from "react-native-vector-icons/FontAwesome"
import StyleCommon from '../../theme/StyleCommon'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DateTimePicker from '@react-native-community/datetimepicker';

import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
function DateTimeComponemt({ textName, visible, disable, required, value, setValue, dataOption, caret }) {
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const formatDate = (date) => {
        var d = new Date(date);
        let ngay = d.getDay()
        let thang = d.getMonth() + 1
        let nam = d.getFullYear()
        let gio = d.getHours()
        let phut = d.getMinutes()
        let newDate = ngay + "/" + thang + "/" + nam + " " + gio + ":" + phut + ":00"
        return newDate

    }
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.log("A date has been picked: ", date);
        hideDatePicker();
        setValue(formatDate(date))
    };

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
                                    showDatePicker()
                                }}
                            >
                                <Text>
                                    {value}
                                </Text>
                            </TouchableOpacity>
                            { <DateTimePickerModal
                                isVisible={isDatePickerVisible}
                                mode="datetime"
                                onConfirm={handleConfirm}
                                onCancel={hideDatePicker}
                            />}
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
export default DateTimeComponemt
