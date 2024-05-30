import { z } from "zod";

export const alertSchema = z.object({
  id: z.number().int().nonnegative(),
  userId: z.number().int().nonnegative(),
  userName: z.string(),
  userSurname: z.string(),
  userEmail: z.string(),
  date: z.date(),
  level: z.enum(["DANGEROUS", "TOO_LOW", "TOO_HIGH"]),
});
