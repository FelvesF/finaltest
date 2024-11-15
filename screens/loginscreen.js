import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button, TextInput, Alert} from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log('User logged in successfully:', user);
        navigation.navigate('Home');
      })
      .catch((error) => {
        Alert.alert('Error', 'Invalid credentials'); 
      });
  };

  return (
    <View style={styles.container}>
        <View style={styles.box1}>
      <Text style={styles.text}>Welcome Back!</Text>
      <TextInput
          style={styles.input}
          placeholder="Enter email"
          placeholderTextColor="#000"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#000"
          value={password}
          onChangeText={setPassword}
        />

      <Button
        title="Log in Now"
        onPress={handleLogin}
      />
      <Button
        title="Don't have an Account?"
        onPress={() => navigation.navigate('Register')}
      />


</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box1: {
    height: 500,
    width: 300,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FF90DF',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: 200,
    height: 40,
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    
  },
});

export default LoginScreen