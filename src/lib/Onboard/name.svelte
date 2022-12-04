<script lang="ts">
  import Message from "$lib/Modals/message.svelte";
  import type { MessageType } from "$lib/types/utils";

  let toast: MessageType = { message: "", type: "auto" };
</script>

<div>
  <label for="fullname">Enter first name & second name.</label>

  <input
    type="text"
    name="fullname"
    id="fullname"
    autocapitalize="none"
    autocorrect="off"
    required
  />

  <Message {toast} inline />
</div>
