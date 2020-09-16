import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import FontAwesome from "react-native-vector-icons/FontAwesome"

const Stack = createStackNavigator();
import {
    View,
    Text,
    ImageBackground,
    Image,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView
} from 'react-native';
import MyWork from '../Home/MyWork.js'
import User from '../User/User.js'
import Sale from '../Sale/Sale.js'
import Agency from '../Agency/agency.js'
import Manager from '../Manager/manager.js'
const Tab = createBottomTabNavigator();


const TabNavigation = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name="MyWork" component={MyWork}
                options={{
                    tabBarLabel: 'Hoạt động',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="home" color={"#D88B00"} size={30} />
                    ),
                    tabBarBadge: 2, // hiển thị thông báo 
                }}

            />
            <Tab.Screen name="UserTab" component={User}
                options={{
                    tabBarLabel: 'Khách hàng',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="users" color={"#D88B00"} size={30} />
                    ),
                    tabBarBadge: 0, // hiển thị thông báo 
                }}
            />

            <Tab.Screen name="Sale" component={Sale}
                options={{
                    tabBarLabel: 'Bán hàng',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="shopping-cart" color={"#D88B00"} size={30} />
                    ),
                    tabBarBadge: 0, // hiển thị thông báo 
                }}

            />
            <Tab.Screen name="Agency" component={Agency}
                options={{
                    tabBarLabel: 'Mô giới lẻ',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="user" color={"#D88B00"} size={30} />
                    ),
                    tabBarBadge: 0, // hiển thị thông báo 
                }}
            />

            <Tab.Screen name="Manager" component={Manager}
                options={{
                    tabBarLabel: 'Quản lý',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome name="tasks" color={"#D88B00"} size={30} />
                    ),
                    tabBarBadge: 0, // hiển thị thông báo 
                }}
            />
        </Tab.Navigator>
    )
}
export default TabNavigation;