// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // eslint-disable-next-line no-undef
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-app-1c348.firebaseapp.com",
  projectId: "mern-blog-app-1c348",
  storageBucket: "mern-blog-app-1c348.appspot.com",
  messagingSenderId: "842124306100",
  appId: "1:842124306100:web:84d59976ddb3b7201dd9e1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
