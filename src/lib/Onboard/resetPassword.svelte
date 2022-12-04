<script lang="ts">
  import Button from "$comps/Buttons/button.svelte";
  import BigModal from "$comps/Modals/bigModal.svelte";
  import Loading from "$comps/Modals/loading.svelte";
  import Message from "$comps/Modals/message.svelte";
  import { auth } from "$lib/fb/init";
  import { setMessage } from "$lib/helpers/setMessage";
  import { validatePassword } from "$lib/helpers/validate";
  import { message } from "$stores/message";
  import { confirmPasswordReset } from "firebase/auth";
  import Password from "./password.svelte";

  type FormState = "ERROR" | "SUCCESS" | "AUTO";

  export let oobCode = "";
  export let continueUrl = "";

  let title = "Reset password";

  let state: FormState = "AUTO";

  let formElement: HTMLFormElement;
  let loading = false;

  const handleSubmit = () => {
    let password = formElement.password.value.trim() as string;

    if (!password) {
      setMessage({ type: "error", text: "Enter your password" });
      return;
    }

    if (validatePassword(password).type === "error") {
      setMessage({ type: "error", text: validatePassword(password).text });

      return;
    }

    loading = true;

    confirmPasswordReset(auth, oobCode, password)
      .then(() => {
        state = "SUCCESS";
        loading = false;
      })
      .catch(() => {
        state = "ERROR";
        loading = false;
      });
  };
</script>

<BigModal top {title}>
  {#if state === "AUTO"}
    <form on:submit|preventDefault={handleSubmit} bind:this={formElement}>
      <div>
        <Password title="Enter new password" />
      </div>

      <button class="button-shadow">reset password</button>
    </form>
  {/if}

  {#if state === "SUCCESS"}
    <div class="success">
      <p>You have successfully reset your password.</p>
    </div>

    <Button href={continueUrl} type="button-sec" title="continue" />
  {/if}

  {#if state === "ERROR"}
    <div class="info">
      <p>Error occurred during confirmation. The code might have expired.</p>
    </div>

    <Button href="/" type="button-sec" title="Sign in" />
  {/if}
</BigModal>

<Message message={$message} />

<Loading {loading} />

<style>
  form {
    width: initial;
    margin-top: var(--metric-small);
  }

  .success,
  .info {
    font-size: var(--font-base);
    padding-inline: var(--metric-small);
  }
</style>
