import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstScreen from './screens/firstscreen';
import LoginScreen from './screens/loginscreen';
import RegisterScreen from './screens/registerscreen';
import HomeScreen from './screens/homescreen';
import AboutScreen from './screens/aboutscreen';
const Stack = createNativeStackNavigator();


console.log('App component rendered')

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="First">
        <Stack.Screen name="First" component={FirstScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
       <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="About" component={AboutScreen} />
      
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;