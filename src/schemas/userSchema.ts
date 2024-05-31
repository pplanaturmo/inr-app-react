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
  accessToken: z.string(),
  refreshToken: z.string(),
});
