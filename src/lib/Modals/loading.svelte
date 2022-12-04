<script>
  export let loading = false;
</script>

{#if loading}
  <section class="overlay">
    <div>
      <span class="loading">working</span>
    </div>
  </section>
{/if}

<style>
  div {
    padding: var(--metric-medium);
    background-color: var(--success-lite);
    border-radius: var(--radius-sm);
    color: var(--success-shade);
  }
</style>
