import { Response } from "express";
import { IPagination } from "../../@types/interface/pagination.interface";
export declare function JsonResponse(res: Response, statusCode: number, success: boolean, message: string, data?: any, pagination?: IPagination): Response<any, Record<string, any>>;
//# sourceMappingURL=response.helper.d.ts.map