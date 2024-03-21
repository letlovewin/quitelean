<svelte:options accessors={true} />

<script>
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import Auth from "../Auth.svelte";

    let webAppAuthComponent,
        webAppTitleState = "QuiteLean",
        currentUserInformation,
        competitiveUserInformation,
        userAuthState,
        signUp,
        signIn,
        authErrorState;

    let emailInputField, passwordInputField;
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

{#key userAuthState}
    {#if userAuthState == false}
        <div
            class="container position-absolute top-50 start-50 translate-middle d-flex justify-content-center text-center"
        >
            <div>
                <img
                    src={"/icon.png"}
                    alt="..."
                    style="width:150px;height:150px;"
                />
                <h3>Sign in</h3>
                <div class="container vstack">
                    <div class="input-group mb-3">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="Email"
                            aria-label="Email"
                            bind:this={emailInputField}
                        />
                    </div>
                    <div class="input-group mb-3">
                        <input
                            type="password"
                            class="form-control"
                            placeholder="Password"
                            aria-label="Password"
                            bind:this={passwordInputField}
                            on:keypress={(key) => {
                                if (key.code == "Enter") {
                                    signIn(
                                        emailInputField.value,
                                        passwordInputField.value,
                                    );
                                }
                            }}
                        />
                    </div>
                    <!--
<button class="btn text-secondary" style="background-transparency:100%">Forgot password</button>
                    -->
                </div>
                <button
                    class="btn btn-primary rounded-pill"
                    on:click={() => {
                        signIn(emailInputField.value, passwordInputField.value);
                    }}>Sign in</button
                >

                <p class="error my-2">{authErrorState}</p>
            </div>
        </div>
        <button
            class="btn btn-outline-secondary rounded-circle position-absolute top-0 start-0 m-2"
            on:click={() => {
                authErrorState = "";
                if (browser) {
                    goto("/");
                }
            }}
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="32"
                fill="currentColor"
                class="bi bi-arrow-left-short"
                viewBox="0 0 16 16"
            >
                <path
                    fill-rule="evenodd"
                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5"
                />
            </svg></button
        >
    {/if}
{/key}
