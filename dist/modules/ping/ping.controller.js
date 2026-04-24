"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const response_helper_1 = require("../../utils/helper/response.helper");
class PingController {
    pingService;
    constructor(pingService) {
        this.pingService = pingService;
    }
    async ping(req, res) {
        const result = await this.pingService.ping();
        return (0, response_helper_1.JsonResponse)(res, 200, true, "Ping successful", { result });
    }
}
exports.default = PingController;
//# sourceMappingURL=ping.controller.js.map