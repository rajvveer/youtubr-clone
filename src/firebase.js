import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAbaZuzSOWuUQBIr1PVgHAchJXj1ChTvNY",
  authDomain: "video-ef662.firebaseapp.com",
  projectId: "video-ef662",
  storageBucket: "video-ef662.appspot.com",
  messagingSenderId: "421523515539",
  appId: "1:421523515539:web:3c973e8442d2cae5b04566"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app