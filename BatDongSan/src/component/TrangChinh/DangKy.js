import React, { useState, useContext } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import auth from '@react-native-firebase/auth';
import { UserContext } from '../../../App';

import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
    StyleSheet,
    ToastAndroid
} from 'react-native';
DangKy = ({ navigation }) => {
    const [Icons, setIcon] = useState("eye")
    const [hidePassword, setHidePassword] = useState(true)
    const [Icons1, setIcon1] = useState("eye")
    const [hidePassword1, setHidePassword1] = useState(true)
    const [name, setName] = useState()
    const [account, setAccount] = useState()
    const [password, setPassword] = useState()
    const [rePassword, setRepassword] = useState()
    const userContext = useContext(UserContext)

    console.log(name + ":" + account + ":" + password + ":" + rePassword)
    return (

        <ImageBackground
            source={require('../../assest/BG.jpg')}
            style=
            {{
                flex: 1,
                alignItems: 'center',
            }}
        >
            <Text
                style=
                {{
                    fontSize: 30,
                    color: 'white',
                    marginTop: "15%"
                }}
            > Đăng Ký </Text>

            <View
                style=
                {{
                    height: "70%",
                    width: '80%',
                    alignItems: 'center'
                }}
            >
                <ImageBackground
                    source={require('../../assest/bg-02.png')}
                    style=
                    {{
                        width: "100%",
                        height: "100%",
                        alignItems: 'center',
                    }}
                    imageStyle=
                    {{
                        borderRadius: 20
                    }}
                >
                    <View
                        style=
                        {{
                            alignItems: 'center',
                            position: 'absolute',
                            top: "10%"
                        }}
                    >
                        <Text
                            style={style.textStyle}

                        >
                            Họ và tên
                            </Text>
                        <TextInput
                            style={style.inputTextStyle}
                            onChangeText={text => setName(text)}
                        >

                        </TextInput>
                    </View>
                    <View
                        style=
                        {{
                            alignItems: 'center',
                            position: 'absolute',
                            top: "27%"
                        }}
                    >
                        <Text
                            style={style.textStyle}
                        >
                            Tài khoản (email)
                            </Text>
                        <TextInput
                            style={style.inputTextStyle}
                            onChangeText={text => setAccount(text)}
                        >

                        </TextInput>
                    </View>
                    <View
                        style=
                        {{
                            alignItems: 'center',
                            position: 'absolute',
                            top: "44%"
                        }}
                    >
                        <Text
                            style={style.textStyle}
                        >
                            Mật khẩu
                            </Text>
                        <TextInput
                            style={style.inputTextStyle}
                            secureTextEntry={hidePassword}
                            onChangeText={text => setPassword(text)}
                        >

                        </TextInput>
                        <TouchableOpacity
                            style=
                            {{

                                position: 'absolute',
                                right: "5%",
                                bottom: "15%"
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
                    </View>
                    <View
                        style=
                        {{
                            alignItems: 'center',
                            position: 'absolute',
                            top: "61%"
                        }}
                    >
                        <Text
                            style={style.textStyle}
                        >
                            Nhập lại mật khẩu
                            </Text>
                        <TextInput
                            style=
                            {style.inputTextStyle}
                            secureTextEntry={hidePassword1}
                            onChangeText={text => setRepassword(text)}
                        >

                        </TextInput>
                        <TouchableOpacity
                            style=
                            {{

                                position: 'absolute',
                                right: "5%",
                                bottom: "15%"
                            }}
                            onPress={() =>
                                Icons !== "eye-slash"
                                    ? (setIcon1('eye-slash'), setHidePassword1(false))
                                    : (setIcon1('eye'), setHidePassword1(true))
                            }
                        >
                            <FontAwesome name={Icons} color="#D88B00" size={20}

                            />
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity
                        style={{
                            backgroundColor: "#FFEEB6",
                            width: 120,
                            height: 40,
                            borderRadius: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            bottom: "-3%"
                        }}
                    >
                        <Text
                            style=
                            {{
                                textAlign: 'center',
                                color: '#AA8338'
                            }}
                            onPress={() => {
                                name == null || account == null || password == null || rePassword == null ||
                                    name == "undefined" || account == "undefined" || password == "undefined" || rePassword == "undefined"

                                    ?
                                    (
                                        Alert.alert(
                                            "Nhập thông tin",
                                            "Vui lòng nhập đầy đủ thông tin",
                                            [
                                                {
                                                    text: "Đồng ý",
                                                    onPress: () => console.log("Cancel Pressed"),
                                                    style: "cancel"
                                                },
                                            ],
                                            { cancelable: false }
                                        )
                                    ) : (
                                        password != password ?
                                            (
                                                Alert.alert(
                                                    "Mật khẩu không trùng khớp",
                                                    "Vui lòng kiểm tra lại mật khẩu",
                                                    [
                                                        {
                                                            text: "Đồng ý",
                                                            onPress: () => console.log("Cancel Pressed"),
                                                            style: "cancel"
                                                        },
                                                    ],
                                                    { cancelable: false }
                                                )
                                            ) : (
                                                auth().createUserWithEmailAndPassword(account, rePassword)
                                                    .then(() => {
                                                        ToastAndroid.showWithGravityAndOffset(
                                                            "Đăng ký thành công!",
                                                            ToastAndroid.LONG,
                                                            ToastAndroid.BOTTOM,
                                                            25,
                                                            50
                                                        ),
                                                            userContext.setUser("LogIn")
                                                    }).catch(error => {
                                                        if (error.code == 'auth/email-already-in-use') {
                                                            ToastAndroid.showWithGravity(
                                                                "Tài khoản đã tồn tại",
                                                                ToastAndroid.LONG,
                                                                ToastAndroid.BOTTOM,
                                                                25, 50
                                                            )
                                                        }
                                                        if (error.code === 'auth/invalid-email') {
                                                            ToastAndroid.showWithGravity(
                                                                "Tài khoản không hợp lệ",
                                                                ToastAndroid.LONG,
                                                                ToastAndroid.BOTTOM,
                                                                25, 50
                                                            )
                                                        }
                                                        console.error(error);
                                                    })
                                            )
                                    )
                            }}
                        >Đăng ký</Text>
                    </TouchableOpacity>
                </ImageBackground>
            </View>

        </ImageBackground>
    )
}
const style = StyleSheet.create({
    inputTextStyle: {

        width: 300,
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        marginTop: "2%",
        paddingLeft: 20,
        paddingRight: 30,
        fontSize: 15
    },
    textStyle:
    {
        marginTop: "3%",
        fontSize: 17,
        color: '#DF5305',
    }
})
export default DangKy;