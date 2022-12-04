<script>
  import BigModal from "$lib/Modals/bigModal.svelte";

  export let email = "";
</script>

<BigModal top>
  <div class="success">
    <div>
      <p>
        A link was sent to {email}. Kindly click the secure link to continue.
      </p>

      <p>
        You may as well check your spam folder. If the link has expired, try
        again.
      </p>
    </div>
  </div>
</BigModal>

<style>
  div.success {
    font-size: var(--font-small);
    padding-left: var(--metric-small);
  }

  p + p {
    margin-top: var(--metric-smallest);
  }
</style>
