<script lang="ts">
    import { toDoItems } from "../store";
    import { fade, scale } from "svelte/transition";

    function removeFromList(index: number) {
        $toDoItems.splice(index, 1);
        $toDoItems = $toDoItems;
    }
</script>

{#if !$toDoItems.length}
<h2 class="text-lg">Task is Empty</h2>
{/if}
{#each $toDoItems as item, index}
  <div class="bg-white shadow-md rounded-lg p-4 mb-2 flex items-center justify-between" in:scale out:fade="{{ duration: 500 }}">
    <div>
        <input bind:checked={item.status} type="checkbox">
        <span class="ml-2" class:line-through={item.status} class:text-slate-400={item.status}>{item.text}</span>
    </div>
    <button class="rounded-lg p-2 bg-red-500 text-white" on:click={() => removeFromList(index)}>Delete</button>
  </div>
{/each} 