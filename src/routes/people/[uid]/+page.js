import { getDatabase, get, ref, set, child, onValue } from 'firebase/database';
import { initializeApp, getApp, getApps } from 'firebase/app';
import { redirect } from '@sveltejs/kit';

const firebaseConfig = {
    apiKey: "AIzaSyCpZKwjZq81wfNVPC2K6PqbGEL1hnP65HY",
    authDomain: "quitelean.firebaseapp.com",
    projectId: "quitelean",
    storageBucket: "quitelean.appspot.com",
    messagingSenderId: "434611625957",
    appId: "1:434611625957:web:fbea8cbf3b58525ac6190c",
    measurementId: "G-FPX0STF405",
};


export function load({ params }) {
    let firebaseApp;
    if (getApps().length === 0) {
        firebaseApp = initializeApp(firebaseConfig);
    } else {
        firebaseApp = getApp();
    }
    const database = getDatabase(firebaseApp);
    let pid = params.uid;
    if(pid!="+layout.svelte") {
        return {
            information: {
                title: pid,
            }
        }
    }
    
    
}