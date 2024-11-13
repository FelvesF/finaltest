import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function FirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>MATH</Text>
      <Button title="Log in" onPress={() => navigation.navigate('Login')} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});