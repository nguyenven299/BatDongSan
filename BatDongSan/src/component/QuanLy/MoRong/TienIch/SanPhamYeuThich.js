import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

const SanPhamYeuThich = ({ navigation }) => {

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
        <View>

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
export default SanPhamYeuThich;