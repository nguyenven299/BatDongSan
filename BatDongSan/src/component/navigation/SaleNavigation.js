import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Sale from '../Sale/Sale'
import CreateSale from '../Sale/More/CreateSale.js'
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
const SaleNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Sale" component={Sale}
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
                name="CreateSale" component={CreateSale}
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
export default SaleNavigation;