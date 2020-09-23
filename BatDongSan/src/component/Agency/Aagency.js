import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import ModalComponent from '../../common/ModalComponent'

import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput
} from 'react-native';

const Agency = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [Model, setModel] = useState("DỰ ÁN KHU DAN CƯ KIM OANH")
    navigation.setOptions({
        headerRight: () => (
            <View
                style=
                {{
                    flexDirection: 'row',
                }}
            >
                <TouchableOpacity
                    onPress=
                    {
                        () => {
                            navigation.navigate("Information")
                        }
                    }
                    style={style.iconButtonStyle}
                >
                    <FontAwesome
                        name="tasks" size={20} color='white'
                        style={style.iconStyle}
                    ></FontAwesome>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress=
                    {
                        () => {
                            // navigation.navigate("Customer")
                        }
                    }
                    style={style.iconButtonStyle}
                >
                    <FontAwesome
                        name="calendar" size={20} color='white'
                        style={style.iconStyle}
                    ></FontAwesome>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress=
                    {
                        () => {
                            navigation.navigate("Deposit")
                        }
                    }
                    style={style.iconButtonStyle}
                >
                    <FontAwesome
                        name="plus" size={20} color='white'
                        style={style.iconStyle}
                    ></FontAwesome>
                </TouchableOpacity>
            </View>


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
                    <ModalComponent
                        visible={modalVisible} setModalVisible1={setModalVisible} setModel={setModel} Mode={"MoiGioiLe"}
                    />
                    <FontAwesome name="caret-down" size={20} color="#9B999B"
                        style=
                        {{
                            marginLeft: 20,
                            marginTop: 20,
                            color: 'white'
                        }}
                    />
                    <Text
                        style=
                        {{
                            fontSize: 20,
                            margin: 20,
                            color: 'white'
                        }}
                    >
                        {Model}
                    </Text>
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
export default Agency;