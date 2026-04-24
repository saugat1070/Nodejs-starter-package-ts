import { z } from "zod";
export declare const pingRequestSchema: z.ZodObject<{
    message: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type pingDto = z.infer<typeof pingRequestSchema>;
export default pingDto;
//# sourceMappingURL=ping.validator.d.ts.map