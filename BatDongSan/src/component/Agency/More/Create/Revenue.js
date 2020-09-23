import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import TextInputComponent from '../../../../common/InputTextComponent'
import ButtonConponent from '../../../../common/ButtonComponent'
import ButtonRefesh from '../../../../common/ButtonRefesh'

import {
    View,
    TouchableOpacity,
    ScrollView,
} from 'react-native';
const Revenue = ({ navigation }) => {
    return (
        <View>
            <ScrollView>
                <TextInputComponent textName="Doanh thu sàn" />
                <TextInputComponent textName="Chi phí tổng công ty/ sản phẩm" />
                <TextInputComponent textName="Phí khai thác" />
                <TextInputComponent textName="Chi phí làm sổ" />
                <TextInputComponent textName="Hoa hồng" />
                <ButtonRefesh textName="Doanh thu" />
                <ButtonRefesh textName="Hoa hồng" />
            </ScrollView>

        </View>
    )
}
export default Revenue;