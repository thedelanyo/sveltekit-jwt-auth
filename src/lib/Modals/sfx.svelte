<script lang="ts">
  import { enhance } from "$app/forms";
  import Svg from "$comps/Icons/svg.svelte";
  import { soundOff, soundOn } from "$comps/Icons/icons";
  import { sfxOn } from "$stores/sfx";

  $: nextSfx = !$sfxOn;
  const label = `change to form ${$sfxOn}  to ${nextSfx}`;
</script>

<form
  method="POST"
  action="/api/sfx"
  class="inline"
  use:enhance={() => {
    $sfxOn = nextSfx;
  }}
>
  <input type="hidden" name="sfxOn" value={nextSfx} />

  <button {label} aria-live="polite" class="button-shadow">
    <span>Sound {$sfxOn ? "on" : "off"}</span>
    <span>
      <Svg d={$sfxOn ? soundOn : soundOff} dimension="25" />
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
