
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDs3EdzUdt8af-4eDPMffXo9PgDFvaLWCM",
  authDomain: "auth-b76a2.firebaseapp.com",
  projectId: "auth-b76a2",
  storageBucket: "auth-b76a2.appspot.com",
  messagingSenderId: "348629882420",
  appId: "1:348629882420:web:1d7c9ff3743865ea7cdc61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)