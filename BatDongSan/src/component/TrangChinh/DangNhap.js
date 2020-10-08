import React, { useState, useContext, useEffect } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView, Alert

} from 'react-native';
import { UserContext } from '../../../App';

const DangNhap = ({ navigation }) => {
    const [Icons, setIcon] = useState("eye")
    const [Account, setAccount] = useState()
    const [Password, setPassword] = useState()
    const [hidePassword, setHidePassword] = useState(true)
    const userContext = useContext(UserContext)

    return (

        <KeyboardAvoidingView
            behavior={"height"}
        >
            <View>
                <ImageBackground
                    source={require('../../assest/BG.jpg')}
                    style=
                    {{
                        height: '100%',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <Image
                        source={require('../../assest/logo.png')}
                        style=
                        {{
                            width: 150,
                            height: 150,
                        }}
                    >
                    </Image>
                    <Text
                        style=
                        {{
                            fontSize: 30,
                            color: 'white',
                        }}
                    >
                        Đăng Nhập
                    </Text>
                    <View
                        style=
                        {{
                            marginVertical: 20
                        }}
                    >
                        <View>
                            <ImageBackground
                                source={require('../../assest/bg-02.png')}
                                style=
                                {{
                                    width: 350,
                                    height: 470,
                                    alignItems: 'center'
                                }}
                                imageStyle=
                                {{
                                    borderRadius: 20
                                }}
                            >
                                <Text
                                    style=
                                    {{
                                        marginTop: "40%",
                                        fontSize: 17,
                                        color: '#DF5305'
                                    }}
                                >
                                    Tên đăng nhập
                            </Text>
                                <View
                                    style=
                                    {{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <TextInput
                                        style=
                                        {{
                                            width: "80%",
                                            height: 40,
                                            backgroundColor: 'white',
                                            borderRadius: 20,
                                            marginTop: 10,
                                            paddingLeft: 20,
                                            paddingRight: 30,
                                        }}

                                        onChangeText={text => setAccount(text)}
                                        value={Account}

                                    >
                                    </TextInput>

                                    <FontAwesome name="user" color={"#D88B00"} size={20}
                                        style=
                                        {{

                                            position: 'absolute',
                                            right: 10,
                                            bottom: 10
                                        }}
                                    />
                                </View>
                                <Text
                                    style=
                                    {{
                                        marginTop: "5%",
                                        fontSize: 17,
                                        color: '#DF5305'
                                    }}
                                >
                                    Mật khẩu
                            </Text>
                                <View
                                    style=
                                    {{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <TextInput
                                        style=
                                        {{
                                            width: "80%",
                                            height: 40,
                                            backgroundColor: 'white',
                                            borderRadius: 20,
                                            marginTop: 10,
                                            paddingLeft: 20,
                                            paddingRight: 30,

                                        }}
                                        secureTextEntry={hidePassword}
                                        onChangeText={(text) => setPassword({ text })}
                                    >

                                    </TextInput>
                                    <TouchableOpacity
                                        style=
                                        {{

                                            position: 'absolute',
                                            right: 30,
                                            bottom: 10
                                        }}
                                        onPress={() =>
                                            Icons !== "eye-slash"
                                                ? (setIcon('eye-slash'), setHidePassword(false))
                                                : (setIcon('eye'), setHidePassword(true))
                                        }
                                    >
                                        <FontAwesome name={Icons} color="#D88B00" size={20}

                                        />
                                    </TouchableOpacity>
                                    <FontAwesome name="lock" color="#D88B00" size={20}
                                        style=
                                        {{
                                            position: 'absolute',
                                            right: 10,
                                            bottom: 10
                                        }}
                                    />
                                </View>
                                <TouchableOpacity
                                    style=
                                    {{
                                        marginTop: "5%"
                                    }}
                                    onPress={() => {
                                        console.log(Account)
                                        console.log(numberFormat(Account))
                                    }}
                                >
                                    <Text
                                        style=
                                        {{
                                            marginTop: "1%",
                                            fontSize: 17,
                                            color: '#DF5305',
                                            textDecorationLine: 'underline'
                                        }}
                                    >
                                        Cấp lại mật khẩu
                                </Text>
                                </TouchableOpacity>
                            </ImageBackground>
                        </View>
                        <View
                            style=
                            {{
                                flexDirection: 'row',
                                alignItems: 'center',
                                position: 'absolute',
                                left: 40,
                                bottom: -20
                            }}
                        >
                            <TouchableOpacity
                                style=
                                {{
                                    backgroundColor: "#FFEEB6",
                                    width: 120,
                                    height: 40,
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                }}
                                onPress={
                                    () => {
                                        navigation.navigate('DangKy')

                                    }
                                }
                            >
                                <Text
                                    style=
                                    {{
                                        textAlign: 'center',
                                        color: '#AA8338'
                                    }}
                                >
                                    Đăng Ký

                            </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style=
                                {{
                                    backgroundColor: "#FFEEB6",
                                    width: 120,
                                    height: 40,
                                    borderRadius: 20,
                                    justifyContent: 'center',
                                    marginStart: 35
                                }}
                                onPress={
                                    () => {
                                        if (Account != "undefined" && Account != null && Password != "undefined" && Password != null) {
                                            userContext.setUser("LogIn")
                                        }
                                        else {
                                            Alert.alert("Vui lòng nhập đầy đủ dữ liệu")
                                        }
                                    }
                                }
                            >
                                <Text
                                    style=
                                    {{
                                        textAlign: 'center',
                                        color: '#AA8338'
                                    }}
                                >
                                    Đăng Nhập

                            </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </KeyboardAvoidingView>
    )
}
export default DangNhap;