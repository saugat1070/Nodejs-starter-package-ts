import z from "zod";
import { Request, Response, NextFunction } from "express";
export declare const validateRequestBody: (schema: z.ZodObject<any>) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const validateRequestQuery: (schema: z.ZodObject<any>) => (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=index.d.ts.map