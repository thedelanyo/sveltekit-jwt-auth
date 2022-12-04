<script lang="ts">
  import Article from "$lib/Modals/article.svelte";
  import Meta from "$lib/Modals/meta.svelte";
  import Signup from "$lib/Onboard/signup.svelte";
</script>

<Meta title="Sign up" desc="Sign up to continue" />

<Article>
  <section>
    <div>
      <h2>Sign up to continue</h2>

      <p>
        We're delighted to have you here.
        <a href="/auth/signin"> Sign in here </a> if you already have account.
      </p>
    </div>

    <Signup />
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
