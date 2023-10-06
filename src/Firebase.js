import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyAMKpji1K4POJJg8dGlURqcq2tTp-oZ6ec",
    authDomain: "eshop-77411.firebaseapp.com",
    projectId: "eshop-77411",
    storageBucket: "eshop-77411.appspot.com",
    messagingSenderId: "457336579233",
    appId: "1:457336579233:web:70961d919c80a63084fce0",
    measurementId: "G-7CYW2ST2CW"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore();

  const auth = firebase.auth();
  
  
  
  
  
  export{ db ,auth};