import { z } from "zod";
import { roleSchema } from "./roleSchema";
export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  surname: z.string(),
  email: z.string().email(),
  department: z.number(),
  supervisor: z.number(),
  rangeInr: z.number(),
  roles: z.array(roleSchema),
});
