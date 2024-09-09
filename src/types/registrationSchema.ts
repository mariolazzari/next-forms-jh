import { z } from "zod";

import { validateZipcode } from "../app/validateZipcode";

export const registrationSchema = z.object({
  first: z.string().trim().min(1, {
    message: "First name is required.",
  }),
  last: z.string().trim().min(1, {
    message: "Last name is required.",
  }),
  email: z.string().trim().email({
    message: "Invalid email address.",
  }),
  zipcode: z.string().trim().refine(validateZipcode, {
    message: "Invalid zipcode.",
  }),
});

export type Registration = z.infer<typeof registrationSchema>;
