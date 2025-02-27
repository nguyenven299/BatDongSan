import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import BanHang from '../BanHang/BanHang'
import TaoPhieuBanHang from '../BanHang/MoRong/TaoPhieuBanHang.js'
import DeXuatBanSi from '../BanHang/MoRong/DeXuatBanSi'
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
const BanHangNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="BanHang" component={BanHang}
                options=
                {{
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
                name="TaoPhieuBanHang" component={TaoPhieuBanHang}
                options=
                {{
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                    headerTitle: 'Đề xuất bán si'
                }}
            />
            <Stack.Screen
                name="DeXuatBanSi" component={DeXuatBanSi}
                options=
                {{
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                    headerTitle: 'Đề xuất bán si'
                }}
            />
        </Stack.Navigator>
    )
}
export default BanHangNavigation;