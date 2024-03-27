import { StyleSheet, Text, View } from 'react-native'
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

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name="Home"
          component={Home} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'Welcome' }}
        /> */}
        {/* <Stack.Screen
          name="Video"
          component={Video} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'Video' }}
        /> */}
        {/* <Stack.Screen
          name="San_pham"
          component={San_pham} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'San_pham' }}
        /> */}
         {/* <Stack.Screen
          name="Dich_vu"
          component={Dich_vu} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'Dich_vu' }}
        /> */}
        {/* <Stack.Screen
          name="libary"
          component={libary} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'libary' }}
        /> */}

        <Stack.Screen
          name="Album"
          component={Album} // Thêm thuộc tính component và chỉ định thành phần cần render
          options={{ title: 'Album' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
