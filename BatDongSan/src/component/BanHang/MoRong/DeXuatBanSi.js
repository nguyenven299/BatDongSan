import React, { useState } from 'react';
import ButtonComponent from '../../../common/ButtonComponent'
import InputTextComponent from '../../../common/InputTextComponent'
import MultiLineTextInputComponent from '../../../common/MultiLineTextInputComponent'
import ButtonRefesh from '../../../common/ButtonRefesh'
import FontAwesome from "react-native-vector-icons/FontAwesome"

import {
    View,
    ScrollView
} from 'react-native';
const DeXuatBanSi = ({ navigation }) => {
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
                <TouchableOpacity
                    onPress=
                    {
                        () => {
                            // setActivity(2)
                        }
                    }
                    style={style.Touch}

                >
                    <FontAwesome
                        name="ellipsis-v" size={25} color='white'

                    ></FontAwesome>
                </TouchableOpacity>
            </View>
        ),
        headerTitle: () =>
            (
                <Text>
                    Đề xuất bán sỉ
                </Text>
            )
    });

    return (
        <View>
            <ScrollView>
                <InputTextComponent textName="Tiêu đề" />
                <ButtonComponent textName="Dự án" />
                <ButtonComponent textName="Đợt phát hành" />
                <ButtonComponent textName="Khách hàng" />
                <MultiLineTextInputComponent textName="Diễn giải" />
                <ButtonComponent textName="Trạng thái" />
                <ButtonRefesh textName="Khách đồng sở hữu" />
                <ButtonRefesh textName="Sản phẩm bán sỉ" />
            </ScrollView>
        </View >
    )
}
export default DeXuatBanSi;