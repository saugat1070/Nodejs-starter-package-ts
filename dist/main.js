"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const index_router_1 = __importDefault(require("./Routers/v1/index.router"));
const index_router_2 = __importDefault(require("./Routers/v2/index.router"));
const correlation_middleware_1 = require("./middleware/correlation.middleware");
const error_middleware_1 = require("./middleware/error.middleware");
// instance of express application
exports.app = (0, express_1.default)();
// Middleware to parse JSON requests
exports.app.use(express_1.default.json());
// Middleware to attach correlation ID to each request
exports.app.use(correlation_middleware_1.attachCorrelationId);
// Registering API version routers
exports.app.use("/api/v1", index_router_1.default);
exports.app.use("/api/v2", index_router_2.default);
// middleware for handling errors
exports.app.use(error_middleware_1.appErrorHandler);
exports.app.use(error_middleware_1.genericErrorHandler);
exports.app.use(correlation_middleware_1.attachCorrelationId);
//# sourceMappingURL=main.js.map