<script>
    let name = "blue";
    let age = 33;
    import {createEventDispatcher} from 'svelte';
    function onSubmit(e){
        dispatchEvent('form_submit', {
            name,
            age,
        });

    }
    
 </script>
 
 <form on:submit|preventDefault={onSubmit}>
    <label for="name">name</label>
    <input type="text" bind:value={name} id="name">
    <label for="age">Age</label>
    <input type="text" bind:value={age} id="age">
    <button type="submit">Submit</button>
 </form>
 