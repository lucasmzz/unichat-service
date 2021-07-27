import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase
  .initializeApp({
    apiKey: "AIzaSyDvO8IVLtET_grR3a55uLOMhRNSb-C173U",
    authDomain: "unichat-313b6.firebaseapp.com",
    projectId: "unichat-313b6",
    storageBucket: "unichat-313b6.appspot.com",
    messagingSenderId: "841764140252",
    appId: "1:841764140252:web:28fe6f38c2f225315a3019",
  })
  .auth();
