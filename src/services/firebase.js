import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';
import { getStorage } from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrtkYwgt1WKSVCOXE7mDteqlhhLva_VqU",
    authDomain: "portfolio-website-28c4d.firebaseapp.com",
    projectId: "portfolio-website-28c4d",
    storageBucket: "portfolio-website-28c4d.appspot.com",
    messagingSenderId: "152242122477",
    appId: "1:152242122477:web:8238eebeef6eeeaf49a6e4",
    measurementId: "G-8BCN8HQBDB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };