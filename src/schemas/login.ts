import { z } from "zod";

export const LoginRequestSchema = z.object({
  email: z.string(),
  passworkd: z.string(),
});
