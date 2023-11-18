import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCgVuVDm8Jsfiuv93aIOVXK7zne71Dn9gg",
  authDomain: "auth-development-a18f1.firebaseapp.com",
  projectId: "auth-development-a18f1",
  databaseURL: "https://auth-development-a18f1.firebaseio.com/",
  storageBucket: "auth-development-a18f1.appspot.com",
  messagingSenderId: "36862358727",
  appId: "1:36862358727:web:99030d91e881f6385cfae2",
});

export const auth = app.auth();
export default app;
