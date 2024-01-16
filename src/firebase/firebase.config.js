// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCixIuRsBZyG4Btpca8UwBhLzGU4izYszU",
  authDomain: "dragon-children.firebaseapp.com",
  projectId: "dragon-children",
  storageBucket: "dragon-children.appspot.com",
  messagingSenderId: "728954699187",
  appId: "1:728954699187:web:4afc46e4b40a8e54c8dfc6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;