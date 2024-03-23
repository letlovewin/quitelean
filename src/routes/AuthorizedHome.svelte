<script>
    import Navigation from "./Navigation.svelte";
    export let currentUserInformation;
    export let competitiveUserInformation;
</script>

<Navigation displayname={currentUserInformation.displayName} />

<div class="container text-center p-5">
    <h1>Welcome, {currentUserInformation.displayName}!</h1>
    <p>
        {#key competitiveUserInformation}
            At the moment, your elo is {competitiveUserInformation.elo}.
        {/key}
    </p>
</div>
