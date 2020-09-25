import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import ButtonComponent from '../../../../../common/ButtonComponent'
import TextInputComponent from '../../../../../common/InputTextComponent'
import MultiLineTextInputComponent from '../../../../../common/MultiLineTextInputComponent'

import {
    ImageBackground,
    View,
    Text,
    TouchableOpacity,
    Alert,
    ScrollView,
    StyleSheet,
    TextInput,
    Modal
} from 'react-native';

const TaoPhieuMoiGioi = ({ navigation }) => {
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
        title: "Khách hàng tiềm năng",
    });
    return (
        <View>
            <ScrollView>
                <TextInputComponent textName="Tiêu đề" />
                <ButtonComponent textName="Dự án" />
                <TextInputComponent textName="Tên khách hàng" />
                <ButtonComponent textName="Sản phẩm" />
                <TextInputComponent textName="Giá trị hợp đồng dịch vụ" />
                <TextInputComponent textName="Giá trị hợp đồng gốc" />
                <TextInputComponent textName="Giá chuyển nhượng" />
                <ButtonComponent textName="Ngày yêu cầu" />
                <ButtonComponent textName="Ngày hết hạn" />
                <ButtonComponent textName="Phiếu đặt cọc" />
                <ButtonComponent textName="Hợp đồng vay" />
                <ButtonComponent textName="Hợp đồng mua bán" />
                <ButtonComponent textName="Hợp đồng nguyên tắc" />
                <ButtonComponent textName="Hợp đồng dịch vụ" />
                <ButtonComponent textName="Nhân viên kinh doanh" />
                <ButtonComponent textName="Trạng thái" />
            </ScrollView>



        </View>
    )
}
export default TaoPhieuMoiGioi;