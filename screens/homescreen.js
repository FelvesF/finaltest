import React, {useState, useEffect}from 'react';
import { View, Text, StyleSheet,TouchableOpacity, Button } from 'react-native';
import { db } from '../firebaseConfig';
import { getDoc, doc } from "firebase/firestore";
import { signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig'; 


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




export default function HomeScreen({ navigation }) {


  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log('User logged out successfully');
      // Redirect to login screen after logout
      // Use navigation or any method to go back to the login page
      navigation.replace('Login'); // Assuming you're using React Navigation
    } catch (error) {
      console.error('Error logging out:', error.message);
    }
  };

  
  const [name, setName] = useState('');

  useEffect(() => {
    const docRef = doc(db, "firstcollection", "firstdocument");
    getDoc(docRef)
      .then((doc) => {
        if (doc.exists()) {
          const data = doc.data();
          setName(data.name);
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.error("Error reading document:", error);
      });
  }, []);


  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Homepage Welcome</Text>
<Text style={styles.text}>Name: {name}</Text>
<TouchableOpacity onPress={() => navigation.navigate('About')}>
  <Text>About Us</Text>
</TouchableOpacity>
<Button title="Logout" onPress={handleLogout} />
    </View>

  );
}

