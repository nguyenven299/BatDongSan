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
const LayLaiMatKhau = ({ navigation }) => {
    const [Account, setAccount] = useState()
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
                            height: "50%"
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
                                    Tài khoản (Email)
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
                            <TouchableOpacity
                                style={{
                                    backgroundColor: "#FFEEB6",
                                    width: "40%",
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
                                        if (Account != null || Account != "undefined") {
                                            auth().sendPasswordResetEmail(Account).then(() => {
                                                Alert.alert(
                                                    "Thành công",
                                                    "Vui lòng kiểm tra tin nhắn Gmail của bạn",
                                                )
                                            })
                                                .catch((error) => {
                                                    Alert.alert(
                                                        "Lỗi",
                                                        "Có vẻ xảy ra lỗi\nVui lòng thử lại",
                                                    )
                                                })
                                        }
                                    }}
                                >Lấy lại mật khẩu</Text>
                            </TouchableOpacity>

                        </ImageBackground>

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
export default LayLaiMatKhau;