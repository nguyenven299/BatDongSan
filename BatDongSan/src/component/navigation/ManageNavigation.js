import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Manage from '../Manager/Manage'
import Wholesale from '../Manager/More/Sale/Wholesale'
import Booking from '../Manager/More/Sale/Booking'
import ScrollComponent from '../../common/ScrollComponent'
import Reservations from '../Manager/More/Sale/Reservations'
import Deposit from '../Manager/More/Sale/Deposit'
import CancelDeposit from '../Manager/More/Sale/CancelDeposit'
import Action from '../Manager/More/CapitalContribution/Action'
import Offer from '../Manager/More/CapitalContribution/Offer'
import CreateRevenue from '../Manager/More/CapitalContribution/CreateRevenue'
import AgencyRequest from '../Manager/More/Agency/AgencyRequest'
import CreateAgency from '../Manager/More/Agency/CreateAgency'
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
const ManageNavigation = () => {
    return (
        <Stack.Navigator>

            <Stack.Screen
                name="Manage" component={Manage}
                options=
                {{
                    title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />

            <Stack.Screen
                name="Wholesale" component={Wholesale}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="ScrollComponent" component={ScrollComponent}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="Booking" component={Booking}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="Reservations" component={Reservations}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="Deposit" component={Deposit}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="CancelDeposit" component={CancelDeposit}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="Action" component={Action}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="Offer" component={Offer}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="CreateRevenue" component={CreateRevenue}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="AgencyRequest" component={AgencyRequest}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="CreateAgency" component={CreateAgency}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
        </Stack.Navigator>
    )
}
export default ManageNavigation;