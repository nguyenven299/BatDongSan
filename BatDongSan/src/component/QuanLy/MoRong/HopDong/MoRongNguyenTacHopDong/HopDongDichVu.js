import React, { useState, useEffect } from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome5"
import ButtonRefesh from '../../../../../common/ButtonRefesh'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Altert
} from 'react-native';

const HopDongDichVui = ({ STT, NoiDung, SoTien, GhiChu }) => {
    const [type, setType] = useState(false)

    return (
        <View>
            <ButtonRefesh textName="Danh sách hợp đồng dịch vụ" />
        </View>
    )
}
export default HopDongDichVui