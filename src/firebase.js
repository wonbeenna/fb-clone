import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDxxBe927F9XwTYl2rdIMGdxOpt7dGV9mU",
    authDomain: "facebook-clone-e09bf.firebaseapp.com",
    projectId: "facebook-clone-e09bf",
    storageBucket: "facebook-clone-e09bf.appspot.com",
    messagingSenderId: "498911350736",
    appId: "1:498911350736:web:cc50f40c8547ffe86ab3d5"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;
