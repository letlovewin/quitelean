<svelte:options accessors={true} />

<script>
    import { initializeApp, getApp, getApps } from "firebase/app";
    import { getDatabase, ref, get, child } from "firebase/database";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import Auth from "../../Auth.svelte";
    import Navigation from "../../Navigation.svelte";

    const webAppRenderStates = {
        unauthorized: "unauthorized",
        unauthorizedSignIn: "unauthorized-signin",
        unauthorizedSignUp: "unauthorized-signup",
        authorizedHome: "authorized-home",
    };
    let webAppRenderState,
        webAppAuthComponent,
        webAppTitleState = "QuiteLean",
        currentUserInformation,
        competitiveUserInformation,
        userAuthState,
        signUp,
        signIn,
        authErrorState,
        currEditor;
    const firebaseConfig = {
        apiKey: "AIzaSyCpZKwjZq81wfNVPC2K6PqbGEL1hnP65HY",
        authDomain: "quitelean.firebaseapp.com",
        projectId: "quitelean",
        storageBucket: "quitelean.appspot.com",
        messagingSenderId: "434611625957",
        appId: "1:434611625957:web:fbea8cbf3b58525ac6190c",
        measurementId: "G-FPX0STF405",
    };
    let firebaseApp;
    if (getApps().length === 0) {
        firebaseApp = initializeApp(firebaseConfig);
    } else {
        firebaseApp = getApp();
    }

    const database = getDatabase(firebaseApp);
    export let data;
    let pid = data.information.title;
    let statement = "";
    let title = "";
    get(child(ref(database), `/problems/`)).then((snapshot) => {
        if (snapshot.exists()) {
            if (snapshot.val()[pid] !== "undefined") {
                let meat = snapshot.val()[pid];
                statement = meat.statement;
                title = meat.title;
            } else {
                if (browser) {
                    goto("/");
                }
            }
        }
    });
</script>

<svelte:head>
    <title>{webAppTitleState}</title>
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"
    ></script>
    <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
    <script
        id="MathJax-script"
        async
        src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
    >
    </script>
</svelte:head>

<Auth
    bind:this={webAppAuthComponent}
    bind:currentUserInformation
    bind:userAuthState
    bind:signUp
    bind:signIn
    bind:authErrorState
    bind:webAppRenderState
    bind:competitiveUserInformation
/>

{#key webAppRenderState}
    {#if webAppRenderState == webAppRenderStates.authorizedHome}
        <div class="container">
            <div class="row p-5">
                <div class="col-md">
                    <h3 class="text-center">
                        <strong>{title}</strong>
                    </h3>
                    <hr />
                    <p>
                        {statement}
                    </p>
                </div>
                <div class="col-md text-center">
                    <div class="mb-3">
                        <textarea
                            class="form-control"
                            spellcheck="false"
                            autocapitalize="false"
                            autocorrect="false"
                            rows="15"
                        ></textarea>
                    </div>
                    <button class="btn btn-primary rounded-pill">Submit</button>
                </div>
            </div>
        </div>
        <Navigation bind:webAppRenderState />
    {/if}
{/key}

<style>
    textarea {
        font-family: monospace;
    }
</style>
