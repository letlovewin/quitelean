import { c as create_ssr_component, b as validate_store, d as subscribe } from "./ssr.js";
import { getApps, initializeApp, getApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence, onAuthStateChanged, signInWithEmailAndPassword, AuthErrorCodes, sendEmailVerification } from "firebase/auth";
import { getDatabase, ref, onValue, set } from "firebase/database";
import { p as page } from "./stores.js";
const Auth = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_page;
  validate_store(page, "page");
  $$unsubscribe_page = subscribe(page, (value) => value);
  const firebaseConfig = {
    apiKey: "AIzaSyCpZKwjZq81wfNVPC2K6PqbGEL1hnP65HY",
    authDomain: "quitelean.firebaseapp.com",
    projectId: "quitelean",
    storageBucket: "quitelean.appspot.com",
    messagingSenderId: "434611625957",
    appId: "1:434611625957:web:fbea8cbf3b58525ac6190c",
    measurementId: "G-FPX0STF405"
  };
  let { firebaseApp, firebaseAuth, firebaseDatabase, currentUserInformation = null, authErrorState = "", userAuthState, competitiveUserInformation = { elo: "NILL" } } = $$props;
  if (getApps().length === 0) {
    firebaseApp = initializeApp(firebaseConfig);
  } else {
    firebaseApp = getApp();
  }
  firebaseAuth = getAuth(firebaseApp);
  firebaseDatabase = getDatabase(firebaseApp);
  setPersistence(firebaseAuth, browserLocalPersistence);
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user && user.displayName) {
      userAuthState = true;
      currentUserInformation = user.toJSON();
      const compInfoRef = ref(firebaseDatabase, `users/${user.uid}`);
      onValue(compInfoRef, (snapshot) => {
        competitiveUserInformation = snapshot.val();
      });
    } else {
      userAuthState = false;
      currentUserInformation = "nouser";
    }
  });
  const saveChangesOnSettings = function(inst) {
    if (userAuthState) {
      const userInfoRef = ref(firebaseDatabase, `users/${currentUserInformation.uid}`);
      onValue(userInfoRef, (userInformation) => {
        let old_inst = userInformation.val().institution;
        if (old_inst == inst)
          ;
        else {
          set(
            ref(firebaseDatabase, `users/${currentUserInformation.uid}`),
            {
              elo: userInformation.val().elo,
              uid: userInformation.val().uid,
              username: userInformation.val().username,
              institution: inst
            }
          );
        }
      });
    }
  };
  const signIn = function(email, password) {
    authErrorState = "";
    if (!(email && password)) {
      authErrorState = "Please fill all fields";
      return;
    }
    signInWithEmailAndPassword(firebaseAuth, email, password).then((user) => {
    }).catch((error) => {
      let code = error.code;
      if (code == AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
        authErrorState = "Incorrect email or password";
      } else if (code == AuthErrorCodes.INVALID_EMAIL) {
        authErrorState = "Invalid email";
      }
    });
  };
  const sendVerificationEmail = function() {
    if (currentUserInformation != void 0 && firebaseAuth.currentUser != void 0) {
      sendEmailVerification(firebaseAuth.currentUser);
    }
  };
  const signUp = function(username, email, password) {
    authErrorState = "";
    if (!(username && email && password)) {
      authErrorState = "Please fill all fields";
      return;
    }
    fetch("https://createaccount-q3az2gk4sa-uc.a.run.app", {
      method: "POST",
      body: JSON.stringify({
        body_username: username,
        body_password: password,
        body_email: email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then((code) => {
      return code.json();
    }).then((Res) => {
      let code = Res.error_code;
      if (code == AuthErrorCodes.EMAIL_EXISTS) {
        authErrorState = "Email already in use";
      } else if (code == AuthErrorCodes.INTERNAL_ERROR) {
        authErrorState = "Unknown error, please try again";
      } else if (code == AuthErrorCodes.INVALID_EMAIL) {
        authErrorState = "Please enter a valid email";
      } else if (code == AuthErrorCodes.INVALID_PASSWORD) {
        authErrorState = "Password is too weak";
      } else if (code == "error-username-invalid") {
        authErrorState = "Username must be 3-20 characters and be alphanumeric";
      } else if (code == "error-username-in-use") {
        authErrorState = "Username already in use";
      } else if (code == "ok") {
        signInWithEmailAndPassword(firebaseAuth, email, password).then((user) => {
          sendEmailVerification();
        });
      }
    });
  };
  if ($$props.firebaseApp === void 0 && $$bindings.firebaseApp && firebaseApp !== void 0)
    $$bindings.firebaseApp(firebaseApp);
  if ($$props.firebaseAuth === void 0 && $$bindings.firebaseAuth && firebaseAuth !== void 0)
    $$bindings.firebaseAuth(firebaseAuth);
  if ($$props.firebaseDatabase === void 0 && $$bindings.firebaseDatabase && firebaseDatabase !== void 0)
    $$bindings.firebaseDatabase(firebaseDatabase);
  if ($$props.currentUserInformation === void 0 && $$bindings.currentUserInformation && currentUserInformation !== void 0)
    $$bindings.currentUserInformation(currentUserInformation);
  if ($$props.authErrorState === void 0 && $$bindings.authErrorState && authErrorState !== void 0)
    $$bindings.authErrorState(authErrorState);
  if ($$props.userAuthState === void 0 && $$bindings.userAuthState && userAuthState !== void 0)
    $$bindings.userAuthState(userAuthState);
  if ($$props.competitiveUserInformation === void 0 && $$bindings.competitiveUserInformation && competitiveUserInformation !== void 0)
    $$bindings.competitiveUserInformation(competitiveUserInformation);
  if ($$props.saveChangesOnSettings === void 0 && $$bindings.saveChangesOnSettings && saveChangesOnSettings !== void 0)
    $$bindings.saveChangesOnSettings(saveChangesOnSettings);
  if ($$props.signIn === void 0 && $$bindings.signIn && signIn !== void 0)
    $$bindings.signIn(signIn);
  if ($$props.sendVerificationEmail === void 0 && $$bindings.sendVerificationEmail && sendVerificationEmail !== void 0)
    $$bindings.sendVerificationEmail(sendVerificationEmail);
  if ($$props.signUp === void 0 && $$bindings.signUp && signUp !== void 0)
    $$bindings.signUp(signUp);
  $$unsubscribe_page();
  return `<div></div>`;
});
export {
  Auth as A
};
