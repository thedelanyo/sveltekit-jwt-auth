<script lang="ts">
  import { goto } from "$app/navigation";
  import { fetcher } from "$lib/helpers/fetcher";
  import type { HelpType } from "$lib/types/helps";
  import { helps } from "$stores/helps";
  import BigModal from "./bigModal.svelte";

  const help: HelpType = "COOKIE";

  $: helped = $helps.includes("COOKIE");

  const handleCookie = async () => {
    await fetcher("/api/help", "POST", { help });
    helped = true;
  };
</script>

{#if !helped}
  <BigModal on:click={handleCookie}>
    <section>
      <div>
        We use cookies to offer you a better browsing experience, analyze site
        traffic, personalize content and serve targeted ads. Learn more in our

        <a
          href="/site/privacy"
          on:click={async (e) => {
            await fetcher("/api/help", "POST", { help });
            helped = true;
            await goto("/site/privacy");
          }}
        >
          privacy settings.
        </a>

        By using our site. you consent to our use of cookies.
      </div>

      <div class="flow-wide">
        <button class="button-shadow" on:click={handleCookie}>
          use necessary cookies only
        </button>
        <button class="button-quad" on:click={handleCookie}>It's fine</button>
      </div>
    </section>
  </BigModal>
{/if}

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 4rem;
    padding: var(--metric-micro);
    font-size: var(--font-medium);
  }

  .flow-wide {
    margin-left: auto;
    gap: 3rem;
  }

  button {
    padding: var(--metric-micro) var(--metric-small);
    font-size: var(--font-smallest);
  }
</style>
