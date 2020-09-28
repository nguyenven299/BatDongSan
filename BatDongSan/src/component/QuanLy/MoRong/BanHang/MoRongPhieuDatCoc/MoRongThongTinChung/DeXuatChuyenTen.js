import React, { useState } from 'react';
import ButtonComponent from '../../../common/ButtonComponent'
import InputTextComponent from '../../../common/InputTextComponent'
import MultiLineTextInputComponent from '../../../common/MultiLineTextInputComponent'
import ButtonRefesh from '../../../common/ButtonRefesh'


import {
    View,
    ScrollView
} from 'react-native';
const DeXuatChuyenTen = ({ navigation }) => {
    navigation.setOptions({
        headerRight: () => (
            <View
                style=
                {{
                    flexDirection: 'row',
                }}>
                <TouchableOpacity
                    onPress=
                    {
                        () => {
                            // setActivity(1)
                        }
                    }
                    style={style.Touch}
                >
                    <FontAwesome
                        name="save" size={25} color='white'

                    ></FontAwesome>
                </TouchableOpacity>


            </View>

        ),
        headerTitle: () =>
            (
                <Text>
                    Đề xuất chuyển tên
                </Text>
            )
    });

    return (
        <View>
            <ScrollView>
                <InputTextComponent textName="Tiêu đề" />
                <ButtonComponent textName="Loại chứng từ" />
                <ButtonComponent textName="Phiếu đặt cọc" />
                <ButtonComponent textName="Phí chuyển tên" />
                <InputTextComponent textName="Lý do" />
                <InputTextComponent textName="Hoa hồng" />

                <ButtonComponent textName="Nhân viên" />
                <View
                    style=
                    {{
                        backgroundColor: 'orange',
                        width: '95%',
                        height: 50,
                        borderRadius: 5,
                        alignContent: 'center',
                        justifyContent: 'center',
                        marginTop: 10

                    }}
                >
                    <Text
                        style=
                        {{
                            color: 'white',
                            fontSize: 20,
                            margin: 20
                        }}
                    >
                        Thông tin thay đổi
                </Text>
                </View>
                <ButtonRefesh textName="Khách hàng" />
                <ButtonRefesh textName="Hình thức thanh toán" />
                <ButtonRefesh textName="Tài khoản ngân hàng" />
                <ButtonRefesh textName="Chủ tài khoản" />
                <ButtonRefesh textName="Ngân hàng" />
                <ButtonRefesh textName="Chi nhánh ngân hàng" />
                <ButtonRefesh textName="Trạng thái" />
                <ButtonRefesh textName="Khách hàng đồng sở hữu" />
            </ScrollView>
        </View>
    )
}
export default DeXuatChuyenTen;