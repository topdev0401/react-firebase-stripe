import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyA0ieEZsn5NzdCMDk8x2deKspFdT0TCFWM",
  authDomain: "challenge-c3151.firebaseapp.com",
  databaseURL: "https://challenge-c3151.firebaseio.com",
  projectId: "challenge-c3151",
  storageBucket: "challenge-c3151.appspot.com",
  messagingSenderId: "309505134684",
  appId: "1:309505134684:web:0aaaba1c3db12c57d99699"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
