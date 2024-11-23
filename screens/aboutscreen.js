import React, {useState, useEffect}from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { db } from '../firebaseConfig';



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


export default function AboutScreen({ navigation }) {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>About Screen</Text>

    </View>
  );
}

