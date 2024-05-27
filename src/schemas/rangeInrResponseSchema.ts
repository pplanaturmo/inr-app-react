import { z } from "zod";

export const rangeInrSchema = z.object({
  id: z.number(),
  minLevel: z.number(),
  maxLevel: z.number(),
  description: z.string(),
});
