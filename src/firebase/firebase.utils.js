import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDGZ1OyxbffE7EabLzf1bWi48jRCnDCQ5Q",
    authDomain: "authenticationreactjs.firebaseapp.com",
    databaseURL: "https://authenticationreactjs.firebaseio.com",
    projectId: "authenticationreactjs",
    storageBucket: "authenticationreactjs.appspot.com",
    messagingSenderId: "251975658394",
    appId: "1:251975658394:web:257b19254c431b6b812823",
    measurementId: "G-EPV75TK3MS"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (e) {
            console.log('error creating user', e.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
