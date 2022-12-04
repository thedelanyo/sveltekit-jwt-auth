<script>
  import { theme } from "$stores/theme";

  export let site = false;
</script>

<main class:site class={$theme}>
  <slot />
</main>

<style>
  main {
    flex: 1 0 auto;
  }

  main.site {
    margin: 0 auto;
    width: 85%;
  }
</style>
