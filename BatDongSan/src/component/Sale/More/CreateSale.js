import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/MaterialIcons"
import TextInputCoponent from '../../../common/InputTextComponent'
import ButtonComponent from '../../../common/ButtonComponent'
import MultiLineInputTextComponent from '../../../common/MultiLineTextInputComponent'
import ButtonRefesh from '../../../common/ButtonRefesh'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StyleSheet, Modal,
    ScrollView
} from 'react-native';
import { HeaderTitle } from '@react-navigation/stack';
const CreateSale = ({ navigation }) => {
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(true);
                }}
                style=
                {{
                    padding: 15
                }}
            >
                <FontAwesome
                    name="save" size={30} color='white'
                    style=
                    {{
                        marginRight: 10
                    }}
                ></FontAwesome>
            </TouchableOpacity>
        ),
    },

    );
    return (
        <View>
            <ScrollView>
                <TextInputCoponent textName="Tiêu đề" />
                <ButtonComponent textName="Dự án" />
                <ButtonComponent textName="Đợt phát hành" />
                <ButtonComponent textName="Khách hàng" />
                <ButtonComponent textName="Hình thức thanh toán" />
                <ButtonComponent textName="Tài khoản ngân hàng" />
                <TextInputCoponent textName="Chủ tài khoản" />
                <ButtonComponent textName="Ngân hàng" />
                <ButtonComponent textName="Chi nhánh ngân hàng" />
                <MultiLineInputTextComponent textName="Diễn giải" />
                <ButtonComponent textName="Trạng thái" />
                <ButtonRefesh textName="Khách hàng đồng sở hữu" />
                <ButtonRefesh textName="Sản phẩm bán sỉ" />

            </ScrollView>
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
export default CreateSale