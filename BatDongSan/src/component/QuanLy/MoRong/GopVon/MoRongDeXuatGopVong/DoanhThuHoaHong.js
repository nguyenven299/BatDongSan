import React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import TextInputComponent from '../../../../../common/HoatDong/TextInputComponent'
import InputTextCurrentcy from '../../../../../common/HoatDong/InputTextCurrentcy'
import ButtonRefesh from '../../../../../common/ButtonRefesh'
import {
    View, ScrollView
} from 'react-native';
const DoanhThuHoaHong = ({ navigation }) => {
    const [doanhThu, setDoanhThu] = useState("")
    const [hoaHong, setHoaHong] = useState("")
    const [chiaSeDoanhThu, setChiaSeDoanhThu] = useState("")
    const [chiaSeHoaHong, setChiaSeHoaHong] = useState("")
    return (
        <View>
            <ScrollView>
                <InputTextCurrentcy
                    textName="Doanh thu (Số tiền)"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setDoanhThu}
                    value={doanhThu}
                />
                <InputTextCurrentcy
                    textName="Hoa hồng (Số tiền)"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setHoaHong}
                    value={hoaHong}
                />
                <ButtonRefesh textName="Chia sẻ doanh thu" />
                <ButtonRefesh textName="Chia sẻ hoa hồng" />
            </ScrollView>
        </View>
    )
}
export default DoanhThuHoaHong;