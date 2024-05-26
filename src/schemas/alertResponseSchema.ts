import { z } from 'zod';

export const alertResponseSchema = z.object({
    id: z.number().int().nonnegative(),
    userId: z.number().int().nonnegative(),
    userName: z.string().email(),
    userSurname: z.string(),
    userEmail: z.string().email(),
    date: z.string().refine((val) => !isNaN(Date.parse(val)), {
        message: "Invalid date format",
    }),
    level: z.enum(['DANGEROUS', 'WARNING', 'INFO']),
});
