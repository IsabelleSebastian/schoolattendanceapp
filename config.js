 import firebase from "firebase";

//initialize your database
const firebaseConfig = {
  apiKey: "AIzaSyB9x2foCMcN72GglKgQVQuimSDYU7Bv0HE",
  authDomain: "project-60---school-app.firebaseapp.com",
  projectId: "project-60---school-app",
  storageBucket: "project-60---school-app.appspot.com",
  messagingSenderId: "53971665359",
  appId: "1:53971665359:web:9e918292bebaeaef6e52ba"
};

// will check if app is initialized
  firebase.initializeApp(firebaseConfig)
  export default firebase.database()
 

  