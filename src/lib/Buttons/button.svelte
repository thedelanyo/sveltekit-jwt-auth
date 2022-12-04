<script lang="ts">
  export let title = "";
  export let type = "primary";
  export let disabled = false;
  export let id = "";
  export let href = "";
</script>

{#if !href}
  <button on:click class={type} {disabled} aria-disabled={disabled} {id}>
    {title}
  </button>
{/if}

{#if href}
  <a {href} class={type}>{title} </a>
{/if}

<style>
  button {
    transition: all 0.2s;
  }

  a {
    width: max-content;
  }

  button:active,
  a:active {
    transform: scale(0.95);
  }
</style>
