import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
const Stack = createStackNavigator();
import TabNavigation from './src/component/Navigation/TabNavigation.js'
import LoginNavigation from './src/component/Navigation/LoginNavigation.js';

export const UserContext = React.createContext()

const App = () => {
  const [user, setUser] = useState(null)

  return (
    // Provider - thay đôi ngữ cảnh 
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      {
        user == null ? (<LoginNavigation />) : (<TabNavigation />)

      }


    </UserContext.Provider>
  );
};
export default App;
