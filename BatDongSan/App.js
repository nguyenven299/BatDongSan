import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
const Stack = createStackNavigator();
import TabNavigation from './src/component/navigation/TabNavigation.js'
import DangNhapNavigation from './src/component/navigation/DangNhapNavigation.js';
// import DangNhapNavigation from './src/component/KhachHang/MoRong/KhachHangTiemNang';

// import LoginNavigation from './src/component/Manager/More/Ultilities/ChangePassword';


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
