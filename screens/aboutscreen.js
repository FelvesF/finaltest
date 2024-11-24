import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity,Image } from "react-native";

import { ref, onValue, set } from "firebase/database";
import { realtimedb } from "../firebaseConfig";




const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#e3f8fa",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  countContainer: {
    flex:2,
    width : "100%",
  display: "flex",
  flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingBottom: 50,
    paddingLeft: 30,
    
   
    
  },
  countText: {
    fontSize: 24,
    color: "#07555c",
    textAlign: "left",
    marginBottom : 20,
    
  },
  button: {
    
  
    borderRadius: 10,
   
    width: 70,
    height: 70,
    
  },
  buttonText: {
    textAlign: "center",
    
  },
  buttonContainer: {
    paddingTop:40,
    backgroundColor: "#b0e6eb",
    flex:2,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignContent: "center",
   
  },
  value: {
    fontSize: 70,
    color: "#08c0d1",
    textAlign: "center",
    marginLeft : 10,
    marginRight : 10,
    marginBottom : 20,
    border: "black 2px solid",
  },
advice:{
 backgroundColor: "#b0e6eb",
  flex: 1,
  width : "100%",
 display: "flex",
 justifyContent: "center", alignItems: "center",
 
},
adviceText: {
  fontSize: 36,
  color: "#07555c",
  textAlign: "center",
  
  
},
glass:{
  
  display: "flex",
  justifyContent: "center", alignItems: "center",
  width: 80, 
  height: 150,
 

 },

});


export default function AboutScreen({ navigation }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const valueRef = ref(realtimedb, "value");
    return onValue(valueRef, (snapshot) => {
      setValue(snapshot.val());
    });
  }, []);

  const handlePlus = () => {
    const valueRef = ref(realtimedb, "value");
    set(valueRef, value + 1);
  };

  const handleMinus = () => {
    const valueRef = ref(realtimedb, "value");
    set(valueRef, value - 1);
  };
  return (
    <View style={styles.container}>
    
    
<View style={styles.advice}>
  <Text style={styles.adviceText}>"STAY HYDRATED"</Text>
</View>

<View style={styles.countContainer}>
<View style ={styles.glass}>

 <Image source={require('../images/glass.png')} style={styles.glass}></Image>
      </View>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.countText}>GLASSES {"\n"}OF WATER {"\n"}DRANK TODAY    </Text>
        </View>


      
   
     
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleMinus}>
          <Image source={require('../images/minus.png')} style={styles.button}></Image>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handlePlus}>
          <Image source={require('../images/plus.png')} style={styles.button}></Image>
          </TouchableOpacity>
          
        </View>




      
    </View>
  );
}

