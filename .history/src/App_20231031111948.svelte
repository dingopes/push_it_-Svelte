<script>
  let show = false;
  let width = 100;
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
      update({ color, width }) {
        node.style.width = width + "px";
      },
    };
  }
</script>

<input type="checkbox" bind:checked={show} />
{#if show}
  <div use:exampleAction={{ color: "red", width }} />
{/if}
<input type="range" min="50" max="500" bind:value={width} />

<style>
  div {
    width: 300px;
    height: 300px;
    border: solid black 1px;
  }
</style>
