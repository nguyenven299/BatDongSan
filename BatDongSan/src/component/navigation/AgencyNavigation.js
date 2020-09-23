import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Agency from '../Agency/Aagency'
import Deposit from '../Agency/More/Deposit'
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
const AgencyNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Agnecy" component={Agency}
                options=
                {{
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="Deposit" component={Deposit}
                options=
                {{
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />

        </Stack.Navigator>
    )
}
export default AgencyNavigation;