import { z } from "zod";

export const dosageSchema = z.object({
  id: z.number(),
  date: z.date(),
  value: z.number(),
  taken: z.boolean(),
});
