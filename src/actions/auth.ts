import { defineAction, ActionError } from "astro:actions";
import { z } from "astro:schema";
import { signInWithEmailAndPassword } from "firebase/auth";

import { ammaAppAuth } from "../firebase/config";

export const auth = {
  loginAction: defineAction({
    input: z
      .object({
        email: z
          .string({ required_error: "Email is required" })
          .trim()
          .min(6, { message: "You must enter a email" })
          .email(),
        password: z
          .string({ required_error: "Password is required" })
          .trim()
          .min(6, { message: "You must enter a password" }),
      })
      .required(),
    async handler({ email, password }) {
      try {
        const userDetails = await signInWithEmailAndPassword(
          ammaAppAuth,
          email,
          password
        );
        return JSON.stringify(userDetails);
      } catch ({ message, code }: any) {
        throw new ActionError({
          code: "BAD_REQUEST",
          message,
        });
      }
    },
  }),
};
