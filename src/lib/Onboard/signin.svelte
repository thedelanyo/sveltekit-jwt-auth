<script lang="ts">
  import Button from "$lib/Buttons/button.svelte";
  import Loading from "$lib/Modals/loading.svelte";
  import Email from "./email.svelte";
  import Password from "./password.svelte";
  import Confirm from "./confirm.svelte";
  import type { SubmitFunction } from "@sveltejs/kit";
  import { enhance } from "$app/forms";
  import { Toaster } from "svelte-french-toast";

  let loading = false;

  type FormState = "login" | "confirm";

  let state: FormState = "login";
  let email = "";

  const handelSubmit: SubmitFunction = ({ data }) => {
    email = Object.fromEntries(data).email as string;

    return async ({ result, update }) => {
      switch (result.type) {
        case "invalid":
          state = "login";
          break;

        case "success":
          state = "confirm";
          break;

        default:
          break;
      }

      await update();
    };
  };
</script>

{#if state === "login"}
  <div>
    <form use:enhance={handelSubmit}>
      <Email />

      <Password toast={{ type: "auto", message: "" }} />

      <Button title="sign in" type="button-sec" />
    </form>
  </div>
{/if}

<Loading {loading} />

<Toaster />

{#if state === "confirm"}
  <Confirm {email} />
{/if}
