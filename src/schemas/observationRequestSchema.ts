import { z } from "zod";

export const observationRequestSchema = z.object({
  id: z.number(),
  date: z.date(),
  cause: z.string(),
  description: z.string(),
});
