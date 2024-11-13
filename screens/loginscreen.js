import React from 'react';
import { View, Text, StyleSheet, Button, TextInput} from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.box1}>
      <Text style={styles.text}>Welcome Back!</Text>
      <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#000"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#000"
        />

      <Button
        title="Log in Now"
        onPress={() => {
          navigation.navigate('Home');
        }}
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