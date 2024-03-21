<svelte:options accessors={true} />

<script>
    import "./global.css";
    import Auth from "./Auth.svelte";
    import Navigation from "./Navigation.svelte";
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
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
            <div
                class="container position-absolute top-50 start-50 translate-middle d-flex justify-content-center text-center"
            >
                <div>
                    <img
                        src={"/icon.png"}
                        alt="QuiteLean Icon"
                        style="width:200px;height:200px;"
                    />
                    <h1>QuiteLean</h1>
                    <p class="subtext">
                        Learning proofs asynchronously using <a href="https://en.wikipedia.org/wiki/Lean_(proof_assistant)">Lean</a>
                    </p>
                    <div class="container vstack gap-3">
                        <button
                            class="btn btn-primary btn-md rounded-pill"
                            on:click={() => {
                                if (browser) {
                                    goto("/signup");
                                }
                            }}>Create an account</button
                        >
                        <button
                            class="btn btn-secondary btn-md rounded-pill"
                            on:click={() => {
                                if (browser) {
                                    goto("/signin");
                                }
                            }}>Sign in</button
                        >
                    </div>
                </div>
            </div>
            <div
                class="container position-absolute bottom-0 start-50 translate-middle text-center"
            >
                <button
                    class="btn"
                    style="background-color:transparent;"
                    data-bs-toggle="modal"
                    data-bs-target="#aboutModal"
                >
                    About
                </button>
                <button
                    class="btn"
                    style="background-color:transparent;"
                    data-bs-toggle="modal"
                    data-bs-target="#contactModal"
                >
                    Contact
                </button>
            </div>
            <div
                class="modal fade"
                id="contactModal"
                tabindex="-1"
                aria-labelledby="contactModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="contactModalLabel">
                                Contact
                            </h1>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <p>
                                My discord is letluvwin, and my email is <a
                                    href="mailto:quitelean@gmail.com"
                                    >quitelean@gmail.com</a
                                >.
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal">Close</button
                            >
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="modal fade"
                id="aboutModal"
                tabindex="-1"
                aria-labelledby="aboutModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="aboutModalLabel">
                                About
                            </h1>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="modal-body">
                            <p>
                                Learning math proofs is <i>hard</i>— especially
                                when you have no one to check them. The way I
                                learned was through crunching dozens of problem
                                sets until I was confident that I understood the
                                proof technique fairly well, but that also
                                required hunting for answers, asking my
                                professors (often to the point that I would
                                annoy them!) for clarification, so I thought of
                                creating a website like Kattis or LeetCode, but
                                for verifying proofs using the
                                <a
                                    href="https://en.wikipedia.org/wiki/Lean_(proof_assistant"
                                    >Lean proof assistant</a
                                > instead.
                            </p>
                            <p>
                                As a consequence, this website exists! Right now
                                it's pretty bare-bones, but I think it can be
                                helpful to some even now.
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal">Close</button
                            >
                        </div>
                    </div>
                </div>
            </div>
        {:else}
            <Navigation />
            {#key competitiveUserInformation}
                <div class="container text-center p-5">
                    <h1>Welcome, {currentUserInformation.displayName}!</h1>
                    <p>
                        At the moment, your elo is {competitiveUserInformation.elo}.
                    </p>
                </div>
            {/key}
        {/if}
    {/key}
{/if}
