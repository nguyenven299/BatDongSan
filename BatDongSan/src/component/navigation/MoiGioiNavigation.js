import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import MoiGioi from '../MoiGioi/MoiGioi'
import PhieuDatCoc72h from '../MoiGioi/MoRong/PhieuDatCoc72h'

import { Image } from 'react-native';

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
const MoiGioiNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="MoiGioi" component={MoiGioi}
                options=
                {{
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="PhieuDatCoc72h" component={PhieuDatCoc72h}
                options=
                {{
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />

        </Stack.Navigator>
    )
}
export default MoiGioiNavigation;