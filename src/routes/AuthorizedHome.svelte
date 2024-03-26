<script>
    import Navigation from "./Navigation.svelte";
    export let currentUserInformation;
    export let competitiveUserInformation;
</script>

<Navigation displayname={currentUserInformation.displayName} />
{#key competitiveUserInformation}
    <div class="container text-center p-5">
        <h1>Welcome, {currentUserInformation.displayName}!</h1>
        <p>
            At the moment, your elo is {competitiveUserInformation.elo}.
        </p>
    </div>
{/key}
