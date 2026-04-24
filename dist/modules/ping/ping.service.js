"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PingService = void 0;
class PingService {
    pingRepository;
    constructor(pingRepository) {
        this.pingRepository = pingRepository;
    }
    async ping() {
        return await this.pingRepository.ping();
    }
}
exports.PingService = PingService;
//# sourceMappingURL=ping.service.js.map