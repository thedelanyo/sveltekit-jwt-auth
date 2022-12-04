<script lang="ts">
  import { goto } from "$app/navigation";
  import { logoutIcon } from "$comps/Icons/icons";
  import Svg from "$comps/Icons/svg.svelte";
  import Loading from "$comps/Modals/loading.svelte";
  import Message from "$comps/Modals/message.svelte";
  import { auth } from "$lib/fb/init";
  import { fetcher } from "$lib/helpers/fetcher";
  import type { MessageType } from "$lib/types/utils";
  import { signOut } from "firebase/auth";

  let loading = false;

  let message: MessageType = { type: "auto", text: "" };

  const handleLogout = () => {
    loading = true;
    signOut(auth)
      .then(async () => {
        await fetcher("/api/cookie", "POST", { key: "sessionid" });

        loading = false;
        location.replace("/");
      })
      .catch(() => {
        loading = false;
        message = { type: "error", text: "An error happened. Try again" };
      });
  };
</script>

<button class="button-none" on:click={handleLogout}>
  <span>Logout</span>
  <span class="svg">
    <Svg d={logoutIcon} dimension="30" />
  </span>
</button>

<Loading {loading} />

<Message {message} />

<style>
  .svg {
    font-size: 0;
    margin-left: 0.3rem;
  }

  button {
    color: currentColor;
    display: flex;
    align-items: center;
    gap: var(--metric-small);
    font-size: inherit;
    padding: 0.8rem var(--metric-small);
  }
</style>
