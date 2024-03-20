<script>
    import { getApp } from "firebase/app";
    import { getAuth, signOut } from "firebase/auth";
    import { getContext, setContext } from "svelte";
    const app = getApp();
    const auth = getAuth(app);

    function logOut() {
        signOut(auth);
    }

    export let webAppRenderState;
</script>

<div
    class="position-fixed vstack gap-3 border-end top-0 h-100 z-3 navbar-color text-center"
    style="width:75px;"
    id="desktop-navbar"
>
    <input
        type="image"
        src={"/icon.png"}
        alt="The QuiteLean Icon"
        style="width:50px;height:50px"
        class="mt-2"
        on:click={()=>{window.location = '/'}}
    />
    <p class="subsubtext">QuiteLean</p>
    <br />
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
                <button class="btn btn-sm" on:click={logOut}>Sign out</button>
            </li>
        </ul>
    </div>
</div>

<div
    class="container position-fixed bottom-0 border-top w-100 z-3 navbar-color"
    style="height:50px;"
    id="mobile-navbar"
>
    <input
        type="image"
        src={"/icon.png"}
        alt="Lambda symbol in pink"
        style="width:40px;height:40px;margin-top:10px;"
        class="ms-1"
        on:click={(webAppRenderState = "authorized-home")}
    />
    <div class="dropup-center dropup position-absolute mb-1 bottom-0 end-0">
        <input
            type="image"
            src={"/list.svg"}
            alt="Menu icon"
            class="me-2"
            style="margin-top:10px;height:25px;width:25px;"
            data-bs-toggle="dropdown"
            aria-expanded="false"
        />
        <ul class="dropdown-menu">
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
