import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import InputTextSearchComponent from '../../../../common/InputTextSearchComponent'
import ModalManageComponent from '../../../../common/ModalManageComponent'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

const HDNguyenTac = ({ navigation }) => {
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
                        visible={modalVisible} setModalVisible1={setModalVisible} setModel={setModel} Mode={"HĐ nguyên tắc"}
                    />

                    <Text
                        style=
                        {{
                            fontSize: 20,
                            marginVertical: 20,
                            color: 'white'
                        }}
                    >
                        HĐ nguyên tắc - {Model}
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
export default HDNguyenTac;