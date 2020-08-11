import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

const config = {
    apiKey: "AIzaSyBs0Ct-oih20-wtxf_QI_RzeQ_6l3Yn-XM",
    authDomain: "e-commerce-concept.firebaseapp.com",
    databaseURL: "https://e-commerce-concept.firebaseio.com",
    projectId: "e-commerce-concept",
    storageBucket: "e-commerce-concept.appspot.com",
    messagingSenderId: "484417921655",
    appId: "1:484417921655:web:c9194f10aa8bc071b4dc72",
    measurementId: "G-BVE30ZM1LH"
};

firebase.initializeApp(config);
firebase.analytics();

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
