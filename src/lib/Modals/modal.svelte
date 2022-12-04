<script lang="ts">
  import { closeIcon } from "$comps/Icons/icons";
  import Svg from "$comps/Icons/svg.svelte";
  import { createEventDispatcher } from "svelte";

  export let width = "17rem";
  export let title = "";

  let dialog: HTMLDialogElement;
  let close = false;

  const dispatch = createEventDispatcher();

  let load = (node: HTMLDialogElement) => {
    dialog = node;
    node.autofocus = false;
    dispatch("modal", node);
  };

  const handleClose = () => {
    close = true;

    dialog.addEventListener(
      "animationend",
      function () {
        close = false;
        dialog.close();
      },
      { once: true }
    );
  };

  const handleBackdrop = () => {
    const { tagName } = dialog;

    if (tagName === "DIALOG") {
      handleClose();
    }
  };
</script>

<dialog use:load class:close on:click|self={handleBackdrop}>
  <div class="dialog" style:width>
    <div>
      <span class="title">{title}</span>

      <span on:click={handleClose} class="icon">
        <Svg d={closeIcon} dimension="20" title="click to close the modal" />
      </span>
    </div>

    <section>
      <slot />
    </section>
  </div>
</dialog>

<style>
  .dialog {
    background-color: inherit;
  }

  dialog[open] {
    border: none;
    background-color: var(--dark-bg-color);
    color: inherit;
    animation: show 0.5s ease normal;
    padding: 0;
    box-shadow: var(--shadow-inset);
    border-radius: var(--radius-lg);
  }

  dialog.close {
    animation: hide 0.5s ease normal;
  }

  dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.6);
    animation: none;
  }

  dialog[open]::backdrop {
    animation: showBackdrop 0.5s ease 0.2s normal;
  }

  dialog.close::backdrop {
    animation: hideBackdrop 0.5s ease 0.2s normal;
  }

  .dialog > div {
    display: flex;
    gap: var(--metric-smallest);
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: inherit;
    padding: var(--metric-smallest);
  }

  section {
    padding: var(--metric-smallest);
  }

  :global(body:has(.light)) dialog {
    background-color: var(--lite);
  }

  .icon {
    padding: var(--metric-nano);
    box-shadow: var(--shadow-inset);
    border-radius: var(--radius-sm);
  }

  .title {
    font-weight: bold;
    color: #fff;
  }

  :global(body:has(.light)) .title {
    color: var(--dark-bg-color);
  }

  @keyframes show {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  @keyframes hide {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(0);
    }
  }

  @keyframes showBackdrop {
    from {
      transform: 0;
    }
    to {
      transform: 1;
    }
  }

  @keyframes hideBackdrop {
    to {
      opacity: 0;
    }
  }
</style>
