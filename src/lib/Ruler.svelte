<script lang="ts">
  let lines: number[] = [];
  let hoverY: number | null = null;

  function handleClick(event: MouseEvent) {
    const y = Math.round((event.clientY + window.scrollY) / 4) * 4;
    const index = lines.indexOf(y);
    if (index !== -1) {
      lines = lines.filter((_, i) => i !== index);
    } else {
      lines = [...lines, y];
    }
  }

  function handleMouseMove(event: MouseEvent) {
    hoverY = Math.round((event.clientY + window.scrollY) / 4) * 4;
  }

  function handleMouseLeave() {
    hoverY = null;
  }

  $: isHoveringExistingLine = hoverY && lines.includes(hoverY);
</script>

<svelte:window 
  on:click={handleClick} 
  on:mousemove={handleMouseMove}
  on:mouseleave={handleMouseLeave}
/>

<div class="absolute inset-0 pointer-events-none z-[9999]">
  {#each lines as y}
    <div 
      class="absolute left-0 w-full h-px bg-blue-500 transition-colors duration-100 ease-in-out"
      class:hovered={y === hoverY}
      style="top: {y}px"
    />
  {/each}
  {#if hoverY !== null && !isHoveringExistingLine}
    <div class="absolute left-0 w-full h-px bg-blue-500/30" style="top: {hoverY}px"></div>
  {/if}
</div>

<style lang="postcss">
  .hovered {
    @apply bg-black dark:bg-white;
  }
</style>