<script lang="ts">
  import Message from "$lib/Modals/message.svelte";
  import type { MessageType } from "$lib/types/utils";

  export let toast: MessageType = { type: "auto", message: "" };
</script>

<div>
  <label for="email">Enter email address.</label>
  <input
    type="email"
    name="email"
    id="email"
    autocapitalize="none"
    autocorrect="off"
    required
    pattern="[^@]+@[^\.]+\..+"
  />

  <Message inline {toast} />
</div>
