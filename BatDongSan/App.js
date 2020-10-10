import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
const Stack = createStackNavigator();
import auth from '@react-native-firebase/auth';

import TabNavigation from './src/component/Navigation/TabNavigation'
import DangNhapNavigation from './src/component/Navigation/DangNhapNavigation.js';
export const UserContext = React.createContext()
const App = () => {
  const [user, setUser] = useState(null)
  return (
    // Provider - thay đôi ngữ cảnh 
    <UserContext.Provider value={{ user: user, setUser: setUser }}>
      {
        user == null ? (<DangNhapNavigation />) : (<TabNavigation />)
      }
    </UserContext.Provider>

  );
};
export default App;
