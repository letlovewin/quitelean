<svelte:options accessors={true} />

<script>
    import "./global.css";
    import { onMount, setContext, getContext } from "svelte";
    import Auth from "./Auth.svelte";
    import Navigation from "./Navigation.svelte";

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
        authErrorState;

    let emailInputField, passwordInputField, usernameInputField;
</script>

<svelte:head>
    <title>{webAppTitleState}</title>
    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL"
        crossorigin="anonymous"
    ></script>
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

{#key webAppAuthComponent}
    {#key webAppRenderState}
        {#if webAppRenderState == webAppRenderStates.unauthorized}
            <div
                class="container position-absolute top-50 start-50 translate-middle d-flex justify-content-center text-center"
            >
                <div>
                    <img
                        src={"/icon.png"}
                        alt="..."
                        style="width:200px;height:200px;"
                    />
                    <h1>QuiteLean</h1>
                    <div class="container vstack gap-3">
                        <button
                            class="btn btn-primary btn-md rounded-pill"
                            on:click={() => {
                                webAppRenderState =
                                    webAppRenderStates.unauthorizedSignUp;
                            }}>Create an account</button
                        >
                        <button
                            class="btn btn-secondary btn-md rounded-pill"
                            on:click={() => {
                                authErrorState = "";
                                webAppRenderState =
                                    webAppRenderStates.unauthorizedSignIn;
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
                                My discord is letluvwin, and my email is <a href="mailto:portughalam@gmail.com">portughalam@gmail.com</a>.
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
        {:else if webAppRenderState == webAppRenderStates.unauthorizedSignIn}
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
                    <div class="container vstack gap-1">
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
                    </div>
                    <button
                        class="btn btn-primary rounded-pill"
                        on:click={() => {
                            signIn(
                                emailInputField.value,
                                passwordInputField.value,
                            );
                        }}>Sign in</button
                    >
                    <p class="error my-2">{authErrorState}</p>
                </div>
            </div>
            <button
                class="btn btn-outline-secondary rounded-circle position-absolute top-0 start-0 m-2"
                on:click={() => {
                    authErrorState = "";
                    webAppRenderState = webAppRenderStates.unauthorized;
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
        {:else if webAppRenderState == webAppRenderStates.unauthorizedSignUp}
            <div
                class="container position-absolute top-50 start-50 translate-middle d-flex justify-content-center text-center"
            >
                <div>
                    <img
                        src={"/icon.png"}
                        alt="..."
                        style="width:150px;height:150px;"
                    />
                    <h3>Create an account</h3>
                    <div class="container vstack gap-1">
                        <div class="input-group mb-3">
                            <input
                                type="text"
                                class="form-control"
                                placeholder="Username (choose wisely!)"
                                aria-label="Username (choose wisely!)"
                                bind:this={usernameInputField}
                            />
                        </div>
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
                                on:keydown={(key) => {
                                    if (key.code == "Enter") {
                                        signUp(
                                            usernameInputField.value,
                                            emailInputField.value,
                                            passwordInputField.value,
                                        );
                                    }
                                }}
                            />
                        </div>
                    </div>
                    <button
                        class="btn btn-primary rounded-pill"
                        on:click={() => {
                            signUp(
                                usernameInputField.value,
                                emailInputField.value,
                                passwordInputField.value,
                            );
                        }}>Sign up</button
                    >
                    <p class="error my-2">{authErrorState}</p>
                </div>
            </div>
            <button
                class="btn btn-outline-secondary rounded-circle position-absolute top-0 start-0 m-2"
                on:click={() => {
                    webAppRenderState = webAppRenderStates.unauthorized;
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
        {:else if webAppRenderState == webAppRenderStates.authorizedHome}
            {#key competitiveUserInformation}
                <div class="container text-center p-5">
                    <h1>Welcome, {currentUserInformation.displayName}!</h1>
                    <p>
                        At the moment, your elo is {competitiveUserInformation.elo}.
                    </p>
                </div>
                <Navigation bind:webAppRenderState />
            {/key}
        {/if}
    {/key}
{/key}
