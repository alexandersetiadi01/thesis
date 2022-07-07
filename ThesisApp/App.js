import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import React, {useState, useEffect} from 'react';
import { Camera } from 'expo-camera';
import { CameraType } from 'expo-camera/build/Camera.types';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartPage from './screens/StartPage';
import MainPage from './screens/MainPage';
import Things from './screens/Things';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';



const Stack =  createNativeStackNavigator()

//const App = createAppContainer(Stack);
//export default App;
export default function App() {
  
  const [start, setStart] = useState(false);
  
  const starting = () =>{
    setStart(true)
  }

  return (
    
    <SafeAreaProvider>
    
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen
          name="Learning Things"
          component={StartPage}
        />
        <Stack.Screen name="lets search things!" component={MainPage} />
        <Stack.Screen name="lets learn things!" component={Things} />
        </Stack.Navigator>
        </NavigationContainer>
    
    </SafeAreaProvider>
    
    //
    
  );
}

const styles = StyleSheet.create({
  App: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '255, 0, 0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixedRatio: {
    flex: 1, 
    aspectRatio: 1
  },
  
});
