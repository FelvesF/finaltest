import { initializeApp } from "firebase/app";
import {
  getAuth,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";



import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0hohUPH4CLabWKsZEcRDACoQL_8U5gVQ",
  authDomain: "finaltestfirebase-62b4d.firebaseapp.com",
  databaseURL: "https://finaltestfirebase-62b4d-default-rtdb.firebaseio.com/",
  projectId: "finaltestfirebase-62b4d",
  storageBucket: "finaltestfirebase-62b4d.firebasestorage.app",
  messagingSenderId: "965914565746",
  appId: "1:965914565746:web:eef536313bc16e6d0436eb",
  measurementId: "G-1DYDJSDGGP"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const db = getFirestore(app);
const realtimedb = getDatabase(app);


export { app, auth, db, realtimedb};