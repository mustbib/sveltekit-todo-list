<script lang="ts">
    import ToDoInputForm from "../components/ToDoInputForm.svelte";
    import ToDoList from "../components/ToDoList.svelte";
	import { onMount } from "svelte";

    let newItemInputForm: any = null;

    onMount(() => {
        newItemInputForm.focus()
    })

    let nameEntered: boolean = false;

    let firstName: string = "";
    let lastName: string = "";

    $: fullName = firstName  + " " + lastName;

    function handleSubmit() {
        if (firstName && lastName) {
            nameEntered = true
        }
    }
</script>

<main class="text-center">
    {#if nameEntered}
    <h1 class="text-3xl font-bold">Welcome to task manager, <span class="text-blue-800">{fullName}</span> 👋</h1>
    <ToDoInputForm userName = {fullName}/>

    <ToDoList />
    {:else}
    <h1 class="text-3xl font-bold">Welcome to task manager!</h1>
    <h3>Please enter your name:</h3>
    <form on:submit|preventDefault={handleSubmit}>
        <div class="m-4">
            <input class="border rounded-lg p-4" bind:value={firstName} bind:this={newItemInputForm} type="text" placeholder="First name" required>
            <input class="border rounded-lg p-4" bind:value={lastName} type="text" placeholder="Last name" required>
        </div>
        <div>
            <button on:click={handleSubmit} class="bg-blue-800 rounded-lg text-white p-4 mt-4">Start managing tasks</button>
        </div>
    </form>
    {/if}
</main>