import { z } from "zod";

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
  department: z.number(),
  supervisor: z.number(),
  rangeInr: z.number(),
  dosePattern: z.number(),
  role: z.string(),
  dataConsent: z.boolean(),
  access_token: z.string(),
  refresh_token: z.string(),
});
