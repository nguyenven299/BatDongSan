import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
const Stack = createStackNavigator();
import DangNhap from '../TrangChinh/DangNhap.js'
import DangKy from '../TrangChinh/DangKy'

const DangNhapNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={DangNhap}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="DangKy"
                    component={DangKy}
                    options=
                    {{
                        headerStyle: { backgroundColor: '#FFA400' },
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default DangNhapNavigation;
