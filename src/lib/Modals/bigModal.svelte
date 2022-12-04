<script lang="ts">
  import Close from "$lib/Buttons/close.svelte";
  import { fly } from "svelte/transition";

  export let title = "";
  export let top = false;

  const y = top ? -250 : 250;
</script>

<article class="overlay" on:click|self on:keypress|self>
  <div class="wrapper" class:top transition:fly={{ y }}>
    {#if title}
      <div class="header">
        <h2>{title}</h2>

        <Close on:click />
      </div>
    {/if}

    <slot />
  </div>
</article>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--metric-small);
    color: inherit;
    padding: var(--metric-small);
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 500;
    font-size: var(--font-smallest);
    overflow-y: scroll;
    background-color: var(--dark-shade);
  }

  :global(body:has(.light)) .wrapper {
    background-color: var(--lite);
  }

  .wrapper.top {
    top: 0;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .header > * {
    font-size: var(--font-base);
  }

  @media (min-width: 50em) {
    .wrapper {
      left: 65%;
    }
  }
</style>
