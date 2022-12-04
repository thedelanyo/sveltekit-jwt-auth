<script lang="ts">
  import { toggler } from "$stores/toggler";
  import { createEventDispatcher } from "svelte";

  export let items: string[] = [];
  export let width = "12rem";

  toggler.set(items[0]);

  let value = items[0];

  let dispatch = createEventDispatcher();
</script>

<div style:width>
  <select
    name="items"
    id="items"
    bind:value
    on:change={() => dispatch("selected", value)}
  >
    {#each items as item}
      <option value={item} selected={item === $toggler}>{item}</option>
    {/each}
  </select>
</div>

<style>
  div {
    box-shadow: var(--shadow-inset);
    border-radius: 5rem;
    display: grid;
    align-items: center;
    grid-template-areas: "select";
  }

  select {
    box-shadow: none;
    grid-area: select;
    height: 100%;
    text-align: left;
    padding: var(--metric-smallest) var(--metric-small);
    grid-area: select;
  }

  select::-ms-expand {
    display: none;
  }

  select option {
    background-color: var(--dark-bg-color);
    color: inherit;
  }

  div::after {
    content: "";
    width: 14px;
    height: 7px;
    grid-area: select;
    justify-self: end;
    margin-right: var(--metric-medium);
    background-image: url('data:image/svg+xml;utf8,<svg width="100" height="50" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 100,0 50,50" style="fill:%23FFFFFF99;" /></svg>');
    background-size: contain;
  }
</style>
