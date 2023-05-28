import { initializeApp } from "firebase/app";
import { getFireStore } from 'firebase/firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDUq2fkcHLBGn_ES4lR9sL1_oocQojQC4E",
  authDomain: "miniblog-f7882.firebaseapp.com",
  projectId: "miniblog-f7882",
  storageBucket: "miniblog-f7882.appspot.com",
  messagingSenderId: "402268185106",
  appId: "1:402268185106:web:dad37cf7cb3cda147e6ecb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFireStore(app)

export { db }