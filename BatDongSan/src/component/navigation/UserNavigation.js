import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import User from '../User/User'
import { ImageBackground, Image } from 'react-native';
import { TouchableOpacity, Text, Button } from 'react-native-gesture-handler';
import Customer from '../User/Customer'
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
const UserNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="User" component={User}
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
                name="Customer" component={Customer}
                options=
                {{
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,

                }}
            />

        </Stack.Navigator>
    )
}
export default UserNavigation;