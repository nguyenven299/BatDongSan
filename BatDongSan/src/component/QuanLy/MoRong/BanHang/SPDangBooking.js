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

const SPDangBooking = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [Model, setModel] = useState("Khởi tạo")
    navigation.setOptions({

        headerTitle: () =>
            (
                <Text
                    style=
                    {{
                        fontSize: 20,
                        margin: 20,
                        color: 'white'
                    }}
                >
                    Danh sách Booking
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
export default SPDangBooking;