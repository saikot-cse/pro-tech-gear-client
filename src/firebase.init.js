// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAmR9H0a8hzZ-3lButMqw8SWGTOmUi07pQ",
  authDomain: "pro-tech-gear.firebaseapp.com",
  projectId: "pro-tech-gear",
  storageBucket: "pro-tech-gear.appspot.com",
  messagingSenderId: "539835454583",
  appId: "1:539835454583:web:c798435d2ceeabf1eae272"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;