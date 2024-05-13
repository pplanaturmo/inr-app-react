import { z } from "zod";
export const roleSchema = z.object({
  id: z.string(),
  name: z.string(),
  //TODO rellenar rol con los campos adecuados
});
