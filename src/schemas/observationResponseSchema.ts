import { z } from "zod";

export const observationResponseSchema = z.object({
  id: z.number(),
  date: z.string(),
  cause: z.string(),
  description: z.string(),
  updatedAt: z.string(),
});
