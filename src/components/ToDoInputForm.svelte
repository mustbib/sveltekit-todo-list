<script lang="ts">
  import { toDoItems } from "../store";
	import { onMount } from "svelte";

  export let userName: string;

  let newItemInputForm: any = null;

  onMount(() => {
      newItemInputForm.focus()
  })

  let newItem : string = "";
  

  function addToList() {
    if (newItem == "") {
      alert('cannot be empty');
      return;
    }
    $toDoItems = [...$toDoItems, {text: newItem, status: false}];
    newItem = "";
  }
</script>

<div class="m-4">
  <input class="border rounded-lg p-2 hover:border-2 hover:border-blue-800" bind:value={newItem} bind:this={newItemInputForm} type="text" placeholder="Write a new task">
  <button on:click={addToList} class="hover:bg-blue-800 rounded-lg border-2 border-blue-800 text-blue-800 hover:text-white p-2" type="button">Add task</button>
</div>

<h3 class="text-base font-bold m-2">{userName}'s task list:</h3>