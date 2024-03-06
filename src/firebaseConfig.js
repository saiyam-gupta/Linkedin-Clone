// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB0dEkJw3yS4adf-K222BCoFIImBRIyiFI",
  authDomain: "linkedin-clone-56784.firebaseapp.com",
  projectId: "linkedin-clone-56784",
  storageBucket: "linkedin-clone-56784.appspot.com",
  messagingSenderId: "499461534530",
  appId: "1:499461534530:web:c7b28ab9a4b4e3d0eecedb",
  measurementId: "G-96KGS3LHJ9"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export {auth,app,firestore,storage};