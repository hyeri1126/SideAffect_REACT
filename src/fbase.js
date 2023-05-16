import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC6VrkWG9rAi6ZgkkvRe1IkEczM8cfJPDI",
    authDomain: "sideaffectfinal.firebaseapp.com",
    projectId: "sideaffectfinal",
    storageBucket: "sideaffectfinal.appspot.com",
    messagingSenderId: "967658711595",
    appId: "1:967658711595:web:df9ed6121b911386d9d86e"
  };
  
  firebase.initializeApp(firebaseConfig);

  export const authService = firebase.auth();

  export const firebaseInstance = firebase;