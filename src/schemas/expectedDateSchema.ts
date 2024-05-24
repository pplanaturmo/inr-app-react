import { z } from "zod";

export const expectedDateSchema = z.object({
  id: z.number(),
  expectedDate: z.string(),
  fullfilled_date: z.string(),
  fulfilled: z.boolean(),
  contactDoctorASAP: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
