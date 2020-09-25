import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import KhachHang from '../KhachHang/KhachHang'
import Loc from '../KhachHang/MoRong/Loc'
import { ImageBackground, Image } from 'react-native';
import { TouchableOpacity, Text, Button } from 'react-native-gesture-handler';
import TaoPhieuKhachHang from '../KhachHang/MoRong/TaoKhachHang'
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
const KhachHangNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="KhachHang" component={KhachHang}
                options=
                {{
                    title: null,
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
                name="TaoPhieuKhachHang" component={TaoPhieuKhachHang}
                options=
                {{
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,

                }}
            />
            <Stack.Screen
                name="Loc" component={Loc}
                options=
                {{
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,

                }}
            />
        </Stack.Navigator>
    )
}
export default KhachHangNavigation;