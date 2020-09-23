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

const AgencyRequest = ({ navigation }) => {
    navigation.setOptions({
        headerRight: () => (

            <TouchableOpacity
                onPress=
                {
                    () => {
                        navigation.navigate("CreateAgency")
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

                <Text
                    style=
                    {{
                        fontSize: 20,
                        marginVertical: 20,
                        color: 'white'
                    }}
                >
                    Yêu cầu góp vốn
                </Text>


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
export default AgencyRequest;