import { z } from "zod";

const patternValueSchema = z.array(z.number());

export const dosePatternSchema = z.object({
  id: z.number(),
  patternValue: patternValueSchema,
  level: z.number(),
  drug: z.string(),
});
