import { Request, Response } from "express";
import { PingService } from "./ping.service";
declare class PingController {
    private pingService;
    constructor(pingService: PingService);
    ping(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
}
export default PingController;
//# sourceMappingURL=ping.controller.d.ts.map