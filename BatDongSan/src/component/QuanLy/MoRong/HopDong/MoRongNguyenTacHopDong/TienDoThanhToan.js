import React, { useState } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"
import TextInputComponent from '../../../../../common/HoatDong/TextInputComponent'
import OptionSetComponent from '../../../../../common/HoatDong/OptionSetComponent'
import InputTextCurrentcy from '../../../../../common/HoatDong/InputTextCurrentcy'
import {
    View, ScrollView
} from 'react-native';
import InputTextComponent from '../../../../../common/ButtonComponent';
import ButtonRefesh from '../../../../../common/ButtonRefesh';
const TienDoThanhToan = ({ navigation }) => {
    const [chinhSachThanhToan, setChinhSachThanhToan] = useState("")
    const [hinhThucMuaSanPham, setHinhThucMuaSanPham] = useState("")
    const [soNgayChoPhepTreHan, setSoNgayChoPhepTreHan] = useState("")
    const [soTienDaThanhToan, setSoTienDaThanhToan] = useState("")
    const [soTienConLai, setSoTienConLai] = useState("")
    var HinhThucMuaSanPham = ["Mua mới", "Góp vốn chuyển sang mua", "Thanh lý chuyên sang mua"]
    return (
        <View>
            <ScrollView>
                <OptionSetComponent
                    textName="Chính sách thanh toán"
                    disable={false}
                    visible={true}
                    required={true}
                    setValue={setChinhSachThanhToan}
                    value={chinhSachThanhToan}
                />
                <OptionSetComponent
                    textName="Hình thức mua sản phẩm"
                    disable={true}
                    visible={true}
                    required={false}
                    setValue={setHinhThucMuaSanPham}
                    value={hinhThucMuaSanPham}
                    dataOption={HinhThucMuaSanPham}
                />
                <TextInputComponent
                    textName="Số ngày cho phép trễ hạn(ngày)"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setSoNgayChoPhepTreHan}
                    value={soNgayChoPhepTreHan}
                />
                <TextInputComponent
                    textName="Số tiền đã thanh tóan"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setSoTienDaThanhToan}
                    value={soTienDaThanhToan}
                />
                <TextInputComponent
                    textName="Số tiền còn lại"
                    disable={false}
                    visible={true}
                    required={false}
                    setValue={setSoTienConLai}
                    value={soTienConLai}
                />
                <ButtonRefesh
                    textName="Danh sác đợt thanh toán"

                />
            </ScrollView>
        </View>
    )
}
export default TienDoThanhToan;