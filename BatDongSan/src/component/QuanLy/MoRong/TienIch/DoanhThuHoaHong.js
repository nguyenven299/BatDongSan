import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import InputTextSearchComponent from '../../../../common/InputTextSearchComponent'
import ModalManageComponent from '../../../../common/ModalManageComponent'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native';

const DoanhThuHoaHong = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [Model, setModel] = useState("Khởi tạo")
    navigation.setOptions({
        headerTitle: () =>
            (
                <TouchableOpacity
                    style=
                    {{
                        width: 320,
                        height: 70,
                        flexDirection: 'row'
                    }}
                    onPress={
                        () => {
                            setModalVisible(true);
                        }}
                >
                    <ModalManageComponent
                        visible={modalVisible} setModalVisible1={setModalVisible} setModel={setModel} Mode={"Phiếu đặt cọc"}
                    />

                    <Text
                        style=
                        {{
                            fontSize: 20,
                            marginVertical: 20,
                            color: 'white'
                        }}
                    >
                        Phiếu đặt cọc - {Model}
                    </Text>
                    <FontAwesome name="caret-down" size={20} color="#9B999B"
                        style=
                        {{
                            marginLeft: 5,
                            marginTop: 25,
                            color: 'white'
                        }}
                    />
                </TouchableOpacity>
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
export default DoanhThuHoaHong;