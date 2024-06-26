import { z } from "zod";

export const dosageResponseSchema = z.object({
  id: z.number(),
  date: z.string(),
  value: z.number(),
  taken: z.boolean(),
});
