import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import InputTextSearchComponent from '../../../../common/InputTextSearchComponent'
import ModalManageComponent from '../../../../common/ModalManageComponent'
import ButtonAccountComponent from '../../../../common/ButtonAccountComponent'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    ScrollView, Image, ImageBackground
} from 'react-native';

const Account = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [Model, setModel] = useState("Khởi tạo")
    navigation.setOptions({
        headerRight: () => (

            <TouchableOpacity
                onPress=
                {
                    () => {
                        // navigation.navigate("CreateAgency")
                    }
                }
                style={{
                    padding: 5,
                    margin: 10
                }}
            >
                <FontAwesome
                    name="qrcode" size={20} color='white'
                    style={{ marginRight: 5 }}
                ></FontAwesome>
            </TouchableOpacity>
        ),
        headerTitle: () =>
            (

                <Text
                    style=
                    {{
                        fontSize: 20,
                        marginVertical: 20,
                        color: 'white'
                    }}
                >
                    Tài khoản
                </Text>
            )

    });
    return (
        <View
            style={{ backgroundColor: 'white' }}
        >
            <ScrollView>
                <View
                    style=
                    {{
                        height: 200,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <ImageBackground
                        style=
                        {{
                            width: 160,
                            height: 160,

                        }}
                        imageStyle={{
                            borderRadius: 100,
                            borderWidth: 5,
                            borderColor: '#FFA605'
                        }}
                        source={require('../../../../assest/BG.jpg')}
                    >
                        <View
                            style=
                            {{
                                backgroundColor: 'white',
                                borderRadius: 50,
                                borderWidth: 1,
                                borderColor: '#FFA605',
                                position: 'absolute',
                                bottom: 10,
                                right: 10,
                                justifyContent: 'center',
                                alignItems: 'center',
                                padding: 7
                            }}
                        >
                            <TouchableOpacity>
                                <FontAwesome
                                    name="image" size={20} color='#FFA605'
                                    style={{

                                        backgroundColor: 'white',
                                        borderColor: '#FFA605',

                                    }}
                                ></FontAwesome>
                            </TouchableOpacity>

                        </View>

                    </ImageBackground>
                </View>
                <View
                    style={style.viewStyle}>
                    <Text style={style.textStyle}>
                        Mã nhân viên:
                    </Text>
                    <Text style={style.textStyle1}>KOG026</Text>
                </View>
                <View
                    style={style.viewStyle}>
                    <Text style={style.textStyle}>
                        Họ tên nhân viên:
                    </Text>
                    <Text style={style.textStyle1}>Lê Thị Lai</Text>
                </View>
                <View
                    style={style.viewStyle}>
                    <Text style={style.textStyle}>
                        Số điện thoại:
                    </Text>
                    <Text style={style.textStyle1}>0966515503</Text>
                </View>
                <View
                    style={style.viewStyle}>
                    <Text style={style.textStyle}>
                        Email:
                    </Text>
                    <Text style={style.textStyle1}>lailt@diaokimoanh.com.vn</Text>
                </View>
                <View
                    style={style.viewStyle}>
                    <Text style={style.textStyle}>
                        Phòng kinh doanh:
                    </Text>
                    <Text style={style.textStyle1}>Phòng KD 01 - TĐ</Text>
                </View>
                <View
                    style={style.viewStyle}>
                    <Text style={style.textStyle}>
                        Sàn kinh doanh:
                    </Text>
                    <Text style={style.textStyle1}>TĐ</Text>
                </View>
                <View
                    style={style.viewStyle}>
                    <Text style={style.textStyle}>
                        Số điện thoại hỗ trợ:
                    </Text>
                    <Text style={style.textStyle1}></Text>
                </View>
                <View
                    style={style.viewStyle}>
                    <Text style={style.textStyle}>
                        Version:
                    </Text>
                    <Text style={style.textStyle1}>2.0.0</Text>
                </View>
                <ButtonAccountComponent textName="Đổi mật khẩu" navigation={navigation} />
                <ButtonAccountComponent textName="Chỉnh sửa thông tin" navigation={navigation} />
                <ButtonAccountComponent textName="Đăng xuất" />

            </ScrollView>

        </View>
    )
}
const style = StyleSheet.create({
    viewStyle:
    {
        flexDirection: 'row',
        margin: 10
    },
    textStyle:
    {
        fontSize: 18,
        margin: 5,
        marginLeft: 10,
    },
    textStyle1:
    {
        fontSize: 18,
        margin: 5,

        fontWeight: 'bold'
    }
})
export default Account;
