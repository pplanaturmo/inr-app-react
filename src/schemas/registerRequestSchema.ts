import { z } from "zod";

export const registerRequestSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
  password: z.string(),
  rangeInr: z.number(),
  dosePattern: z.number(),
  dataConsent: z.boolean(),
});
