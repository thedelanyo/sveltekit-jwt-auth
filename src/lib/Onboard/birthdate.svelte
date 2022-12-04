<script lang="ts">
  import Messages from "$comps/Modals/message.svelte";
  import type { MessageType } from "$lib/types/utils";

  let message: MessageType = {
    type: "info",
    text: "We'll not disclose your birth year.",
  };

  let placeholder = `${new Date().getFullYear()}`;

  let birthdate = "";

  let validate = () => {
    birthdate = message.type === "error" ? "" : birthdate;
  };
</script>

<div>
  <label for="birthdate">Enter birth Year.</label>
  <input
    type="number"
    name="birthdate"
    id="birthdate"
    autocapitalize="none"
    autocorrect="off"
    required
    {placeholder}
    on:change={validate}
    bind:value={birthdate}
  />

  <Messages {message} inline />
</div>
