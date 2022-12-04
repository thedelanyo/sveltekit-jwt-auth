<script>
  import Close from "$comps/Buttons/close.svelte";
  import { scale } from "svelte/transition";

  export let show = true;
  export let width = "19rem";
</script>

<article class="overlay" on:click|self>
  <section transition:scale class="info-modal" style:width>
    <slot />

    {#if show}
      <div class="flow-wide">
        <Close on:click />
      </div>
    {/if}
  </section>
</article>

<style>
  .flow-wide {
    margin-left: auto;
  }
</style>
