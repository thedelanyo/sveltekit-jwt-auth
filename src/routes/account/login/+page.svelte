<script lang="ts">
  import Article from "$lib/Modals/article.svelte";
  import Meta from "$lib/Modals/meta.svelte";
  import Signin from "$lib/Onboard/signin.svelte";
  import type { ActionData } from "./$types";

  export let form: ActionData;
</script>

<Meta title="Sign in" desc="Sign in to your account" />

<Article>
  <section>
    <div>
      <h2>Sign in to your account</h2>

      <p>
        <a href="/account/signup">Sign up here </a>
        if your're new to khekheli.
      </p>
    </div>

    <Signin message={form?.message || ""} />
  </section>
</Article>

<style>
  section {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    margin-top: var(--metric-small);
  }
</style>
