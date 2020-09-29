import React, { useState } from 'react';
import ButtonComponent from '../../../../../common/ButtonComponent'
import InputTextComponent from '../../../../../common/InputTextComponent'
import MultiLineTextInputComponent from '../../../../../common/MultiLineTextInputComponent'
import ButtonRefesh from '../../../../../common/ButtonRefesh'
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import ButtonThongTinCKComponent from '../../../../../common/ButtonThongTinCKComponent'
import {
    View,
    Text
} from 'react-native';
const ThongTinCK = ({ navigation }) => {
    const [ratTiemNang, setRatTiemNang] = useState(false);
    const [TiemNang, setTiemNang] = useState(false);
    const [binhThuong, setBinhThuong] = useState(false);
    const [khongQuanTam, setKhongQuanTam] = useState(false);
    return (
        <View>
            <View
                style=
                {{
                    backgroundColor: 'orange',
                    height: 50,

                    alignContent: 'center',
                    justifyContent: 'center',

                    paddingHorizontal: 10,
                    marginBottom: 20,

                }}
            >
                <Text
                    style=
                    {{
                        fontSize: 20,
                        color: 'white'
                    }}
                >
                    Thông tin chiết khấu/Khuyến mãi
                    </Text>
            </View>
            <ButtonThongTinCKComponent STT="1" NoiDung="Tặng 15 chỉ vàng với SP ĐNNP và NXS-Dưới 115m2" SoTien="85.5 triệu" GhiChu="Trừ vào giá" />
            <ButtonThongTinCKComponent STT="3" NoiDung="CSBS ĐN-NPXS dưới 115m2" SoTien="114 triệu" GhiChu="Trừ vào giá" />
            <ButtonThongTinCKComponent STT="7" NoiDung="CK 5% ĐNNP và NXS dưới 115m2" SoTien="0" GhiChu="Trừ vào giá" />
            <ButtonThongTinCKComponent STT="10" NoiDung="CK TT Sớm-Có vay và Không vay ngân hàng" SoTien="0" GhiChu="Trừ vào giá" />

        </View>
    )
}
export default ThongTinCK;