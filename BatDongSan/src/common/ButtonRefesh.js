import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/MaterialIcons"
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
const IconRefesh = () => {
    return (
        <TouchableOpacity
            style=
            {{
                position: 'absolute',
                right: 20,
                bottom: 15
            }}
        >
            <FontAwesome
                name="loop" color="black" size={20}

            />
        </TouchableOpacity>

    )

}
const ButtonRefesh = ({ textName }) => {
    return (
        <View>
            <View
                style={style.viewStyle}
            >
                <Text
                    style={style.textStyle}
                >
                    {textName}
                </Text>
                <IconRefesh />
            </View>
        </View>
    )
}
const style = StyleSheet.create({
    textStyle:
    {
        color: 'white',
        fontSize: 20,
        padding: 10,
    },
    viewStyle:
    {
        backgroundColor: '#FFA605',
        width: "90%",
        marginHorizontal: 20,
        marginVertical: 20,
        flexDirection: 'row'

    }
})
export default ButtonRefesh