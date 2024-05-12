import { z } from "zod";

export const RegisterRequestSchema = z.object({
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
  password: z.string(),
  idCard: z.string(),
  healthCard: z.string(),
  phone: z.number(),
  dataConsent: z.string(),
});
