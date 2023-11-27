import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDc0yk4CzgVvwXgWx4pI-2joaZ-25D33KM",
    authDomain: "figure-store-db.firebaseapp.com",
    projectId: "figure-store-db",
    storageBucket: "figure-store-db.appspot.com",
    messagingSenderId: "388358353850",
    appId: "1:388358353850:web:da43a3d2d69ef86cb12383"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: 'select_account'
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);