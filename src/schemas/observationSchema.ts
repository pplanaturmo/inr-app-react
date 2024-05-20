import { z } from "zod";

export const registerObservationSchema = z.object({
  date: z.date(),
  cause: z.string(),
  description: z.string(),
});

// private LocalDate date;

// private CauseEnum cause;

// private String description;

// public enum CauseEnum {
//   NO_DOSE,
//   DOUBLE_DOSE,
//   BLEEDING,
//   DIET,
//   DRUG,
//   OTHER,
// }
