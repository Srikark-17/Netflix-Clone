import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCrUvhEQ8udU51bugfoQ-udbo_uEbiF2NU",
  authDomain: "fakeflix-3f221.firebaseapp.com",
  projectId: "fakeflix-3f221",
  storageBucket: "fakeflix-3f221.appspot.com",
  messagingSenderId: "111382397998",
  appId: "1:111382397998:web:e783989232d377116b4bbf",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
