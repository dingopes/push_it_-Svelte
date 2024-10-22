<script>
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let dragOffsetX = 0;
  let dragOffsetY = 0;
  let lastDragOffsetX = 0;
  let lastDragOffsetY = 0;

  function handleMouseDown(event) {
    isDragging = true;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    lastDragOffsetX = dragOffsetX;
    lastDragOffsetY = dragOffsetY;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(event) {
    if (isDragging) {
      dragOffsetX = lastDragOffsetX + event.clientX - dragStartX;
      dragOffsetY = lastDragOffsetY + event.clientY - dragStartY;
      requestAnimationFrame(() => {
        const box = document.getElementById("box");
        box.style.transform = `translate(${dragOffsetX}px, ${dragOffsetY}px)`;
      });
    }
  }

  function handleMouseUp() {
    isDragging = false;

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }
</script>

svelte
<div
  id="box"
  style="display: flex; width: 200px; min-height: 200px; background-color: red; justify-content: center; align-items: center; color: white; position: relative; transform: translate({dragOffsetX}px, {dragOffsetY}px);"
  on:mousedown={handleMouseDown}
>
  <slot name="kostka" />
</div>
