// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCi_GA9gUQ-SaajD0nE4sXTyKWm4mxk0pI",
  authDomain: "authenticationbd.firebaseapp.com",
  projectId: "authenticationbd",
  storageBucket: "authenticationbd.appspot.com",
  messagingSenderId: "765403402524",
  appId: "1:765403402524:web:bf793311b20d6f6a816ad9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 

export default auth;