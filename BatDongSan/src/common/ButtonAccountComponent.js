import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/MaterialIcons"
import InputTextComponent from '../common/InputTextComponent'
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    StyleSheet
} from 'react-native';
const ButtonAccountComponent = ({ textName, navigation }) => {
    const [visible, setVisible] = useState(false)
    return (
        <View
            style=
            {{
                justifyContent: 'center',
                alignItems: 'center',
                marginVertical: 10
            }}
        >
            <TouchableOpacity
                style=
                {{
                    backgroundColor: 'white',
                    borderColor: '#FFA605',
                    borderWidth: 1,
                    borderRadius: 5,
                    width: "80%",
                    padding: 10
                }}
                onPress={
                    () => {
                        // textName = "Đổi mật khẩu" ? navigation.navigate("ChangePassword") : (
                        //     textName = "Chỉnh sửa thông tin" ? setVisible(true) : (alert(123, 123))
                        //                         switch ( textName){
                        //                    case "Đổi mật khẩu":
                        // (navigation.navigate("ChangePassword"))
                        // break;
                        // default:
                        //     break;         
                        //     }

                        // )
                        switch (textName) {
                            case "Đổi mật khẩu":
                                navigation.navigate("DoiMatKhau")
                                break;
                            case "Chỉnh sửa thông tin":
                                setVisible(!visible)
                            default:
                                break;
                        }
                    }
                }
            >

                <Text
                    style=
                    {{
                        textAlign: 'center',
                        fontSize: 20,
                        color: '#FFA605'
                    }}
                >
                    {textName}
                </Text>
            </TouchableOpacity>
            <Modal
                animationType="slide"
                transparent={true}
                visible={visible}
            >
                <View style={style.backgoundModal}>
                    <View style=
                        {{
                            margin: 20,
                            backgroundColor: "white",
                            width: 350,
                            height: 200,
                            shadowColor: "#000",
                            shadowOffset:
                            {
                                width: 0,
                                height: 2
                            },
                            shadowOpacity: 0.25,
                            shadowRadius: 3.84,
                            elevation: 5,
                            borderRadius: 10
                        }}
                    >
                        <View
                            style=
                            {{
                                padding: 10,

                            }}
                        >
                            <InputTextComponent textName="Số điện thọai" />
                        </View>
                        <View
                            style=
                            {{
                                flexDirection: 'row',
                                flex: 1,
                                justifyContent: 'space-between'
                            }}
                        >
                            <TouchableOpacity
                                style={style.buttonClose}
                                onPress={() => {
                                    setVisible(!visible);
                                }}
                            >
                                <Text style={style.textStyleClose}>Lưu</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={style.buttonClose1}
                                onPress={() => {
                                    setVisible(!visible);
                                }}
                            >
                                <Text style={style.textStyleClose}>Đóng</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </Modal>
        </View >

    )
}
const style = StyleSheet.create({
    Touch:
    {
        margin: 10
    },
    backgoundModal:
    {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0,0.5)'
    },

    textStyle:
    {
        color: "black",
        fontSize: 20,
        marginLeft: 15,
        marginTop: 20,
        textAlign: 'center'
    },
    textStyle1:
    {
        color: "black",
        fontSize: 15,
        marginLeft: 15,
        marginTop: 5,
        textAlign: 'center'
    },
    textStyleClose:
    {
        color: "black",
        fontSize: 20,
        textAlign: "center"
    },
    buttonClose:
    {
        backgroundColor: "white",
        width: 70,
        padding: 10,
        marginTop: 20,
        elevation: 2,
        height: 50,
        marginHorizontal: 50,
        borderWidth: 1,

    },
    buttonClose1:
    {
        backgroundColor: "white",
        width: 70,
        padding: 10,
        marginTop: 20,
        elevation: 2,
        height: 50,
        marginHorizontal: 50,
        color: "#FFA605",
        borderWidth: 1,
        borderColor: "#FFA605"
    },
    textMoreStyle:
    {
        color: "#A09EA0",
        fontSize: 15,
        marginLeft: 15,
        marginTop: 5,
        marginBottom: 5
    }
})
export default ButtonAccountComponent