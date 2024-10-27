// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  
  authDomain: "online-job-portal-fd4fc.firebaseapp.com",
  projectId: "online-job-portal-fd4fc",
  storageBucket: "online-job-portal-fd4fc.appspot.com",
  messagingSenderId: "955396075012",
  appId: "1:955396075012:web:c72988ea2ad922a345cf51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
