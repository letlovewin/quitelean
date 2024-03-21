import { getDatabase } from "firebase/database";
import { getApps, initializeApp, getApp } from "firebase/app";
import "../../../../chunks/index.js";
const firebaseConfig = {
  apiKey: "AIzaSyCpZKwjZq81wfNVPC2K6PqbGEL1hnP65HY",
  authDomain: "quitelean.firebaseapp.com",
  projectId: "quitelean",
  storageBucket: "quitelean.appspot.com",
  messagingSenderId: "434611625957",
  appId: "1:434611625957:web:fbea8cbf3b58525ac6190c",
  measurementId: "G-FPX0STF405"
};
function load({ params }) {
  let firebaseApp;
  if (getApps().length === 0) {
    firebaseApp = initializeApp(firebaseConfig);
  } else {
    firebaseApp = getApp();
  }
  getDatabase(firebaseApp);
  let pid = params.uid;
  if (pid != "+layout.svelte") {
    return {
      information: {
        title: pid
      }
    };
  }
}
export {
  load
};
