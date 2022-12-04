<script lang="ts">
  import { slide } from "svelte/transition";
  import Nothing from "./nothing.svelte";

  export let message = "Nothing to display";
  export let items: any[] = [];

  let ids: string[] = ["#0"];

  let handleCheck = (id: string) => {
    if (ids.includes(id)) {
      ids = ids.filter((item) => item !== id);

      return;
    }

    ids = [...ids, id];
  };
</script>

<article>
  {#each items as { title, content }, index}
    {@const checked = index === 0}
    {@const id = `#${index}`}
    <section>
      <input type="checkbox" name="accordion" {id} class="v-hidden" {checked} />
      <label for={id} on:click={() => handleCheck(id)}>{title}</label>

      {#if ids.includes(id)}
        <div class="content" transition:slide|local>
          <p>{@html content}</p>
        </div>
      {/if}
    </section>
  {:else}
    <Nothing>{message}</Nothing>
  {/each}
</article>

<style>
  article {
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    gap: var(--metric-medium);
    align-items: start;
  }

  section {
    width: 18rem;
    box-shadow: var(--shadow-inset);
    border-radius: var(--radius-sm);
  }

  label,
  .content {
    padding: var(--metric-micro) var(--metric-small);
  }

  label {
    display: block;
    color: var(--lite);
    position: relative;

    transition: background 0.5s ease-in;
    border-radius: var(--radius-sm) var(--radius-sm) 0 0;
  }

  label:hover,
  label:active {
    background: rgba(0, 0, 0, 0.1);
  }

  label::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: var(--metric-small);
    width: 14px;
    height: 7px;
    background-image: url('data:image/svg+xml;utf8,<svg width="100" height="50" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 100,0 50,50" style="fill:%23FFFFFF99;" /></svg>');
    background-size: contain;
    transition: transform 0.4s;
  }

  .content {
    background: var(--lite);
    color: var(--text-color);
    font-size: 0.85em;
    border-radius: 0 0 var(--radius-sm) var(--radius-sm);
  }

  input:checked ~ label {
    background-color: #035141;
  }

  input:checked ~ label::after {
    transform: translateY(-50%) rotate(0.5turn);
  }

  @media (min-width: 50em) {
    label {
      cursor: pointer;
    }
  }
</style>
