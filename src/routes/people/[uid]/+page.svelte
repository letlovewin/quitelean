<script>
    /*
        @File: +page.svelte for people/[uid]
        @Author: Gray 

    */
    import { initializeApp, getApp, getApps } from "firebase/app";
    import { getDatabase, ref, get, child, onValue } from "firebase/database";
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
        authErrorState;
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
    let username = data.information.username;
    let display = "";
    let institution = "";
    let rating = 0;

    onValue(ref(database, `/usernames/${username}`), (uidSnapshot) => {
        if (uidSnapshot.exists()) {
            onValue(ref(database,`/users/${uidSnapshot.val().uid}`),(trueUserData)=>{
                display = trueUserData.val().username;
                institution = trueUserData.val().institution;
                if(institution==undefined){
                    institution="No institution";
                }
                rating = trueUserData.val().elo;
            })
        } else {
            if(browser) {
                goto('/');
            }
        }
    });
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
        {#if userAuthState == true}
            <div class="container p-5 w-75">
                <div class="col-md">
                    <h3 class="text-center">
                        <strong>{@html display}</strong>
                    </h3>
                    <p class="subtext text-center">{institution}</p>
                    <p class="text-center text-success">
                        Rating: {rating}
                    </p>
                </div>
            </div>
            <Navigation displayname={currentUserInformation.displayName} />
        {/if}
    {/key}
{/if}
