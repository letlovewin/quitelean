<script>
    import { initializeApp } from "firebase/app";
    const firebaseConfig = {
        apiKey: "AIzaSyCpZKwjZq81wfNVPC2K6PqbGEL1hnP65HY",
        authDomain: "quitelean.firebaseapp.com",
        projectId: "quitelean",
        storageBucket: "quitelean.appspot.com",
        messagingSenderId: "434611625957",
        appId: "1:434611625957:web:fbea8cbf3b58525ac6190c",
        measurementId: "G-FPX0STF405",
    };
    const app = initializeApp(firebaseConfig);
    let isUserAuthenticated = false;
</script>

{#key isUserAuthenticated}
    {#if isUserAuthenticated == false}
        <div class="container position-absolute top-50 start-50 translate-middle d-flex justify-content-center text-center">
            
        </div>
    {:else}
        <h1>Dashboard</h1>
    {/if}
{/key}
