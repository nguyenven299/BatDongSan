import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
const Stack = createStackNavigator();
import LogIn from './src/component/Start/Login.js'
import SignIn from './src/component/Start/SignIn.js'
import TabNavigation from './src/component/navigation/TabNavigation.js'

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LogIn}
          options=
          {{
            headerShown: false
          }}
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
        <Stack.Screen
          name="TabNavigation"
          component={TabNavigation}
          options=
          {{
            headerStyle: { backgroundColor: '#FFA400' },
            // headerTitle: '123',
            headerLeft: null,
            headerTintColor: 'white',
            // headerShown: false
            title: null
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
