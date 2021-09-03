import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const config = {
    apiKey: "AIzaSyC1Gjhjsbokv5BFd-Pr3ZCc2EPK4Ve4Mlg",
    authDomain: "crown-shop-2557d.firebaseapp.com",
    projectId: "crown-shop-2557d",
    storageBucket: "crown-shop-2557d.appspot.com",
    messagingSenderId: "993528989968",
    appId: "1:993528989968:web:5d0d018a3f31a53aff7d95",
    measurementId: "G-QSKN29Z12D"
}

const app = initializeApp(config);
export const auth = getAuth();

//export const auth = firebase.auth();
//export const firestore = firebase.firestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export default app;