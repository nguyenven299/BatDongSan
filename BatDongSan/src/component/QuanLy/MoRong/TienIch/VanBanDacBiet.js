import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

const VanBanDacBiet = ({ navigation }) => {

    navigation.setOptions({
        headerTitle: () =>
            (
                <Text
                    style=
                    {{
                        fontSize: 20,
                        marginVertical: 20,
                        color: 'white'
                    }}
                >
                    Sản phẩm yêu thích
                </Text>
            )
    });
    return (
        <View
            style={{ flexDirection: 'row' }}
        >
            <TouchableOpacity
                style={style.ButtonStyle}
                onPress={() => {
                    navigation.navigate("Rename")
                }}
            >
                <Text>Đề xuất chuyển tên</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={style.ButtonStyle}
                onPress={() => {
                    navigation.navigate("ChangeInforCustomer")
                }}
            >
                <Text>Đề xuất đổi thông tin khách hàng</Text>
            </TouchableOpacity>
        </View>
    )
}
const style = StyleSheet.create({
    ButtonStyle:
    {
        width: 150,
        height: 200,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
        margin: 30,
        padding: 20
    }
})
export default VanBanDacBiet;