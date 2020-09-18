import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
const Stack = createStackNavigator();
import LogIn from './src/component/Start/Login.js'
import SignIn from './src/component/Start/SignIn.js'
import TabNavigation from './src/component/navigation/TabNavigation.js'
import LoginNavigation from './src/component/navigation/LoginNavigation.js';

export const UserContext = React.createContext()

const App = () => {
  const [user, setUser] = useState(null)

  return (
    // Provider - thay đôi ngữ cảnh 
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      {
        user == null ? (<LoginNavigation />) : (
          user == "LogIn" ? (<TabNavigation />) : (
            user == "SignIn" ? (<SignIn />) : (<TabNavigation />)
          )
        )

      }


    </UserContext.Provider>
  );
};
export default App;
