<script lang="ts">
    import { page } from "$app/stores"; 
    import { signOut, signIn } from "@auth/sveltekit/client";
    const session = $page.data.session;
    console.log(session);
</script>

<main class="h-screen flex flex-col justify-center items-center">
    {#if session}
        <div class="card p-5 shadow-2xl flex flex-row justify-center items-center gap-4">
            <div class="">
                <img src={session?.user?.image} alt="profile" class="rounded-full" />
            </div>
            <div class="flex flex-col gap-2">
                <h1 class="text-xl">{`Welcome, ${session?.user?.name}`}</h1>
                <p class="">{`Email: ${session?.user?.email}`}</p>
                <button class="btn btn-error" on:click={() => signOut()}>Logout</button>
            </div>
        </div>
    {:else}
        <div class="card p-6 shadow-2xl flex flex-col justify-center gap-2">
            <h1 class="text-2xl">Session not found. Please login</h1>
            <button class="btn" on:click={() => signIn("google")}>Login</button>
        </div>
      
    {/if}
</main>