import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import {
    View,
    Text,
} from 'react-native';
const ChinhSachChietKhau = ({ navigation }) => {
    return (
        <View
            style=
            {{
                backgroundColor: "orange",
                padding: 10,
                margin: 10
            }}
        >
            <Text
                style=
                {{
                    fontSize: 17,
                    color: 'white'
                }}
            >
                Chính Sách Chiết Khấu/ Khuyến Mãi
</Text>
            <Text
                style=
                {{
                    fontSize: 15,
                    color: 'white'
                }}
            >
                Hình thức áp dụng: Theo thứ tự áp dụng
</Text>
        </View>
    )
}
export default ChinhSachChietKhau;