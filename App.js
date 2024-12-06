import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebaseConfig'; 
import FirstScreen from './screens/firstscreen';
import LoginScreen from './screens/loginscreen';
import RegisterScreen from './screens/registerscreen';
import HomeScreen from './screens/homescreen';
import AboutScreen from './screens/aboutscreen';



const Stack = createNativeStackNavigator();


console.log('App component rendered')

function App()  {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // To handle the loading state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false); // Stop loading once we get the auth state
    });

    return unsubscribe; // Cleanup listener on unmount
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
      {user ? (
        
        <>
  <Stack.Screen name="Home" component={HomeScreen} />
       <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Drink Counter' , headerStyle: { backgroundColor: "#012124" }, headerTintColor: "#ffffff" }} />
       <Stack.Screen name="Login" component={LoginScreen} />
       <Stack.Screen name="Register" component={RegisterScreen} />
       </>
           
        ) : (
          <>
        <Stack.Screen name="First" component={FirstScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
       <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Drink Counter' , headerStyle: { backgroundColor: "#012124" }, headerTintColor: "#ffffff" }} />
       <Stack.Screen name="Home" component={HomeScreen} />
       </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;