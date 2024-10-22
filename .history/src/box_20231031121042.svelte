<script>
  let isDragging = false; // Proměnná pro sledování, zda se přetahuje
  let dragStartX = 0; // Počáteční pozice X při přetahování
  let dragStartY = 0; // Počáteční pozice Y při přetahování
  let dragOffsetX = 0; // Posunutí X při přetahování
  let dragOffsetY = 0; // Posunutí Y při přetahování
  let lastDragOffsetX = 0; // Poslední hodnota posunutí X před uvolněním tlačítka myši
  let lastDragOffsetY = 0; // Poslední hodnota posunutí Y před uvolněním tlačítka myši

  function handleMouseDown(event) {
    isDragging = true;
    dragStartX = event.clientX; // Uložení počáteční pozice X při stisknutí tlačítka myši
    dragStartY = event.clientY; // Uložení počáteční pozice Y při stisknutí tlačítka myši
    lastDragOffsetX = dragOffsetX; // Uložení poslední hodnoty posunutí X před uvolněním tlačítka myši
    lastDragOffsetY = dragOffsetY; // Uložení poslední hodnoty posunutí Y před uvolněním tlačítka myši

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(event) {
    if (isDragging) {
      dragOffsetX = lastDragOffsetX + event.clientX - dragStartX; // Výpočet nového posunutí X při pohybu myší
      dragOffsetY = lastDragOffsetY + event.clientY - dragStartY; // Výpočet nového posunutí Y při pohybu myší
      requestAnimationFrame(() => {
        const box = document.getElementById("box");
        box.style.transform = `translate(${dragOffsetX}px, ${dragOffsetY}px)`; // Nastavení transformace pro posunutí kostky
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
