import firebase from "firebase";

const fireabseApp = firebase.initializeApp({
  apiKey: "AIzaSyAx1OL1x_P6ymGLpzW-qTVQLir3RjChWVQ",
  authDomain: "shirshak-amozon.firebaseapp.com",
  databaseURL: "https://shirshak-amozon.firebaseio.com",
  projectId: "shirshak-amozon",
  storageBucket: "shirshak-amozon.appspot.com",
  messagingSenderId: "957684315130",
  appId: "1:957684315130:web:d648f02aa8088540572a43",
  measurementId: "G-P0ERQ69Z1P",
});

const db = fireabseApp.firestore();
const auth = firebase.auth();
export { db, auth };
