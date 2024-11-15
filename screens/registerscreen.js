import React,{useState, useEffect} from 'react';
import { View, Text, StyleSheet, Button,TextInput, Alert} from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isFormValid = () =>
    email.includes('@') && password === confirmPassword && password.length >= 8;

  const handleSignup = async () => {  
    if (!isFormValid()) {
      Alert.alert(
        'Try again',
        'Please enter a valid email and matching passwords with at least 8 characters'
      );
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      Alert.alert('Success', 'Account created successfully');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', `Error creating user: ${error.message}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box1}>
      <Text style={styles.text}>Register Screen</Text>
      <TextInput
          style={styles.input}
          placeholder="Enter email"
          placeholderTextColor="#000"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#000"
          value={password}
          onChangeText={setPassword}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          placeholderTextColor="#000"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />

        <Button title="Sign Up" onPress={handleSignup} />
        
      <Button
        title="Go to Login"
        onPress={() => {

          navigation.navigate('Login');
        }}
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

export default RegisterScreen;