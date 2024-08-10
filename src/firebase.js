import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: "sonorous-cacao-297018.firebaseapp.com",
    projectId: "sonorous-cacao-297018",
    storageBucket: "sonorous-cacao-297018.appspot.com",
    appId: "1:334242374492:web:2a1a3ddd89dfc9c5c35799",
  };

  firebase.initializeApp(firebaseConfig);


  export default firebase;
  