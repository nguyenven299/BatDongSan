import React, { useState, useContext, useEffect } from 'react';
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
    Alert, ToastAndroid,
    StyleSheet
} from 'react-native';
import { UserContext } from '../../../App';
const DangNhap = ({ navigation }) => {
    const [Icons, setIcon] = useState("eye")
    const [Account, setAccount] = useState()
    const [Password, setPassword] = useState()
    const [hidePassword, setHidePassword] = useState(true)
    const userContext = useContext(UserContext)
    var user = auth().currentUser
    if (user) {
        userContext.setUser(user)
    }
    else {
        userContext.setUser(null)
    }

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
                        style={{
                            width: "80%",
                            height: "60%"
                        }}
                    >
                        <ImageBackground
                            source={require('../../assest/bg-02.png')}
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

                            <View
                                style=
                                {{
                                    alignItems: 'center',
                                    height: 40,
                                    width: "90%",
                                }}
                            >
                                <Text
                                    style=
                                    {{
                                        marginTop: "35%",
                                        fontSize: 17,
                                        color: '#DF5305'
                                    }}
                                >
                                    Tên đăng nhập
                            </Text>
                                <View
                                    style={style.viewStyle}
                                >
                                    <TextInput
                                        style=
                                        {{
                                            width: "90%",
                                            height: 40,
                                            fontSize: 17,
                                            marginLeft: "5%"
                                        }}
                                        keyboardType="email-address"
                                        onChangeText={text => setAccount(text)}
                                        value={Account}
                                    >
                                    </TextInput>

                                    <FontAwesome name="user" color={"#D88B00"} size={20}
                                        style={{
                                            width: "10%",
                                            marginRight: 10,
                                        }}
                                    />
                                </View>

                            </View>

                            <View
                                style=
                                {{
                                    alignItems: 'center',
                                    height: 40,
                                    width: "90%",
                                    marginTop: '15%'
                                }}
                            >
                                <Text
                                    style=
                                    {{
                                        marginTop: "35%",
                                        fontSize: 17,
                                        color: '#DF5305'
                                    }}
                                >
                                    Mật khẩu
                            </Text>
                                <View
                                    style={style.viewStyle}
                                >
                                    <TextInput
                                        style=
                                        {{
                                            width: "77%",
                                            height: 40,
                                            fontSize: 17,
                                            marginLeft: "5%"
                                        }}
                                        secureTextEntry={hidePassword}
                                        onChangeText={text => setPassword(text)}
                                    >
                                    </TextInput>
                                    <TouchableOpacity
                                        style={{
                                            width: "10%",
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
                                            width: "10%",
                                            marginRight: 5,
                                        }}
                                    />
                                </View>



                            </View>
                            <TouchableOpacity
                                style=
                                {{
                                    marginTop: "50%"
                                }}
                                onPress={() => {
                                    navigation.navigate("LayLaiMatKhau")
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

                                        if (Account == null || Account == 'undefined' || Password == null || Password == "undefined") {

                                            Alert.alert(
                                                "Dữ liệu trống",
                                                "Vui lòng nhập đầy đủ thông tin"
                                            )
                                        }
                                        else {
                                            auth().signInWithEmailAndPassword(Account, Password)
                                                .then(() => {
                                                    ToastAndroid.showWithGravityAndOffset(
                                                        "Đăng nhập thành công!",
                                                        ToastAndroid.LONG,
                                                        ToastAndroid.BOTTOM,
                                                        25,
                                                        50
                                                    )
                                                    userContext.setUser("LogIn")
                                                })
                                                .catch(function (error) {
                                                    ToastAndroid.showWithGravityAndOffset(
                                                        "Đăng nhập thất bại!",
                                                        ToastAndroid.LONG,
                                                        ToastAndroid.BOTTOM,
                                                        25,
                                                        50
                                                    )
                                                })
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
        </KeyboardAvoidingView >
    )
}
const style = StyleSheet.create({
    viewStyle:
    {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 40,
        backgroundColor: 'white',
        borderRadius: 20,
        alignContent: 'center',
        alignItems: 'center',
        marginTop: "5%"
    }
})
export default DangNhap;