import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome5"


import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const MatBang = ({ navigation }) => {
    const [typeActivity, setTypeActivity] = useState(1)

    return (
        <View
            style={{
                flex: 1
            }}
        >
            <View
                style=
                {{
                    flex: 1,
                    flexDirection: 'row',
                    height: '8%',
                    backgroundColor: 'white'
                }}
            >
                <View
                    style=
                    {{
                        margin: 5
                    }}
                >
                    <FontAwesome
                        name="filter" size={40} color="orange"
                    />
                </View>
                <View
                    style=
                    {{
                        flex: 1,
                        flexDirection: 'column',

                    }}
                >
                    <View
                        style=
                        {{
                            flexDirection: 'row',
                            flex: 1,
                            alignContent: 'center',
                            justifyContent: 'space-between',
                            backgroundColor: 'white',
                            // borderBottomColor: 'black',
                            // borderBottomWidth: 2,
                            shadowColor: '#000',
                            shadowOffset: {
                                width: 0,
                                height: 5,
                            },
                            shadowOpacity: 0.34,
                            shadowRadius: 6.27,
                            alignItems: 'center',
                            elevation: 10,

                        }}
                    >
                        <ScrollView
                            horizontal={true}
                            style=
                            {{
                                flex: 1,
                                paddingHorizontal: 20,

                            }}
                        >

                            <TouchableOpacity
                                style=
                                {{
                                    flex: 1,
                                    borderBottomWidth: 2,
                                    borderBottomColor: typeActivity == 1 ? 'yellow' : 'white',
                                    marginHorizontal: 50
                                }}
                                onPress={
                                    () => {
                                        // setActivity("HanhDong")
                                        setTypeActivity(1)
                                    }}
                            >
                                <Text
                                    style=
                                    {{
                                        textAlign: 'center',
                                        paddingVertical: 10,
                                        fontSize: 15,
                                        color: typeActivity == 1 ? '#FFA605' : 'black'


                                    }}
                                >Mặt bằng</Text>

                            </TouchableOpacity>

                            <TouchableOpacity
                                style=
                                {{
                                    flex: 1,
                                    borderBottomWidth: 2,
                                    borderBottomColor: typeActivity == 2 ? 'yellow' : 'white',
                                    marginHorizontal: 50
                                }}
                                onPress={
                                    () => {
                                        // setActivity("SinhNhat")
                                        setTypeActivity(2)
                                    }}
                            >
                                <Text
                                    style=
                                    {{
                                        textAlign: 'center',
                                        paddingVertical: 10,
                                        fontSize: 15,
                                        color: typeActivity == 2 ? '#FFA605' : 'black'
                                    }}
                                >Giới thiệu</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style=
                                {{
                                    flex: 1,
                                    borderBottomWidth: 2,
                                    borderBottomColor: typeActivity == 3 ? 'yellow' : 'white',
                                    marginHorizontal: 50
                                }}
                                onPress={
                                    () => {
                                        // setActivity("SinhNhat")
                                        setTypeActivity(3)
                                    }}
                            >
                                <Text
                                    style=
                                    {{
                                        textAlign: 'center',
                                        paddingVertical: 10,
                                        fontSize: 15,
                                        color: typeActivity == 3 ? '#FFA605' : 'black'
                                    }}
                                >Vị trí</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style=
                                {{
                                    flex: 1,
                                    borderBottomWidth: 2,
                                    borderBottomColor: typeActivity == 4 ? 'yellow' : 'white',
                                    marginHorizontal: 50
                                }}
                                onPress={
                                    () => {
                                        // setActivity("SinhNhat")
                                        setTypeActivity(4)
                                    }}
                            >
                                <Text
                                    style=
                                    {{
                                        textAlign: 'center',
                                        paddingVertical: 10,
                                        fontSize: 15,
                                        color: typeActivity == 5 ? '#FFA605' : 'black'
                                    }}
                                >Tiện ích</Text>
                            </TouchableOpacity>
                        </ScrollView>

                    </View>

                </View>

            </View>
            <View
                style=
                {{
                    height: "92%",

                    backgroundColor: 'white'
                }}
            >
                <TouchableOpacity
                    style=
                    {{
                        margin: 5,
                        position: 'absolute',
                        backgroundColor: 'orange',
                        bottom: 20,
                        left: 10,
                        padding: 15,
                        borderRadius: 50
                    }}

                >
                    <FontAwesome
                        name="shopping-cart" size={25} color="white"

                    />
                </TouchableOpacity>
                <TouchableOpacity
                    style=
                    {{
                        margin: 5,
                        position: 'absolute',
                        backgroundColor: 'orange',
                        bottom: 20,
                        right: 10,
                        padding: 15,

                        borderRadius: 50
                    }}
                    onPress={
                        () => {
                            navigation.navigate("DeXuatBanSi")

                        }}
                >
                    <FontAwesome
                        name="plus" size={25} color="white"
                        style=
                        {{
                            marginHorizontal: 3
                        }}
                    />
                </TouchableOpacity>
            </View>


        </View>
    )
}
export default MatBang;