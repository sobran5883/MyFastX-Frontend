// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV4t_iqAflosAjf-wSMsbr01LDtUedZoI",
  authDomain: "myfastx-dbb34.firebaseapp.com",
  projectId: "myfastx-dbb34",
  storageBucket: "myfastx-dbb34.appspot.com",
  messagingSenderId: "843044552372",
  appId: "1:843044552372:web:ebc072c6659b5d837fa1e1"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export default firebaseApp;