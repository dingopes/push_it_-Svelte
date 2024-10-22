<script>
  let show = false;
  function exampleAction(node) {
    console.log(node);
  }
</script>

<input type="checkbox" bind:checked={show} />
{#if show}
  <div use:exampleAction />
{/if}

<style>
  div {
    width: 300px;
    height: 300px;
    border: solid black 1px;
  }
</style>
