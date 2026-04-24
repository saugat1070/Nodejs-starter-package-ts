"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pingRequestSchema = void 0;
const zod_1 = require("zod");
exports.pingRequestSchema = zod_1.z.object({
    message: zod_1.z.string().optional()
});
//# sourceMappingURL=ping.validator.js.map