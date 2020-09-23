import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import ModalManageComponent from '../../../../common/ModalManageComponent'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

const Reservations = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [Model, setModel] = useState("Khởi tạo")
    navigation.setOptions({

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
                        visible={modalVisible} setModalVisible1={setModalVisible} setModel={setModel} Mode={"Phiếu đặt chỗ"}
                    />

                    <Text
                        style=
                        {{
                            fontSize: 20,
                            margin: 20,
                            color: 'white'
                        }}
                    >
                        Phiếu đặt chỗ - {Model}
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
            <View
                style=
                {{
                    backgroundColor: '#C5C3C5',
                    marginHorizontal: 10,
                    height: 50,
                    flexDirection: 'row',
                    marginTop: 5
                }}
            >
                <FontAwesome
                    name="search" size={20} color="#A09EA0"
                    style=
                    {{
                        margin: 15
                    }}
                />

                <TextInput
                    style=
                    {{
                        width: "80%",
                        height: 50,
                        fontSize: 17
                    }}
                    placeholder="Tìm kiếm"
                >

                </TextInput>
            </View>
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
export default Reservations;