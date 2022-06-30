// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7CWNW-3yWbLp_pJUXCQeHvBmQCjzbMkw",
  authDomain: "my-guitars-18b16.firebaseapp.com",
  projectId: "my-guitars-18b16",
  storageBucket: "my-guitars-18b16.appspot.com",
  messagingSenderId: "195671655294",
  appId: "1:195671655294:web:6d27514ae8e5abaa90692f"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()

export  {projectFirestore}