// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBi4DwofCO--yR1_Riej4zjLoX2QgEX-Jg",
    authDomain: "clone-2fb00.firebaseapp.com",
    projectId: "clone-2fb00",
    storageBucket: "clone-2fb00.appspot.com",
    messagingSenderId: "1011958319860",
    appId: "1:1011958319860:web:0f30f003bd783325352ca1",
    measurementId: "G-FSFEFZP3SC"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };