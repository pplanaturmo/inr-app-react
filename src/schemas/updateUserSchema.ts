import { z } from "zod";

export const updateUserSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
  rangeInr: z.number(),
  dosePattern: z.number(),
});
