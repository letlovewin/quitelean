<script>
    /*
        Navbar component, only shows when user is logged in
    */
    import { getApp } from "firebase/app";
    import { getAuth, signOut } from "firebase/auth";
    import { browser } from "$app/environment";
    import { goto } from "$app/navigation";
    const app = getApp();
    const auth = getAuth(app);
    export let displayname;
    function logOut() {
        signOut(auth);
    }
</script>

<div
    class="position-fixed vstack gap-3 border-end top-0 h-100 z-3 navbar-color text-center"
    style="width:100px;"
    id="desktop-navbar"
>
    <input
        type="image"
        src={"/icon.png"}
        alt="The QuiteLean Icon"
        style="width:50px;height:50px"
        class="mt-2"
        on:click={() => {
            if (browser) {
                goto("/");
            }
        }}
    />
    <p class="subsubtext">QuiteLean</p>
    <br />
    <button
        class="btn"
        style="background-transparency:100%"
        on:click={() => {
            if (browser) {
                goto(`/people/${displayname}`);
            }
        }}>Profile</button
    >
    <button
        class="btn"
        style="background-transparency:100%"
        on:click={() => {
            if (browser) {
                goto("/problems/");
            }
        }}>Problems</button
    >
    <button
        class="btn"
        style="background-transparency:100%"
        on:click={() => {
            if (browser) {
                goto("/faq/");
            }
        }}>FAQ</button
    >
    <div
        class="btn-group dropend position-absolute bottom-0 start-50 translate-middle-x"
    >
        <input
            type="image"
            src={"/list.svg"}
            style="width:35px;height:35px"
            alt="Menu icon"
            class="mb-3"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        />

        <ul class="dropdown-menu">
            <li>
                <button
                    class="btn btn-sm"
                    on:click={() => {
                        if (browser) {
                            goto("/account/");
                        }
                    }}>Settings</button
                >
            </li>
            <li>
                <button class="btn btn-sm" on:click={logOut}>Sign out</button>
            </li>
        </ul>
    </div>
</div>

<div
    class="container position-fixed bottom-0 border-top w-100 z-3 navbar-color"
    style="height:70px;"
    id="mobile-navbar"
>
    <div class="hstack gap-3">
        <input
            type="image"
            src={"/icon.png"}
            alt="QuiteLean Symbol"
            style="width:60px;height:60px;"
            class="ms-1 my-auto"
            on:click={() => {
                if (browser) {
                    goto("/");
                }
            }}
        />
    </div>

    <div class="dropup-center dropup position-absolute mb-1 bottom-0 end-0">
        <input
            type="image"
            src={"/list.svg"}
            alt="Menu icon"
            class="me-2"
            style="margin-top:10px;height:45px;width:45px;"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        />
        <ul class="dropdown-menu">
            <li>
                <button
                    class="btn btn-sm"
                    on:click={() => {
                        if (browser) {
                            goto("/faq/");
                        }
                    }}>FAQ</button
                >
            </li>
            <li>
                <button
                    class="btn btn-sm"
                    on:click={() => {
                        if (browser) {
                            goto(`/people/${displayname}`);
                        }
                    }}>Profile</button
                >
            </li>
            <li>
                <button
                    class="btn btn-sm"
                    on:click={() => {
                        if (browser) {
                            goto("/problems/");
                        }
                    }}>Problems</button
                >
            </li>
            <li>
                <button
                    class="btn btn-sm"
                    on:click={() => {
                        if (browser) {
                            goto("/account/");
                        }
                    }}>Settings</button
                >
            </li>
            <li>
                <button class="btn btn-sm" on:click={logOut}>Sign out</button>
            </li>
        </ul>
    </div>
</div>

<style>
    @media only screen and (max-width: 600px) {
        #desktop-navbar {
            display: none;
        }
        #mobile-navbar {
            display: block;
        }
    }
    @media only screen and (min-width: 601px) {
        #desktop-navbar {
            display: block;
        }
        #mobile-navbar {
            display: none;
        }
    }
</style>
