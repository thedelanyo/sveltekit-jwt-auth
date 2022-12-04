<script lang="ts">
  import Message from "$lib/Modals/message.svelte";
  import type { MessageType } from "$lib/types/utils";
  import Reveal from "./reveal.svelte";

  export let title = "Enter password.";
  export let toast: MessageType = {
    type: "info",
    message: `Password must include a number, a lowercase and uppercase letter and be at least 8 characters long.`,
  };

  let inputElement: HTMLInputElement;

  let load = (node: HTMLInputElement) => {
    inputElement = node;
  };
</script>

<div>
  <div class="flow-wide">
    <label for="password">{title}</label>
  </div>

  <div class="inline-control">
    <input
      type="password"
      name="password"
      id="password"
      autocapitalize="none"
      autocorrect="off"
      required
      use:load
    />

    <Reveal {inputElement} />
  </div>

  <Message inline {toast} />
</div>

<style>
  .flow-wide {
    align-items: flex-end;
  }
</style>
