import React, { useState, useEffect } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Altert
} from 'react-native';

const ButtonThongTinCKComponent = ({ STT, NoiDung, SoTien, GhiChu }) => {
    const [type, setType] = useState(false)

    return (
        <View>

            <TouchableOpacity
                style=
                {{
                    flexDirection: 'row',
                    // justifyContent: 'space-between',
                    padding: 10,
                    alignContent: 'center',
                    alignItems: 'center',
                    borderBottomWidth: 0.5
                }}
                onPress=
                {() => {
                    setType(!type)
                }}
            >
                <Text
                    style=
                    {{
                        width: 20
                    }}
                >
                    {STT}
                </Text>
                <FontAwesome
                    name={type == true ? "check-square" : "square"} size={20} color={type == true ? "orange" : "#4A4D53"}
                    style=
                    {{
                        marginHorizontal: 20
                    }}
                />
                <Text
                    style=
                    {{
                        width: 170,
                        fontSize: 15,
                        color: '#4A4D53',
                        fontWeight: 'bold',
                    }}
                >
                    {NoiDung}
                </Text>
                <Text
                    style=
                    {{
                        fontSize: 15,
                        width: 70
                    }}
                >
                    {SoTien}
                </Text>
                <Text
                    style=
                    {{
                        fontSize: 15,
                        marginHorizontal: 10
                    }}
                >
                    {GhiChu}
                </Text>
            </TouchableOpacity>
        </View>
    )
}
export default ButtonThongTinCKComponent