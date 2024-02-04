// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIfPu7s0Rac6NR9pinDhuQMwcchBGnDX8",
  authDomain: "fir-alpaago-react-auth.firebaseapp.com",
  projectId: "fir-alpaago-react-auth",
  storageBucket: "fir-alpaago-react-auth.appspot.com",
  messagingSenderId: "331848572053",
  appId: "1:331848572053:web:1660cc4b1e1c2f2d6b4f9c",
  measurementId: "G-6XNZ0XW5M0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;