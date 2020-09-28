import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
const TextBanHangComponent = ({ TextTitle, TextDetails }) => {
    return (
        <View
            style=
            {{
                flexDirection: 'row',
                margin: 5,
                width: "80%"
            }}
        >

            <Text
                style={{ fontSize: 15 }}
            >
                {TextTitle} <Text
                    style=
                    {{
                        fontWeight: 'bold',
                        fontSize: 15
                    }}
                >
                    {TextDetails}
                </Text>
            </Text>

        </View>
    )
}
export default TextBanHangComponent;