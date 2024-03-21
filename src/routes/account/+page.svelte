<svelte:options accessors={true} />

<script>
    /* 
        This is the .svelte file for the settings panel the users see. Currently, one can only change their institution, not their username. They have to verify their email before they can interact with anything.

    */
    import "../global.css";
    import Auth from "../Auth.svelte";
    import Navigation from "../Navigation.svelte";
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    let webAppAuthComponent,
        webAppTitleState = "QuiteLean",
        currentUserInformation,
        competitiveUserInformation,
        userAuthState,
        signUp,
        signIn,
        authErrorState,
        sendVerificationEmail,
        saveChangesOnSettings,
        instField;
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
    bind:sendVerificationEmail
    bind:saveChangesOnSettings
    bind:competitiveUserInformation
/>

{#if userAuthState != undefined}
    {#key userAuthState}
        {#if !userAuthState}
            <p>Hey, you're not supposed to be here!</p>
        {:else}
            <Navigation displayname={currentUserInformation.displayName} />
            {#key competitiveUserInformation}
                <div class="container text-center text-wrap p-5 w-75">
                    {#if !currentUserInformation.emailVerified}
                    <h1>Settings</h1>
                        <img
                            src={"/exclamation-lg.svg"}
                            alt="Exclamation point"
                            style="height:200px;width:200px"
                        />
                        <h3>Your email isn't verified!</h3>
                        <p>
                            You won't be able to make any changes to your
                            account until you verify your email.
                        </p>
                        <p>
                            If you don't see an email from us, look in your junk
                            folder, or click the button below. If you mistakenly
                            signed up with a wrong email, <a
                                href="mailto:quitelean@gmail.com">contact us</a
                            >.
                        </p>
                        <button
                            class="btn btn-sm text-primary"
                            style="background-transparency:100%"
                            on:click={() => {
                                sendVerificationEmail();
                            }}>Send me a verification email</button
                        >
                    {:else}
                            <h1>Settings</h1>
                            <p class="text-wrap">UID: {currentUserInformation.uid}</p>
                            <div class="input-group mb-3">
                                <span
                                    class="input-group-text"
                                    id="username-addon">@</span
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder={currentUserInformation.displayName}
                                    aria-label={currentUserInformation.displayName}
                                    aria-describedby="username-addon"
                                    disabled
                                />
                            </div>
                            <div class="input-group mb-3">
                                <input
                                    type="text"
                                    class="form-control"
                                    placeholder="Institution"
                                    aria-label="Institution"
                                    bind:value={instField}
                                />
                            </div>
                            <button class="btn btn-primary" on:click={()=>{saveChangesOnSettings(instField)}}>Save changes</button>
                    {/if}
                </div>
            {/key}
        {/if}
    {/key}
{/if}
