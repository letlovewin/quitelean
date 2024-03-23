<svelte:options accessors={true} />

<script>
    import Auth from "../Auth.svelte";
    import Navigation from "../Navigation.svelte";
    import ProblemRow from "./ProblemRow.svelte";
    import { initializeApp, getApp, getApps } from "firebase/app";
    import { getDatabase, ref, get, child } from "firebase/database";
    let webAppAuthComponent,
        webAppTitleState = "QuiteLean",
        currentUserInformation,
        competitiveUserInformation,
        userAuthState,
        signUp,
        signIn,
        authErrorState,
        problemSpace;

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
    let problemset;
    get(child(ref(database), `/problems/`)).then((snapshot) => {
        if (snapshot.exists()) {
            for (const [key, value] of Object.entries(snapshot.val())) {
                new ProblemRow({
                    target: problemSpace,
                    props: {
                        rating: value.rating,
                        title: value.title,
                        link: `/problems/${key}`,
                    },
                });
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
        {#if !userAuthState}
            <p>Hey, you're not supposed to be here!</p>
        {:else}
            <Navigation displayname={currentUserInformation.displayName} />

            {#key competitiveUserInformation}
                {#await problemset then}
                    <div class="container text-center p-5 w-75">
                        <h1>Problems</h1>
                        <p>
                            New problems are added ad hoc. If you want a problem
                            to be on here, email me at <a
                                href="mailto:quitelean@gmail.com"
                                >quitelean@gmail.com</a
                            >.
                        </p>
                        <div
                            class="container border"
                            bind:this={problemSpace}
                        ></div>
                    </div>
                {/await}
            {/key}
        {/if}
    {/key}
{/if}
