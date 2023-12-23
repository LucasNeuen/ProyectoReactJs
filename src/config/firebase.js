
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDpz_4rHsBgXDka-lMgQPwbIt6Px17dQtY",
  authDomain: "ecommercereact-c7500.firebaseapp.com",
  projectId: "ecommercereact-c7500",
  storageBucket: "ecommercereact-c7500.appspot.com",
  messagingSenderId: "787951647845",
  appId: "1:787951647845:web:681a16e5d3e5b260b0da8c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);