// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
};


/*const firebaseConfig = {
    apiKey: "AIzaSyC2-PfmEC9zrQm-5D6pgtuwi7k_K6SyD34",
    authDomain: "doctors-portal-65f3e.firebaseapp.com",
    projectId: "doctors-portal-65f3e",
    storageBucket: "doctors-portal-65f3e.appspot.com",
    messagingSenderId: "25783322270",
    appId: "1:25783322270:web:20b80211308abf5ebddd8f"
};*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;




// const firebaseConfig = {
//     apiKey: "AIzaSyC2-PfmEC9zrQm-5D6pgtuwi7k_K6SyD34",
//     authDomain: "doctors-portal-65f3e.firebaseapp.com",
//     projectId: "doctors-portal-65f3e",
//     storageBucket: "doctors-portal-65f3e.appspot.com",
//     messagingSenderId: "25783322270",
//     appId: "1:25783322270:web:20b80211308abf5ebddd8f"
// };