<svelte:options accessors={true} />
<script>
    import Auth from "./Auth.svelte";
    import UnauthorizedHome from "./UnauthorizedHome.svelte";
    import AuthorizedHome from "./AuthorizedHome.svelte";
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

{#if userAuthState != undefined}
    {#key userAuthState}
        {#if !userAuthState}
            <UnauthorizedHome />
        {:else}
            <AuthorizedHome currentUserInformation={currentUserInformation} competitiveUserInformation={competitiveUserInformation}/>
        {/if}
    {/key}
{/if}
