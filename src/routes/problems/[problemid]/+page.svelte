<script>
    import { initializeApp, getApp, getApps } from "firebase/app";
    import { getDatabase, ref, get, child } from "firebase/database";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import Auth from "../../Auth.svelte";
    import Navigation from "../../Navigation.svelte";
    let webAppAuthComponent,
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
    let rating = 0;

    get(child(ref(database), `/problems/`)).then((snapshot) => {
        if (snapshot.exists()) {
            if (snapshot.val()[pid] !== "undefined") {
                let meat = snapshot.val()[pid];
                if (meat != undefined) {
                    statement = meat.statement;
                    title = meat.title;
                    rating = meat.rating;
                } else {
                    if (browser) {
                        goto("/");
                    }
                }
            } else {
                if (browser) {
                    goto("/");
                }
            }
        }
    });

    /*

        @Function runCode
        @Params none
        @Description Takes the code that was entered into the textarea and then sends it to the API for compiling.

    */
    const submitCodeURL = "http://localhost:5173/quitelean/us-central1/compileCode";

    async function runCode() {
        console.log(currEditor);
        fetch(submitCodeURL, {
      method: "POST",
      body: JSON.stringify({
        code: currEditor
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
        console.log(code);
      });
    }
</script>

<svelte:head>
    <title>{webAppTitleState}</title>
</svelte:head>

<Auth
    bind:this={webAppAuthComponent}
    bind:currentUserInformation
    bind:userAuthState
    bind:signUp
    bind:signIn
    bind:authErrorState
    bind:competitiveUserInformation
/>

{#if userAuthState != undefined}
    {#key userAuthState}
        {#if statement !== ""}
            <div class="container w-75">
                <div class="row p-5">
                    <div class="col-md">
                        <h3 class="text-center">
                            <strong>{@html title}</strong>
                        </h3>
                        <p class="bg-success text-center rounded-pill">
                            Rating: {rating}
                        </p>
                        <hr />
                        <p>
                            {@html statement}
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
                                bind:value={currEditor}
                            ></textarea>
                        </div>
                        <button
                            class="btn btn-primary rounded-pill"
                            on:click={runCode}>Submit</button
                        >
                    </div>
                </div>
            </div>
        {/if}
    {/key}
    <Navigation displayname={currentUserInformation.displayName} />
{/if}

<style>
    textarea {
        font-family: monospace;
    }
</style>
