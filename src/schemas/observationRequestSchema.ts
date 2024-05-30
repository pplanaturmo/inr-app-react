import { z } from "zod";

export const observationRequestSchema = z.object({
  date: z.date(),
  cause: z.string(),
  description: z.string(),
});
