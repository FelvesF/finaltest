import React, {useState, useEffect}from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { db } from '../firebaseConfig';
import { getDoc, doc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";



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
    </View>

  );
}

