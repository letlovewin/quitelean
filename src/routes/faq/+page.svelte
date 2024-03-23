<script>
    import Navigation from "../Navigation.svelte";
    import Auth from "../Auth.svelte";

    let webAppAuthComponent,
        webAppTitleState = "QuiteLean",
        currentUserInformation,
        competitiveUserInformation,
        userAuthState,
        signUp,
        signIn,
        authErrorState;
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

{#if userAuthState !== undefined}
    {#key userAuthState}
        {#if userAuthState}
            <Navigation displayname={currentUserInformation.displayName} />

            <div class="container text-center p-5 w-75">
                <h1>FAQ</h1>

                <h3>Are there memory and time limits for the submitted code? If so, what?</h3>
                <p><strong>Yes!</strong> You have a maximum storage of 256MB, and your code will have 60 seconds to run before you get a fail verdict.</p>
            </div>
        {/if}
    {/key}
{/if}
