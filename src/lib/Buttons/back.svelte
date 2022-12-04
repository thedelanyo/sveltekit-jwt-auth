<script>
  import { arrowBackIcon } from "$comps/Icons/icons";

  import Svg from "$comps/Icons/svg.svelte";
</script>

<button class="button-shadow" on:click>
  <Svg d={arrowBackIcon} dimension="25" title="go to previous page" />
</button>

<style>
  button {
    padding: var(--metric-micro);
  }
</style>
