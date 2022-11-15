// Import the functions you need from the SDKs you need

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBaF8_nbAdK36LcSJH5JmqGyC90kVfrrnc",
    authDomain: "crm-ventas-js.firebaseapp.com",
    projectId: "crm-ventas-js",
    storageBucket: "crm-ventas-js.appspot.com",
    messagingSenderId: "67369338883",
    appId: "1:67369338883:web:6a5107b5b1ca372921a636",
    measurementId: "G-SCXDTKV57G"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);