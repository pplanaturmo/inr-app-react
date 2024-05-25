import { z } from "zod";

export const observationSchema = z.object({
  id: z.number(),
  date: z.date(),
  cause: z.string(),
  description: z.string(),
});
