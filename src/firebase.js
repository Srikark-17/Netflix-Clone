import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA8w-VjtbY_9_TAkFrzVcUuPeBqE-T2tSw",
  authDomain: "netflix-clone-ee61a.firebaseapp.com",
  projectId: "netflix-clone-ee61a",
  storageBucket: "netflix-clone-ee61a.appspot.com",
  messagingSenderId: "599198888622",
  appId: "1:599198888622:web:26396971033c1406f9f33f",
  measurementId: "G-68YYYDVH47",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { auth };
export default db;
