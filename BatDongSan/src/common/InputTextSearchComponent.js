import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

const InputTextSearchComponent = () => {
    return (
        <View>
            <View
                style=
                {{
                    backgroundColor: '#C5C3C5',
                    marginHorizontal: 10,
                    height: 50,
                    flexDirection: 'row',
                    marginTop: 5,
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
                        height: 50,
                        fontSize: 17
                    }}
                    placeholder="Tìm kiếm"
                >

                </TextInput>
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    iconButtonStyle:
    {
        padding: 5,
        margin: 5
    },
    iconStyle:
    {
        marginRight: 5
    }
})
export default InputTextSearchComponent;