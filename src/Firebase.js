import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIadzaSyAz0IUbortPmNE38kul_-Fu8a7jdfgfPZ0ro",
  authDomain: "filesystem-73fgfh2.firebaseapp.com",
  projectId: "filesystem-73fghf2",
  storageBucket: "filesystem-7h3hfh2.appspot.com",
  messagingSenderId: "936871901391",
  appId: "1:9368fgsf71901391:web:a0fd23rtm08f61196d7dfba"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};