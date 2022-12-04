<script lang="ts">
  import type { MessageType } from "$lib/types/utils";
  import { slide } from "svelte/transition";

  export let toast: MessageType = { type: "auto", message: "" };
  export let inline = false;

  $: isMessage = toast.type !== "auto";
</script>

{#if !inline && isMessage}
  <section class="notification">
    <div class={toast.type} transition:slide>
      <p>{@html toast.message}</p>
    </div>
  </section>
{/if}

{#if inline && isMessage}
  <div class={toast.type} class:inline>
    <p>{@html toast.message}</p>
  </div>
{/if}
