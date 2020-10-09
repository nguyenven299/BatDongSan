import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import TextInputComponent from '../../../../../../common/InputTextComponent'
import ButtonConponent from '../../../../../../common/ButtonComponent'
import ButtonRefesh from '../../../../../../common/ButtonRefesh'
import {
    View,
    TouchableOpacity,
    ScrollView,
    Text
} from 'react-native';
const DeXuatDoiTTKH = ({ navigation }) => {
    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity
                onPress={() => {

                }}
                style=
                {{
                    padding: 15
                }}
            >
                <FontAwesome
                    name="save" size={20} color='white'
                    style=
                    {{
                        marginRight: 10
                    }}
                ></FontAwesome>
            </TouchableOpacity>
        ),
        title: "Đề xuất đổi TTKH",
    });

    return (
        <View>
            <ScrollView>
                <TextInputComponent textName="Tiêu đề" />
                <ButtonConponent textName="Khách hàng" />
                <TextInputComponent textName="Lý do" />
                <ButtonConponent textName="Nhân viên" />
                <ButtonConponent textName="Trạng thái" />
                <View
                    style=
                    {{
                        backgroundColor: '#FFA605',
                        height: 50,
                        marginHorizontal: 20,
                        marginVertical: 20,
                        padding: 20,
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style=
                        {{
                            fontSize: 20,
                            color: 'white'
                        }}
                    >
                        Thông tin cũ
                    </Text>
                </View>
                <ButtonConponent textName="Số CMND" />
                <ButtonConponent textName="Ngày cấp CMND" />
                <ButtonConponent textName="Nơi cấp CMND" />
                <ButtonConponent textName="Số CCCD" />
                <ButtonConponent textName="Nơi cấp CMND" />
                <TextInputComponent textName="Ngày cấp CCCD" />
                <TextInputComponent textName="Số Passport" />
                <ButtonConponent textName="Nơi cấp Passport" />
                <TextInputComponent textName="Ngày cấp Passport" />
                <View
                    style=
                    {{
                        backgroundColor: '#FFA605',
                        height: 50,
                        alignContent: 'center',
                        padding: 20,
                        justifyContent: 'center'
                    }}
                >
                    <Text
                        style=
                        {{
                            fontSize: 20,
                            color: 'white'
                        }}
                    >
                        Thông tin mới
                    </Text>
                </View>
                <ButtonConponent textName="Ngày cấp CMND" />
                <ButtonConponent textName="Nơi cấp CMND" />
                <ButtonConponent textName="Số CCCD" />
                <ButtonConponent textName="Nơi cấp CMND" />
                <TextInputComponent textName="Ngày cấp CCCD" />
                <TextInputComponent textName="Số Passport" />
                <ButtonConponent textName="Nơi cấp Passport" />
                <TextInputComponent textName="Ngày cấp Passport" />
            </ScrollView>

        </View>
    )
}
export default DeXuatDoiTTKH;