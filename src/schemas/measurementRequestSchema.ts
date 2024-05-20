import { z } from "zod";

export const measurementRequestSchema = z.object({
  measurementInteger: z.number(),
  measurementDecimal: z.number(),
});
