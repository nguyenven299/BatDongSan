import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import ButtonComponent from '../../../../../common/ButtonComponent'
import MultiLineInputTextComponent from '../../../../../common/MultiLineTextInputComponent'
import ButtonRefesh from '../../../../../common/ButtonRefesh'
import OptionSetComponent from '../../../../../common/HoatDong/OptionSetComponent'
import OptionSetSearchComponent from '../../../../../common/HoatDong/OptionSetSearchComponent'
import TextInputComponent from '../../../../../common/HoatDong/TextInputComponent'
import DateComponemt from '../../../../../common/HoatDong/DateComponemt'

import {
    View, ScrollView
} from 'react-native';
const ChinhSachThanhToan = ({ navigation }) => {
    const [chinhSachThanhToan, setChinhSachThanhToan] = useState("")
    const [chinhSachThanhToanData, setChinhSachThanhToanData] = useState("Chính sách thanh toán")
    const [thoiHanGopVon, setThoiHanGopVon] = useState("")
    const [ngayKetThucDuKien, setNgayKetThuDuKien] = useState("")
    const [ngayBatDauDuKien, setNgayBatDauDuKien] = useState("")
    const [tienDoGopVon, setTienDoGopVon] = useState("")
    return (
        <View>
            <ScrollView>
                <OptionSetSearchComponent
                    textName="Chính sách thanh toán"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setChinhSachThanhToan}
                    value={chinhSachThanhToan}
                    value1={chinhSachThanhToanData}
                    setValue1={setChinhSachThanhToanData}
                    caret={true}
                />
                <DateComponemt
                    textName="Thời hạn góp vốn(tháng)"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setThoiHanGopVon}
                    value={thoiHanGopVon}
                />
                <Date textName='Ngày bắt đầu dự kiến'
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setNgayBatDauDuKien}
                    value={ngayBatDauDuKien}
                />
                <DateComponemt
                    textName="Ngày kết thúc dự kiến"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setNgayKetThuDuKien}
                    value={ngayKetThucDuKien}
                />
                <ButtonRefesh textName="Tiến độ góp vốn" />
            </ScrollView>
        </View>
    )
}
export default ChinhSachThanhToan;