import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/MaterialIcons"
import StyleCommom from './../theme/StyleCommon'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
const IconRefesh = () => {
    return (
        <TouchableOpacity
            style=
            {{
                position: 'absolute',
                right: 20,
                bottom: 15
            }}
        >
            <FontAwesome
                name="loop" color="black" size={20}

            />
        </TouchableOpacity>

    )

}
const ButtonRefesh = ({ textName, dataOption }) => {
    return (
        <View>
            <View
                style={StyleCommom.viewStyleRefesh}
            >
                <Text
                    style={StyleCommom.textStyleRefesh}
                >
                    {textName}
                </Text>
                <IconRefesh />
            </View>
            {
                dataOption != null ? (
                    <ScrollView>
                        {

                            dataOption.map((item, index) => (
                                <TouchableOpacity
                                    style={{
                                        flexDirection: 'row',
                                        height: 40,
                                        width: '100%'
                                    }}
                                    onPress={() => {
                                        setValue(item)
                                        setModalVisible(!modalVisible)
                                    }}
                                >
                                    <Text style=
                                        {{
                                            width: "10%",
                                            fontSize: 10,
                                            marginLeft: 10,
                                            alignContent: 'center',
                                            textAlign: 'center'
                                        }}>
                                        {item.index}
                                    </Text>
                                    <Text style=
                                        {{
                                            width: "60%",
                                            fontSize: 10,
                                            marginLeft: 10,
                                            alignContent: 'center',
                                            textAlign: 'center'
                                        }}>
                                        {item.noiDung}
                                    </Text>
                                    <Text style=
                                        {{
                                            width: "40%",
                                            fontSize: 10,
                                            marginLeft: 10,
                                            alignContent: 'center',
                                            textAlign: 'center'
                                        }}>
                                        {item.ghiChu}
                                    </Text>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>
                ) : null
            }

        </View>
    )
}
export default ButtonRefesh