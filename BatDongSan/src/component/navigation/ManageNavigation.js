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
import DepositSlip from '../Manager/More/Agency/DepositSlip'
import DepositSlip3 from '../Manager/More/Agency/DespositSlip3'
import Rule from '../Manager/More/Contract/Rule'
import Borrow from '../Manager/More/Contract/Borrow'
import Sale from '../Manager/More/Contract/Sale'
import Services from '../Manager/More/Contract/Services'
import Revenue from '../Manager/More/Ultilities/Revenue'
import Product from '../Manager/More/Ultilities/Product'
import FavoriteProduct from '../Manager/More/Ultilities/FavoriteProduct'
import Book from '../Manager/More/Ultilities/Book'
import Account from '../Manager/More/Ultilities/Account'
import ChangePassword from '../Manager/More/Ultilities/ChangePassword'
import Document from "../Manager/More/Ultilities/Document"
import Rename from "../Manager/More/Ultilities/Rename"
import CreateRename from "../Manager/More/Ultilities/CreateRename"
import ChangeInforCustomer from "../Manager/More/Ultilities/ChangeInforCustomer"
import CreateChangeInforCustomer from '../Manager/More/Ultilities/CreateChangeInforCustomer'
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
            <Stack.Screen
                name="DepositSlip" component={DepositSlip}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="DepositSlip3" component={DepositSlip3}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="Rule" component={Rule}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />

            <Stack.Screen
                name="Borrow" component={Borrow}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="Sale" component={Sale}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="Services" component={Services}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />

            <Stack.Screen
                name="Revenue" component={Revenue}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />

            <Stack.Screen
                name="Product" component={Product}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="FavoriteProduct" component={FavoriteProduct}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="Book" component={Book}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="Account" component={Account}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />

            <Stack.Screen
                name="ChangePassword" component={ChangePassword}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />

            <Stack.Screen
                name="Document" component={Document}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="Rename" component={Rename}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="CreateRename" component={CreateRename}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />

            <Stack.Screen
                name="ChangeInforCustomer" component={ChangeInforCustomer}
                options=
                {{
                    // title: 'Quản lý',
                    headerTintColor: '#fff',
                    headerBackground: props => <LogoTitle {...props} />,
                }}
            />
            <Stack.Screen
                name="CreateChangeInforCustomer" component={CreateChangeInforCustomer}
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