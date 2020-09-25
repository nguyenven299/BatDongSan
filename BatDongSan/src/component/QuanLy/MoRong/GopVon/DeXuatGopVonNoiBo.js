import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import ModalManageComponent from '../../../../common/ModalManageComponent'
import InputTextSearchComponent from '../../../../common/InputTextSearchComponent'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

const DeXuatGopVonNoiBo = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [Model, setModel] = useState("Khởi tạo")
    navigation.setOptions({
        headerRight: () => (

            <TouchableOpacity
                onPress=
                {
                    () => {
                        navigation.navigate("CreateRevenue")
                    }
                }
                style={{
                    padding: 5,
                    margin: 10
                }}
            >
                <FontAwesome
                    name="plus" size={20} color='white'
                    style={{ marginRight: 5 }}
                ></FontAwesome>
            </TouchableOpacity>
        ),
        headerTitle: () =>
            (
                <TouchableOpacity
                    style=
                    {{
                        width: 300,
                        height: 70,
                        flexDirection: 'row'
                    }}
                    onPress={
                        () => {
                            setModalVisible(true);
                        }}
                >
                    <ModalManageComponent
                        visible={modalVisible} setModalVisible1={setModalVisible} setModel={setModel} Mode={"Đề xuất góp vốn nội bộ"}
                    />

                    <Text
                        style=
                        {{
                            fontSize: 20,
                            marginVertical: 20,
                            color: 'white'
                        }}
                    >
                        HĐ góp vốn nội bộ - {Model}
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
export default DeXuatGopVonNoiBo;