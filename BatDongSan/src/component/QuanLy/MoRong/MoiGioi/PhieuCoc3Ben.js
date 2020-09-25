import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import InputTextSearchComponent from '../../../../common/InputTextSearchComponent'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

const PhieuCoc3Ben = ({ navigation }) => {
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
                    Phiếu đặt cọc bên 3
                </Text>


            )
    });
    return (
        <View>
            <InputTextSearchComponent />
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
export default PhieuCoc3Ben;