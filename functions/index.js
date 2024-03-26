/*

    *File: index.js
    *Author: Gray
    *Created: 3/19/24

*/

const { onRequest } = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const { initializeApp } = require("firebase-admin/app");
const { getDatabase } = require("firebase-admin/database")
const { getAuth } = require("firebase-admin/auth")


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

function random(size) {
    //returns a crypto-safe random
    return require("crypto").randomBytes(size).toString('hex');
}

/*

    @Function createAccount
    @Description Function that creates an account given a username, email, and password.

*/

exports.createAccount = onRequest({ cors: true }, (request, response) => {
    const Res = request.body;
    const username = Res.body_username;
    const email = Res.body_email;
    const password = Res.body_password;
    const usernameRegexExpression = /^[a-zA-Z0-9]{3,20}$/;
    if (!username.match(usernameRegexExpression)) {
        //Checks for username validity-- if the username isn't 3-20 characters long 
        //or it's not alphanumeric the API responds with an error.
        response.send({ error_code: "error-username-invalid" });
        return;
    }
    const usernameRef = firebaseDatabase.ref(`usernames/${username}`);
    usernameRef.once('value', (usernameValiditySnapshot) => {
        if (!usernameValiditySnapshot.exists()) {
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
                        //If there's an error of any sort, the user is deleted to stop
                        //a duplicate user creation from happening.
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

/*
    Beginning of code sandboxing logic
    A POST request is sent to the compileCode API and it writes the code to a new file in its temp storage. Then it mounts a folder to a docker container and runs the code in there.

*/

exports.compileCode = onRequest({ cors: true }, (request, response) => {
    const exec = require('child_process').exec;
    const fs = require('fs');
    const Res = request.body;
    const code = Res.body_code;
    const file_name = random(10);
    fs.writeFile(`/tmp/${file_name}.lean/`, code, (err)=>{
        response.send({error_code:"Unknown error occurred"});
    })
    logger.info(code);
    //... then clean up the /tmp/ folder ...
    fs.rmSync(`/tmp/`, { recursive: true, force: true });
})