<script lang="ts">
  let show = false;
  export let inputElement: HTMLInputElement;

  let toggle = () => {
    inputElement.focus();
    show = !show;
    inputElement.type = show ? "text" : "password";
  };
</script>

{#if !show}
  <span on:click={toggle}>Show</span>
{/if}

{#if show}
  <span on:click={toggle}>Hide</span>
{/if}
