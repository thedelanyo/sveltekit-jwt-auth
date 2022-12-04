import { validateEmail, validatePassword } from "$lib/helpers/validate";
import { invalid } from "@sveltejs/kit";
import type { Action, Actions } from "./$types";
import { toaster } from "$lib/helpers/toasters";

type LoginType = {
  email: string;
  password: string;
};

const signin: Action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData()) as LoginType;

  const { password, email } = data;

  const { type: passwordType, message: passwordMessage } =
    validatePassword(password);

  if (passwordType === "error") {
    toaster({ type: "error", message: passwordMessage });
    return invalid(400, { message: passwordMessage });
  }

  if (!validateEmail(email)) {
    toaster({ type: "error", message: "Must be a valid email address" });
    return invalid(400);
  }

  return { message: "Successfully login" };
};

export const actions: Actions = { default: signin };
