import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBP8bNPuh8JiMmXU9Z-5MeIHgS8gzIbKS4",
  authDomain: "crwn-db-97289.firebaseapp.com",
  databaseURL: "https://crwn-db-97289.firebaseio.com",
  projectId: "crwn-db-97289",
  storageBucket: "crwn-db-97289.appspot.com",
  messagingSenderId: "755067756328",
  appId: "1:755067756328:web:f786705a982e868b103a1d",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
