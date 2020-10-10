import React, { useState, useContext } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import auth from '@react-native-firebase/auth'
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StyleSheet,
    Alert,
    ToastAndroid
} from 'react-native';
import { UserContext } from '../../../../../../App';

const DoiMatKhau = ({ navigation }) => {
    const [Icons, setIcon] = useState("eye")
    const [Icons1, setIcon1] = useState("eye")
    const [Icons2, setIcon2] = useState("eye")
    const [hidePassword, setHidePassword] = useState(true)
    const [hidePassword1, setHidePassword1] = useState(true)
    const [hidePassword2, setHidePassword2] = useState(true)

    const [password, setPassword] = useState(true)
    const [rePassword, setRePassword] = useState(true)

    const userContext = useContext(UserContext)
    return (
        <KeyboardAvoidingView
            behavior={"height"}
        >
            <View>
                <ImageBackground
                    source={require('../../../../../assest/BG.jpg')}
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
                            width: "80%",
                            height: "60%",
                            alignItems: 'center'
                        }}
                    >
                        <ImageBackground
                            source={require('../../../../../assest/bg-02.png')}
                            style=
                            {{
                                width: "100%",
                                height: "100%",
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
                                    marginTop: "15%",
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
                                    style={style.inputTextStyle}
                                    secureTextEntry={hidePassword1}
                                    onChangeText={(text) => setPassword({ text })}
                                >

                                </TextInput>
                                <TouchableOpacity
                                    style=
                                    {{

                                        position: 'absolute',
                                        right: "10%",
                                        bottom: "15%"
                                    }}
                                    onPress={() =>
                                        Icons1 !== "eye-slash"
                                            ? (setIcon1('eye-slash'), setHidePassword1(false))
                                            : (setIcon1('eye'), setHidePassword1(true))
                                    }
                                >
                                    <FontAwesome name={Icons1} color="#D88B00" size={20}

                                    />
                                </TouchableOpacity>
                                <FontAwesome name="lock" color="#D88B00" size={20}
                                    style=
                                    {{
                                        position: 'absolute',
                                        right: "3%",
                                        bottom: "15%"
                                    }}
                                />
                            </View>
                            <Text
                                style=
                                {{
                                    marginTop: "10%",
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
                                    style={style.inputTextStyle}
                                    secureTextEntry={hidePassword2}
                                    onChangeText={(text) => setRePassword({ text })}
                                >

                                </TextInput>
                                <TouchableOpacity
                                    style=
                                    {{

                                        position: 'absolute',
                                        right: "10%",
                                        bottom: "15%"
                                    }}
                                    onPress={() =>
                                        Icons2 !== "eye-slash"
                                            ? (setIcon2('eye-slash'), setHidePassword2(false))
                                            : (setIcon2('eye'), setHidePassword2(true))
                                    }
                                >
                                    <FontAwesome name={Icons2} color="#D88B00" size={20}

                                    />
                                </TouchableOpacity>
                                <FontAwesome name="lock" color="#D88B00" size={20}
                                    style=
                                    {{
                                        position: 'absolute',
                                        right: "3%",
                                        bottom: "15%"
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
                                    () => {
                                        if (password == rePassword && password != "undefined") {
                                            auth().currentUser.updatePassword(rePassword).then(() => {
                                                ToastAndroid.showWithGravityAndOffset(
                                                    "Đổi mật khẩu thành công!",
                                                    ToastAndroid.LONG,
                                                    ToastAndroid.BOTTOM,
                                                    25,
                                                    50
                                                )
                                            })
                                                .catch((error) => {
                                                    ToastAndroid.showWithGravityAndOffset(
                                                        "Đổi mật khẩu thất bại!",
                                                        ToastAndroid.LONG,
                                                        ToastAndroid.BOTTOM,
                                                        25,
                                                        50
                                                    )
                                                })
                                        }
                                        else {
                                            Alert.alert(
                                                "Mật khẩu không trùng khớp",
                                                "Vui lòng kiểm tra lại mật khẩu",
                                            )
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
                                    Đồng ý
                            </Text>
                            </TouchableOpacity>
                        </ImageBackground>

                    </View>

                </ImageBackground>
            </View>
        </KeyboardAvoidingView>
    )
}
const style = StyleSheet.create({
    inputTextStyle:
    {
        width: "80%",
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: "10%",
        paddingLeft: 20,
        paddingRight: 30,

    }
})
export default DoiMatKhau;