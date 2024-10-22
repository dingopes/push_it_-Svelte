<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
     let backgroundColor = 'aliceblue';
     function handleClick(e) {
        const randomColor = getRandomColor();
        backgroundColor = randomColor;
        dispatch('custom_event', randomColor);
    }
     function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
</script>
 <div role="button" style="background-color: {backgroundColor}; width: 90%; height: 300px; margin-top: 30px;" on:click={handleClick}></div>