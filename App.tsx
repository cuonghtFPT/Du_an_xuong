import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './Du_an/Login'
import Home from './Du_an/Home'
import Video from './Du_an/Video';
import San_pham from './Du_an/San_pham';
import Dich_vu from './Du_an/Dich_vu';
import libary from './Du_an/libary';
import Album from './Du_an/Album';
import Chitiet_dichvu from './Du_an/Chitiet_dichvu';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Man_hinh_cho_1 from './Du_an/Man_hinh_cho_1';
import Man_hinh_cho_2 from './Du_an/Man_hinh_cho_2';
import Man_hinh_cho_3 from './Du_an/Man_hinh_cho_3';
import Register from './Du_an/Register';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Man_hinh_cho_1'>
        <Stack.Screen
          name="Home"
          component={Home} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Man_hinh_cho_1"
          component={Man_hinh_cho_1} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Man_hinh_cho_2"
          component={Man_hinh_cho_2} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'Welcome' }}
        />
        <Stack.Screen
          name="Man_hinh_cho_3"
          component={Man_hinh_cho_3} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'Welcome' }}
        />
        
        <Stack.Screen
          name="Video"
          component={Video} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'Video' }}
        />
         <Stack.Screen
          name="Register"
          component={Register} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'Register' }}
        />
         <Stack.Screen
          name="Login"
          component={Login} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="San_pham"
          component={San_pham} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'San_pham' }}
        />
         <Stack.Screen
          name="Dich_vu"
          component={Dich_vu} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'Dich_vu' }}
        />
        <Stack.Screen
          name="libary"
          component={libary} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'libary' }}
        />

        <Stack.Screen
          name="Album"
          component={Album} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'Album' }}
        />

      <Stack.Screen
          name="Chitiet_dichvu"
          component={Chitiet_dichvu} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'Chitiet_dichvu' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
  }
});

export default App
