import React, { useState } from 'react';
import OptionSetComponent from '../../../common/HoatDong/OptionSetComponent'
import TextInputComponent from '../../../common/HoatDong/TextInputComponent'
import MultiInputCuocGoiComponent from '../../../common/HoatDong/MultiInputCuocGoiComponent'
import ButtonRefesh from '../../../common/ButtonRefesh'
import FontAwesome from "react-native-vector-icons/FontAwesome"

import {
    View,
    ScrollView,
    Text,
    TouchableOpacity
} from 'react-native';
const DeXuatBanSi = ({ navigation }) => {
    const [tieuDe, setTieuDe] = useState()
    const [duAn, setDuAn] = useState()
    const [dotPhatHanh, setDotPhatHanh] = useState()
    const [khachHang, setKhachHang] = useState()
    const [dienGiai, setDienGiai] = useState()
    const [trangThai, setTrangThai] = useState()

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
                // style={style.Touch}
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
                // style={style.Touch}

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
                <TextInputComponent
                    textName="Tiêu đề"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setTieuDe}
                    value={tieuDe}
                />
                <OptionSetComponent textName="Dự án"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setDuAn}
                    value={duAn}
                    caret={true}
                />
                <OptionSetComponent textName="Đợt phát hành"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setDotPhatHanh}
                    value={dotPhatHanh}
                    caret={true}
                />
                <OptionSetComponent textName="Khách hàng"
                    disable={true}
                    visible={true}
                    required={true}
                    setValue={setKhachHang}
                    value={khachHang}
                    caret={true}
                />
                <MultiInputCuocGoiComponent
                    textName="Diễn giải"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setDienGiai}
                    value={dienGiai} />
                <OptionSetComponent textName="Trạng thái"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setTrangThai}
                    value={trangThai}
                    caret={true}
                />
                <ButtonRefesh textName="Khách đồng sở hữu" />
                <ButtonRefesh textName="Sản phẩm bán sỉ" />
            </ScrollView>
        </View >
    )
}
export default DeXuatBanSi;