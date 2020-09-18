import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
const Stack = createStackNavigator();
import LogIn from '../Start/Login.js'
import SignIn from '../Start/SignIn'

const LoginNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={LogIn}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SignIn"
                    component={SignIn}
                    options=
                    {{
                        headerStyle: { backgroundColor: '#FFA400' },
                        headerTitle: ''
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default LoginNavigation;
