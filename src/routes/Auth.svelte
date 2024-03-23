<script>
  /*
      This is the authentication component for Firebase.
  */

  import { getApp, getApps, initializeApp } from "firebase/app";
  import {
    AuthErrorCodes,
    getAuth,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    setPersistence,
    browserLocalPersistence,
    sendEmailVerification
  } from "firebase/auth";
  import { getDatabase, ref, onValue, set, get } from "firebase/database";
  import { page } from "$app/stores";
  import { goto } from "$app/navigation";
  import { browser } from "$app/environment";

  const firebaseConfig = {
    apiKey: "AIzaSyCpZKwjZq81wfNVPC2K6PqbGEL1hnP65HY",
    authDomain: "quitelean.firebaseapp.com",
    projectId: "quitelean",
    storageBucket: "quitelean.appspot.com",
    messagingSenderId: "434611625957",
    appId: "1:434611625957:web:fbea8cbf3b58525ac6190c",
    measurementId: "G-FPX0STF405",
  };

  export let firebaseApp,
    firebaseAuth,
    firebaseDatabase,
    currentUserInformation = null,
    authErrorState = "",
    userAuthState,
    competitiveUserInformation = { elo: "NILL" };
  //Do all of the heavy lifting in this component and export it to whatever page it might be used in.
  if (getApps().length === 0) {
    firebaseApp = initializeApp(firebaseConfig);
  } else {
    firebaseApp = getApp();
  }

  firebaseAuth = getAuth(firebaseApp);
  firebaseDatabase = getDatabase(firebaseApp);
  
  //Stop user from being logged out whenever they close the tab
  setPersistence(firebaseAuth,browserLocalPersistence);

  //Kicks user back to home screen if they aren't logged in basically
  onAuthStateChanged(firebaseAuth, (user) => {
    if (user && user.displayName) {
      if (browser) {
        if ( $page.url.pathname == "/signup" || $page.url.pathname == "/signin") {
          goto("/");
        }
      }
      userAuthState = true;
      currentUserInformation = user.toJSON();
      const compInfoRef = ref(firebaseDatabase, `users/${user.uid}`);
      onValue(compInfoRef, (snapshot) => {
        competitiveUserInformation = snapshot.val();
      });
    } else {
      userAuthState = false;
      currentUserInformation = "nouser";
      if (browser) {
        //console.log($page.url.pathname);
        if (
          $page.url.pathname !== "/" &&
          $page.url.pathname !== "/signup" &&
          $page.url.pathname !== "/signin"
        ) {
          goto("/");
        }
      }
    }
  });

  export const saveChangesOnSettings = function(inst) {
    if(userAuthState) {
      const userInfoRef = ref(firebaseDatabase, `users/${currentUserInformation.uid}`)
      onValue(userInfoRef, (userInformation)=>{
        let old_inst = userInformation.val().institution;
        if (old_inst==inst) {
          //do nothing since they are the same
        } else {
          set(ref(firebaseDatabase,`users/${currentUserInformation.uid}`), {
            elo: userInformation.val().elo,
            uid: userInformation.val().uid,
            username: userInformation.val().username,
            institution: inst
          });
        }
      })
    } 
    
  }

  //Sign in function
  export const signIn = function (email, password) {
    authErrorState = "";
    if (!(email && password)) {
      authErrorState = "Please fill all fields";
      return;
    }
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((user) => {
        if (browser) {
          goto("/");
        }
      })
      .catch((error) => {
        let code = error.code;
        if (code == AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) {
          authErrorState = "Incorrect email or password";
        } else if (code == AuthErrorCodes.INVALID_EMAIL) {
          authErrorState = "Invalid email";
        }
      });
  };

  export const sendVerificationEmail = function() {
    if(currentUserInformation!=undefined&&firebaseAuth.currentUser!=undefined) {
      sendEmailVerification(firebaseAuth.currentUser)
    }
  }

  //SignUp function uses a cloud function to prevent manipulation of regex
  export const signUp = function (username, email, password) {
    authErrorState = "";
    if (username===""||email===""||password==="") {
      authErrorState = "Please fill all fields";
      return;
    }
    fetch("https://createaccount-q3az2gk4sa-uc.a.run.app", {
      method: "POST",
      body: JSON.stringify({
        body_username: username,
        body_password: password,
        body_email: email,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((code) => {
        return code.json();
      })
      .then((Res) => {
        let code = Res.error_code;
        //console.log(code);
        if (code == AuthErrorCodes.EMAIL_EXISTS) {
          authErrorState = "Email already in use";
        } else if (code == AuthErrorCodes.INTERNAL_ERROR) {
          authErrorState = "Unknown error, please try again";
        } else if (code == AuthErrorCodes.INVALID_EMAIL) {
          authErrorState = "Please enter a valid email";
        } else if (code == AuthErrorCodes.INVALID_PASSWORD) {
          authErrorState = "Password is too weak";
        } else if (code == "error-username-invalid") {
          authErrorState =
            "Username must be 3-20 characters and be alphanumeric";
        } else if (code == "error-username-in-use") {
          authErrorState = "Username already in use";
        } else if (code == "ok") {
          signInWithEmailAndPassword(firebaseAuth, email, password).then(
            (user) => {
              sendEmailVerification();
              if (browser) {
                goto("/");
              }
            },
          );
        }
      });
  };
</script>

<div></div>
