import firebase from "firebase/compat/app"; // Import only the "app" module from the firebase package
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCsDMDNYvko-lNH82DWYJAdju9-z_3hJB8",
  authDomain: "todoapp-6a429.firebaseapp.com",
  projectId: "todoapp-6a429",
  storageBucket: "todoapp-6a429.appspot.com",
  messagingSenderId: "764792129814",
  appId: "1:764792129814:web:02b6a05f47b1928b20e837",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.app().firestore();
export { db, firebase };
