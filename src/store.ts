import { writable } from "svelte/store";

export const toDoItems = writable([
    { text: 'Build a rocket 🚀', status: true }
]);