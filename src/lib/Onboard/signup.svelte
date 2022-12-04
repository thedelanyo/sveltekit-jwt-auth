<script lang="ts">
  import Button from "$comps/Buttons/button.svelte";
  import Message from "$comps/Modals/message.svelte";
  import Loading from "$comps/Modals/loading.svelte";
  import Confirm from "./confirm.svelte";
  import Email from "./email.svelte";
  import Password from "./password.svelte";
  import Bot from "./bot.svelte";
  import Name from "./name.svelte";
  import {
    validateEmail,
    validateName,
    validatePassword,
  } from "$lib/helpers/validate";
  import { setMessage } from "$lib/helpers/setMessage";
  import { message } from "$stores/message";
  import { sendEmailVerifier, signUp } from "$lib/fb/auth";
  import { deleteUser, updateProfile } from "firebase/auth";
  import { setDocument } from "$lib/fb/doc";

  type FormState = "ERROR" | "SUCCESS" | "AUTO";

  let state: FormState = "AUTO";
  let email = "";

  let loading = false;

  let formElement: HTMLFormElement;

  let text = "We will send you a confirmation email message to continue.";

  const submitSignup = async () => {
    email = formElement.email.value.trim() as string;
    const password = formElement.password.value.trim() as string;
    const name = formElement.fullname.value.trim() as string;
    const bot = formElement.datetime.value.trim() as string;

    if (bot) {
      return;
    }

    if (!email || !password || !name) {
      setMessage({ type: "error", text: "All fields are required" });
      return;
    }

    loading = true;

    if (!validateEmail(email)) {
      loading = false;

      setMessage({ type: "error", text: "Invalid email" });

      return;
    }

    if (validatePassword(password).type === "error") {
      loading = false;

      setMessage({ type: "error", text: validatePassword(password).text });

      return;
    }

    if (validateName(name).type === "error") {
      loading = false;

      setMessage({ type: "error", text: validateName(name).text });

      return;
    }

    const { user } = await signUp(email, password);

    if (!user) {
      setMessage({ type: "error", text: "Error signing up" });

      return;
    }

    const data = {
      name,
      username: user.uid,
      phone: "",
      country: "",
      avatar: { src: "" },
      role: "user",
      about: "",
      email,
    };

    const { onSetSuccess } = await setDocument("users", user.uid, data);

    if (!onSetSuccess) {
      await deleteUser(user);
      setMessage({ type: "error", text: "Error creating account. Try agin" });

      return;
    }

    await updateProfile(user, { displayName: name });

    await sendEmailVerifier(user, "/dash/games");

    state = "SUCCESS";
    loading = false;
  };
</script>

{#if state === "AUTO"}
  <div>
    <form on:submit|preventDefault={submitSignup} bind:this={formElement}>
      <Bot />

      <Name />

      <Email message={{ type: "info", text }} />

      <Password />

      <Button title="signup" type="button-sec" />
    </form>
  </div>
{/if}

{#if state === "SUCCESS"}
  <Confirm {email} />
{/if}

<Message message={$message} />

<Loading {loading} />
