import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import TextInputComponent from '../../../common/InputTextComponent'
import ButtonConponent from '../../../common/ButtonComponent'
import {
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
const MakeACall = ({ navigation }) => {
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {

                }}
                style=
                {{
                    padding: 15
                }}
            >
                <FontAwesome
                    name="save" size={20} color='white'
                    style=
                    {{
                        marginRight: 10
                    }}
                ></FontAwesome>
            </TouchableOpacity>
        ),
        title: "Cuộc gọi",
    });

    return (
        <View>
            <ScrollView>
                <TextInputComponent textName="Tiêu đề" />
                <TextInputComponent textName="Người gọi" />
                <ButtonConponent textName="Người nhận" />
                <ButtonConponent textName="Loại cuộc gọi" />
                <TextInputComponent textName="Diễn giải" />
                <ButtonConponent textName="Thời gian cuộc gọi" />
                <ButtonConponent textName="Ngày dự kiến" />
                <ButtonConponent textName="Ngày thực hiện" />
                <TextInputComponent textName="Trạng thái" />
            </ScrollView>

        </View>
    )
}
export default MakeACall;