import type { MessageType } from "$lib/types/utils";
import { reserves } from "./reserves";

export const validateEmail = (email: string) => {
  const regExp = new RegExp("[^@]+@[^.]+..+", "i");

  return regExp.test(email);
};

export const validatePassword = (password: string): MessageType => {
  if (password.length < 8) {
    return {
      type: "error",
      text: "Password must be at least 8 characters long",
    };
  }

  if (password.length > 30) {
    return { type: "error", text: "Password must be 30 characters long" };
  }

  if (password.search(/[a-z]/) < 0) {
    return {
      type: "error",
      text: "Password must include at least a lowercase letter.",
    };
  }

  if (password.search(/[A-Z]/) < 0) {
    return {
      type: "error",
      text: "Password must include at least an uppercase letter.",
    };
  }

  if (password.search(/[0-9]/i) < 0) {
    return {
      type: "error",
      text: "Password must include at least a number.",
    };
  }

  return { type: "auto", text: "" };
};

export const validateBirthdate = (value: number): MessageType => {
  const ageLimit = 12;

  if (`${value}`.length !== 4) {
    return { type: "error", text: "Invalid year." };
  }

  let difference = new Date().getFullYear() - value;

  if (difference < ageLimit) {
    return { type: "error", text: "The year is below the required age." };
  }

  return { type: "auto", text: "" };
};

export const validateUsername = (username: string): MessageType => {
  let regex = /^[a-zA-Z0-9_-]{4,16}$/;

  const test = regex.test(username);

  if (!test) {
    return { type: "error", text: "Invalid characters in username." };
  }

  if (reserves.includes(username)) {
    return { type: "error", text: "Not available." };
  }

  return { text: "", type: "auto" };
};

export const validateName = (name: string): MessageType => {
  let regex = /^[a-zA-Z -]+$/;

  if (!regex.test(name)) {
    return { text: "Invalid characters in name field", type: "error" };
  }

  return { text: "Okay", type: "auto" };
};
