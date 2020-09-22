import * as React from 'react';
import FontAwesome from "react-native-vector-icons/FontAwesome"


// import User from '../navigation/MoalNavigation.js'
import AngencyNavigation from './AgencyNavigation'
import Manager from '../Manager/manager.js'
import HomeNavigation from '../Navigation/HomeNavigation.js'
import UserNavigation from '../Navigation/UserNavigation.js'
import SaleNavigation from '../Navigation/SaleNavigation.js'
import { ImageBackground, View, TouchableOpacity, Text, Alert } from 'react-native';

// const Tab = createMaterialBottomTabNavigator();
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
const Tab = createBottomTabNavigator();
function MyTabBar({ state, descriptors, navigation }) {
    const focusedOptions = descriptors[state.routes[state.index].key].options;

    if (focusedOptions.tabBarVisible === false) {
        return null;
    }

    return (
        <ImageBackground
            style={{
                width: "100%",
                height: 70
            }}
            source={require('../../assest/BG.jpg')}
        >
            <View style={{ flexDirection: 'row' }}>
                {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                            ? options.tabBarLabel
                            : options.title !== undefined
                                ? options.title
                                : route.name;

                    const isFocused = state.index === index;

                    var icon = "";
                    switch (route.name) {
                        case "Hoạt động":
                            icon = "home"
                            break;
                        case "Khách hàng":
                            icon = "users"
                            break;
                        case "Bán hàng":
                            icon = "shopping-cart"
                            break;
                        case "Môi giới lẻ":
                            icon = "user"
                            break;
                        case "Quản lý":
                            icon = "tasks"
                            break;

                        default:
                            break;
                    }

                    const onPress = () => {
                        const event = navigation.emit({
                            type: 'tabPress',
                            target: route.key,
                            canPreventDefault: true,
                        });

                        if (!isFocused && !event.defaultPrevented) {
                            navigation.navigate(route.name);
                        }
                    };


                    return (


                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityStates={isFocused ? ['selected'] : []}
                            onPress={onPress}
                            style={{
                                flex: 1,
                                backgroundColor: isFocused ? "white" : 'transparent',
                                alignItems: 'center',
                                height: 70,
                                paddingVertical: 10,

                            }}
                        >

                            <FontAwesome
                                name={icon} size={23}
                                style=
                                {{
                                    color: isFocused ? '#FFA605' : 'white',
                                    paddingTop: 7,
                                }}

                            ></FontAwesome>
                            <Text style=
                                {{
                                    color: isFocused ? '#FFA605' : 'white'
                                }}
                            >
                                {label}
                            </Text>
                        </TouchableOpacity>

                    );
                })}
            </View>
        </ImageBackground>

    );
}

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBar={props => <MyTabBar {...props} />}
                initialRouteName="Home"
                activeColor="#FFA400"
                barStyle={{
                    backgroundColor: "#D4E3FF",
                    height: 80,
                    justifyContent: 'center',
                }}
                screenOptions={{
                    headerShown: true
                }}
            >
                <Tab.Screen
                    name='Hoạt động' component={HomeNavigation}
                />
                <Tab.Screen
                    name="Khách hàng" component={UserNavigation}
                />
                <Tab.Screen
                    name="Bán hàng" component={SaleNavigation}
                />
                <Tab.Screen
                    name="Môi giới lẻ" component={AngencyNavigation}
                />
                <Tab.Screen
                    name="Quản lý" component={Manager}
                />

            </Tab.Navigator>
        </NavigationContainer>
    )
}
export default TabNavigation;