import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import InputTextSearchComponent from '../../../../common/InputTextSearchComponent'
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
export default AgencyRequest;