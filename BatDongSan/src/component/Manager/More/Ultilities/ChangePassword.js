import React, { useState, useContext } from 'react';
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
import { UserContext } from '../../../../../App';

const ChangePassword = ({ navigation }) => {
    const [Icons, setIcon] = useState("eye")
    const [hidePassword, setHidePassword] = useState(true)
    const [hidePassword1, setHidePassword1] = useState(true)
    const [hidePassword2, setHidePassword2] = useState(true)

    const userContext = useContext(UserContext)
    return (
        <KeyboardAvoidingView
            behavior={"height"}
        >
            <View>
                <ImageBackground
                    source={require('../../../../assest/BG.jpg')}
                    style=
                    {{
                        height: '100%',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}
                >
                    <Text
                        style=
                        {{
                            fontSize: 30,
                            color: 'white',
                            marginTop: "15%"
                        }}
                    >
                        Đổi mật khẩu
                    </Text>
                    <View
                        style=
                        {{
                            marginVertical: 20
                        }}
                    >
                        <View>
                            <ImageBackground
                                source={require('../../../../assest/bg-02.png')}
                                style=
                                {{
                                    width: 350,
                                    height: 370,
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
                                        marginTop: "20%",
                                        fontSize: 17,
                                        color: '#DF5305'
                                    }}
                                >
                                    Mật khẩu cũ
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
                                <Text
                                    style=
                                    {{
                                        marginTop: "5%",
                                        fontSize: 17,
                                        color: '#DF5305'
                                    }}
                                >
                                    Mật khẩu mới
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
                                                ? (setIcon('eye-slash'), setHidePassword1(false))
                                                : (setIcon('eye'), setHidePassword1(true))
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
                                <Text
                                    style=
                                    {{
                                        marginTop: "5%",
                                        fontSize: 17,
                                        color: '#DF5305'
                                    }}
                                >
                                    Nhập lại mật khẩu mới
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
                                                ? (setIcon('eye-slash'), setHidePassword2(false))
                                                : (setIcon('eye'), setHidePassword2(true))
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
                                        backgroundColor: "#FFEEB6",
                                        width: 120,
                                        height: 40,
                                        borderRadius: 20,
                                        justifyContent: 'center',
                                        position: "absolute",
                                        bottom: -20
                                    }}
                                    onPress={
                                        () => navigation.navigate('SignIn')
                                    }
                                >
                                    <Text
                                        style=
                                        {{
                                            textAlign: 'center',
                                            color: '#AA8338'
                                        }}
                                    >
                                        Đồng ý
                            </Text>
                                </TouchableOpacity>
                            </ImageBackground>

                        </View>
                    </View>
                </ImageBackground>
            </View>
        </KeyboardAvoidingView>
    )
}
export default ChangePassword;