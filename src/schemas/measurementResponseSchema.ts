import { z } from "zod";

export const measurementResponseSchema = z.object({
  date: z.date(),
  value: z.number(),
});
