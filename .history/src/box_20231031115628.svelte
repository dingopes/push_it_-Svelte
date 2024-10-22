<script>
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let dragOffsetX = 0;
  let dragOffsetY = 0;

  function handleMouseDown(event) {
    isDragging = true;
    dragStartX = event.clientX;
    dragStartY = event.clientY;
    dragOffsetX = 0;
    dragOffsetY = 0;

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(event) {
    if (isDragging) {
      dragOffsetX = event.clientX - dragStartX;
      dragOffsetY = event.clientY - dragStartY;
    }
  }

  function handleMouseUp() {
    isDragging = false;

    window.removeEventListener("mousemove", handleMouseMove);
    window.removeEventListener("mouseup", handleMouseUp);
  }
</script>

<div
  style="display: flex; width: 200px; min-height: 200px; background-color: red; justify-content: center; align-items: center; color: white; transform: translate({dragOffsetX}px, {dragOffsetY}px);"
  on:mousedown={handleMouseDown}
>
  <slot name="kostka" />
</div>
