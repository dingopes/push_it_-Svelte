<script>
  let show = false;
  function exampleAction(node, color) {
    const contextFunc = (e) => {
      e.preventDefault();
      alert("Rich Click");
    };
    node.addEventListener("contextmenu", contextFunc);
    node.style.backgroundColor = color;
    return {
      destroy() {
        console.log("destroy was called");
        node.removeEventListener("conextmenu", contextFunc);
      },
    };
  }
</script>

<input type="checkbox" bind:checked={show} />
{#if show}
  <div use:exampleAction={"red"} />
{/if}

<style>
  div {
    width: 300px;
    height: 300px;
    border: solid black 1px;
  }
</style>
