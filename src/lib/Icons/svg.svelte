<script lang="ts">
  export let filled = true;
  export let color = "currentColor";
  export let d = "";
  export let title = "";
  export let dimension = "28";
  export let heroIcon = false;

  $: fill = filled ? color : "none";
</script>

{#if !heroIcon}
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      {fill}
      aria-hidden="true"
      focusable="false"
      width={dimension}
      height={dimension}
      viewBox="0 0 48 48"
    >
      <path {d} stroke={color} stroke-linecap="round" stroke-linejoin="round" />
    </svg>

    {#if title}
      <span class="v-hidden">{title}</span>
    {/if}
  </span>
{/if}

{#if heroIcon}
  <span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke={color}
      {fill}
      aria-hidden="true"
      focusable="false"
      width={dimension}
      height={dimension}
    >
      <path stroke-linecap="round" stroke-linejoin="round" {d} />
    </svg>

    {#if title}
      <span class="v-hidden">{title}</span>
    {/if}
  </span>
{/if}

<style>
  span {
    display: flex;
    align-items: center;
  }
</style>
