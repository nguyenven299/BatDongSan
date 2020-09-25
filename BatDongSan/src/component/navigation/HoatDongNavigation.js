import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HoatDong from '../HoatDong/HoatDong.js'
import TaoCuocGoi from '../HoatDong/MoRong/TaoCuocGoi'
// import TaoPhieuTiepKhach from '../HoatDong/MoRong/TaoPhieuTiepKhach'
import TaoPhieuTiepKhach from '../KhachHang/MoRong/KhachHangTiemNang'

import { ImageBackground, Image } from 'react-native';
import { max } from 'moment';
import { TouchableOpacity, Text, Button } from 'react-native-gesture-handler';

const Stack = createStackNavigator();
function LogoTitle() {
    return (
        <Image
            style={{

                width: "100%",
                height: 55
            }}
            source={require('../../assest/BG.jpg')}
        />
    );
}
const HoatDongNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="HoatDong" component={HoatDong}
                options=
                {{
                    title: 'Công việc của tôi',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                    // headerRight: () => (
                    //     <Button
                    //         onPress={() => alert('This is a button!')}
                    //         title="Info"
                    //         color="#fff"
                    //     />
                    // ),
                }}
            />

            <Stack.Screen
                name="TaoCuocGoi" component={TaoCuocGoi}
                options=
                {{
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,

                }}
            />
            <Stack.Screen
                name="TaoPhieuTiepKhach" component={TaoPhieuTiepKhach}
                options=
                {{
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,

                }}
            />
        </Stack.Navigator>
    )
}
export default HoatDongNavigation;