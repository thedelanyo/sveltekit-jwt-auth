<script>
  export let tag = "div";
</script>

<svelte:element this={tag} class="nothing">
  <slot />
</svelte:element>

<style>
  .nothing {
    padding: var(--metric-medium);
    border-radius: var(--radius-lg);
    box-shadow: var(--shadow-inset);
    margin: 0 var(--metric-small);
    margin-top: 40%;
  }
</style>
