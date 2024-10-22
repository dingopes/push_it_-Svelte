<script>
  let show = false;
  function exampleAction(node, { color, width }) {
    const contextFunc = (e) => {
      e.preventDefault();
      alert("Rich Click");
    };
    node.addEventListener("contextmenu", contextFunc);
    node.style.backgroundColor = color;
    node.style.width = width + "px";
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
  <div use:exampleAction={{ color: "red", width: 500 }} />
{/if}

<style>
  div {
    width: 300px;
    height: 300px;
    border: solid black 1px;
  }
</style>
