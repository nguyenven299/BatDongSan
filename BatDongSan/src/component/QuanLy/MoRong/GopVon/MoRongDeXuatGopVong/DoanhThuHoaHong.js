import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import TextInputComponent from '../../../../../common/InputTextComponent'
import ButtonComponent from '../../../../../common/ButtonComponent'
import MultiLineInputTextComponent from '../../../../../common/MultiLineTextInputComponent'
import ButtonRefesh from '../../../../../common/ButtonRefesh'
import {
    View, ScrollView
} from 'react-native';
const DoanhThuHoaHong = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
                <ButtonComponent textName="Doanh thu (Số tiền)" />
                <ButtonComponent textName="Hoa hồng (Số tiền)" />
                <ButtonRefesh textName="Chia sẻ doanh thu" />
                <ButtonRefesh textName="Chia sẻ hoa hồng" />
            </ScrollView>
        </View>
    )
}
export default DoanhThuHoaHong;