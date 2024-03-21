

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const { initializeApp } = require("firebase-admin/app");
const { getDatabase, set, ref, child, get, onValue } = require("firebase-admin/database")
const { getAuth, createUserWithEmailAndPassword, updateProfile, generateEmailVerificationLink } = require("firebase-admin/auth")


const firebaseConfig = {
    apiKey: "AIzaSyCpZKwjZq81wfNVPC2K6PqbGEL1hnP65HY",
    authDomain: "quitelean.firebaseapp.com",
    databaseURL: "https://quitelean-default-rtdb.firebaseio.com",
    projectId: "quitelean",
    storageBucket: "quitelean.appspot.com",
    messagingSenderId: "434611625957",
    appId: "1:434611625957:web:fbea8cbf3b58525ac6190c",
    measurementId: "G-FPX0STF405"
};

const firebaseApp = initializeApp(firebaseConfig)
const firebaseAuth = getAuth(firebaseApp);
const firebaseDatabase = getDatabase(firebaseApp);

exports.sendEmailVerificationLink = onRequest({cors:true},(request,response)=>{
    const Res = request.body;
    const email = Res.body_email;
    
})


exports.createAccount = onRequest({ cors: true }, (request, response) => {
    const Res = request.body;
    const username = Res.body_username;
    const email = Res.body_email;
    const password = Res.body_password;
    const usernameRegexExpression = /^[a-zA-Z0-9]{3,20}$/;
    if (!username.match(usernameRegexExpression)) {

        response.send({ error_code: "error-username-invalid" });
        return;
    }
    let debounce = false;
    const usernameRef = firebaseDatabase.ref(`usernames/${username}`);
    usernameRef.once('value', (snapshot) => {
        if (!snapshot.exists()) {
            firebaseAuth.createUser({
                email: email,
                emailVerified: false,
                password: password,
                displayName: username,
                disabled: false
            })
                .then((user) => {
                    usernameRef.set({ uid: user.uid }).then(() => {
                        const uidRef = firebaseDatabase.ref(`users/${user.uid}`)
                        uidRef.set({
                            username: username,
                            uid: user.uid,
                            elo: 0,
                            solved_problems: {},
                            institution: ""
                        }).then(() => {
                            response.send({ error_code: "ok" })
                        });
                    }).catch((error) => {
                        firebaseAuth.deleteUser(user.uid);
                        let code = error.code;
                        response.send({ error_code: code });
                        return;
                    });

                })
                .catch((error) => {
                    let code = error.code;
                    response.send({ error_code: code });
                    return;
                })
        } else {
            response.send({ error_code: "error-username-in-use" });
            return;
        }
    })


})
