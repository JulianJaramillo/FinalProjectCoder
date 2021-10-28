import firebase from "firebase/app";
import 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6eo9d2uSohHYnRXiZw2A-vt4n_FG3CwE",
  authDomain: "book-store-coderproject.firebaseapp.com",
  projectId: "book-store-coderproject",
  storageBucket: "book-store-coderproject.appspot.com",
  messagingSenderId: "94172166617",
  appId: "1:94172166617:web:086cc7680fc8da7b0501c8"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

export const getFirestore = () => {
    return firebase.firestore(app)
};