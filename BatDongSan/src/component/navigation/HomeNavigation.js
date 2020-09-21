import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Action/Home.js'
import MakeACall from '../Action/More/MakeACall'
import CreateReceptions from '../Action/More/CreateReceptions'
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
const HomeNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Home" component={Home}
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
                name="MakeACall" component={MakeACall}
                options=
                {{
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,

                }}
            />
            <Stack.Screen
                name="CreateReceptions" component={CreateReceptions}
                options=
                {{
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,

                }}
            />
        </Stack.Navigator>
    )
}
export default HomeNavigation;