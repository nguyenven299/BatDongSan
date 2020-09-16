import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"

import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
SignIn = () => {
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
                    <Text
                        style=
                        {{
                            fontSize: 30,
                            color: 'white',
                            marginTop: "15%"
                        }}
                    >
                        Đăng Ký
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
                                    height: 450,
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
                                    Họ và tên
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
                                            paddingRight: 30
                                        }}
                                    >
                                    </TextInput>
                                </View>
                                <Text
                                    style=
                                    {{
                                        marginTop: "5%",
                                        fontSize: 17,
                                        color: '#DF5305'
                                    }}
                                >
                                    Tài khoản (email)
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
                                            paddingRight: 30

                                        }}
                                    >

                                    </TextInput>
                                </View>
                                <Text
                                    style=
                                    {{
                                        marginTop: "5%",
                                        fontSize: 17,
                                        color: '#DF5305'
                                    }}
                                >
                                    Sàn kinh doanh
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
                                            paddingRight: 30

                                        }}
                                    >

                                    </TextInput>
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
export default SignIn;