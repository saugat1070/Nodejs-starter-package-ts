"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const winston_1 = __importDefault(require("winston"));
const request_helper_1 = require("../utils/helper/request.helper");
exports.logger = winston_1.default.createLogger({
    format: winston_1.default.format.combine(winston_1.default.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), winston_1.default.format.json(), // Format the log message as json
    winston_1.default.format.printf(({ timestamp, level, message, ...data }) => {
        const output = {
            level,
            message,
            timestamp,
            correlationId: (0, request_helper_1.getCorrelationId)(), // Include correlation ID in the log message
            ...data
        };
        return JSON.stringify(output); // Return the log message as a JSON string
    })),
    transports: [
        new winston_1.default.transports.Console()
    ]
});
//# sourceMappingURL=logger.config.js.map