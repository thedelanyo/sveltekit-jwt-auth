<script lang="ts">
  import { enhance } from "$app/forms";
  import { theme } from "$stores/theme";
  import Svg from "$comps/Icons/svg.svelte";
  import { moonIcon, sunIcon } from "$comps/Icons/icons";
  import { deriveNextTheme } from "$lib/helpers/deriveNextTheme";

  $: nextTheme = deriveNextTheme($theme);
  const label = `change to from ${$theme}  to ${nextTheme}`;
</script>

<form
  method="POST"
  action="/api/theme"
  class="inline"
  use:enhance={() => {
    $theme = nextTheme;
  }}
>
  <input type="hidden" name="theme" value={nextTheme} />

  <button {label} aria-live="polite" class="button-shadow">
    <span>{nextTheme} theme</span>
    <span>
      <Svg d={$theme === "light" ? moonIcon : sunIcon} dimension="25" />
    </span>
  </button>
</form>

<style>
  button {
    padding: 0;
    border-radius: 0;
    box-shadow: none;
    text-transform: capitalize;
    box-shadow: var(--shadow-inset);
    display: flex;
    align-items: center;
    gap: var(--metric-micro);
    border-radius: var(--radius-sm);
    padding: var(--metric-micro);
    font-size: var(--font-small);
  }
</style>
