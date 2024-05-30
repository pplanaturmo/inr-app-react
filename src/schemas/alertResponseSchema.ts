import { z } from "zod";

export const alertResponseSchema = z.object({
  id: z.number().int().nonnegative(),
  userId: z.number().int().nonnegative(),
  userName: z.string(),
  userSurname: z.string(),
  userEmail: z.string(),
  date: z.string(),
  level: z.enum(["DANGEROUS", "TOO_LOW", "TOO_HIGH"]),
});
