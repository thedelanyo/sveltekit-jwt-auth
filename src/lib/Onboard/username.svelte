<script lang="ts">
  import Message from "$comps/Modals/message.svelte";
  import { validateUsername } from "$lib/helpers/validate";
  import type { MessageType } from "$lib/types/utils";

  let message: MessageType = { type: "auto", text: "" };
  let username = "";

  let validate = () => {
    message = validateUsername(username);
  };
</script>

<div>
  <label for="username">Enter Username.</label>

  <input
    type="text"
    name="username"
    id="username"
    autocapitalize="none"
    autocorrect="off"
    required
    placeholder="username here."
    on:change={validate}
    bind:value={username}
  />

  <Message {message} inline />
</div>
