<script>
    /*
      This is the authentication component for Firebase.
  */
  
    const webAppRenderStates = {
      unauthorized: "unauthorized",
      unauthorizedSignIn: "unauthorized-signin",
      unauthorizedSignUp: "unauthorized-signup",
      authorizedHome: "authorized-home",
    };
    import { getApp, getApps, initializeApp } from "firebase/app";
    import {
      AuthErrorCodes,
      createUserWithEmailAndPassword,
      getAuth,
      onAuthStateChanged,
      signInWithEmailAndPassword,
      updateProfile,
    } from "firebase/auth";
    import {
      getDatabase,
      get,
      ref,
      child,
      onValue,
      set,
    } from "firebase/database";
  
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
      webAppRenderState,
      currentUserInformation = undefined,
      authErrorState = "",
      userAuthState;
  
    if (getApps().length === 0) {
      firebaseApp = initializeApp(firebaseConfig);
    } else {
      firebaseApp = getApp();
    }
  
    firebaseAuth = getAuth(firebaseApp);
    firebaseDatabase = getDatabase(firebaseApp);
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user && user.displayName) {
        userAuthState = true;
        currentUserInformation = user.toJSON();
        webAppRenderState = webAppRenderStates.authorizedHome;
      } else {
        userAuthState = false;
        currentUserInformation = null;
        webAppRenderState = webAppRenderStates.unauthorized;
      }
    });
  
    export const signIn = function (email, password) {
      authErrorState = "";
      if (!(email && password)) {
        authErrorState = "Please fill all fields";
        return;
      }
      signInWithEmailAndPassword(firebaseAuth, email, password)
        .then((user) => {
          webAppRenderState = "authorized-home";
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
  
    export const signUp = function (username, email, password) {
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
            signInWithEmailAndPassword(firebaseAuth, email, password)
              .then((user) => {
                webAppRenderState = "authorized-home";
              });
          }
        });
    };
  </script>
  
  <div></div>
  