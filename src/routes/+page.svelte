<script lang="ts">
    import { page } from "$app/stores"; 
    import { signOut, signIn } from "@auth/sveltekit/client";
    const session = $page.data.session;
    console.log(session);
</script>

<main class="h-screen flex flex-col justify-center items-center">
    {#if session}
        <h1>{`Session found. Welcome ${session?.user?.name}`}</h1>
        <button class="btn" on:click={() => signOut()}>Logout</button>
    {:else}
        <h1>Session not found. Please login</h1>
        <button class="btn" on:click={() => signIn("google")}>Login</button>
    {/if}
</main>