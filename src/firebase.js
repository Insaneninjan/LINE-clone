import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB6plyNj-YJ_GYVEptdmkQndq_hVgOQpZU",
  authDomain: "line-clone-32122.firebaseapp.com",
  projectId: "line-clone-32122",
  storageBucket: "line-clone-32122.appspot.com",
  messagingSenderId: "917710742151",
  appId: "1:917710742151:web:6bfe5e70bf526f2be48e22",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
