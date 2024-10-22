<!-- //team counter mtg
<script>
    export let counterRed = 20;
     function increment() {
      if (counterRed < 20) {
        counterRed += 1;
      }
    }
     function decrement() {
      if (counterRed > 0) {
        counterRed -= 1;
      }
    }
  </script>
  <h2 style="color:red">Tým Red {counterRed}</h2>
  <button on:click={increment}>+</button>
  <button on:click={decrement}>-</button> -->
