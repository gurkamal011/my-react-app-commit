import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCCClL-TCbQ8KSh4ku4rpyDwZf5mdkRaoM",
  authDomain: "treasury-health.firebaseapp.com",
  projectId: "treasury-health",
  storageBucket: "treasury-health.appspot.com",
  messagingSenderId: "925272342549",
  appId: "1:925272342549:web:14797cf4682f47fa878e1c",
  measurementId: "G-GV8YEVJ6BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();