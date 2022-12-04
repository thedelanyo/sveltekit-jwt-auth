<script>
  import { page } from "$app/stores";
  import { fly } from "svelte/transition";
</script>

{#key $page.url.pathname}
  <article in:fly={{ x: -250, duration: 700 }}>
    <slot />
  </article>
{/key}

<style>
  article {
    display: flex;
    flex-direction: column;
    gap: var(--metric-medium);
    align-items: center;
    padding: 0;
  }
</style>
