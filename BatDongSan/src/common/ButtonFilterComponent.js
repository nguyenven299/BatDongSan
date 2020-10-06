import React, { useState, useEffect } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Altert
} from 'react-native';

const ButtonFilterComponent = ({ textName, setCount, count }) => {


    return (
        <View>

            <TouchableOpacity
                style=
                {{
                    backgroundColor: '#FBFAFB',
                    margin: 10,
                    borderRadius: 10,
                    flexDirection: 'row',
                    fontSize: 17,
                    padding: 15
                }}
                onPress={
                    () => {
                        setCount(!count)
                    }
                }
            >
                <FontAwesome
                    name={count == true ? "check-square" : "square"} size={20} color={count == true ? "#FFA400" : "black"}
                />
                <Text
                    style=
                    {{
                        color: '#4A4D53',
                        fontSize: 15,
                        marginHorizontal: 10,
                        fontWeight: 'bold'
                    }}
                >
                    {textName}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default ButtonFilterComponent