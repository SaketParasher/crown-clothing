import { initializeApp } from 'firebase/app';
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore';
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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const db = getFirestore();
    const docRef = doc(db, "users", userAuth.uid);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(docRef, {
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error Creating error ", error);
        }
    }

    return docSnap;
}

export const signInWithGoogle = () => signInWithPopup(auth, provider);
export default app;