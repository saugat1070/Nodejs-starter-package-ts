"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ping_service_1 = require("./ping.service");
const ping_repository_1 = __importDefault(require("./ping.repository"));
const ping_controller_1 = __importDefault(require("./ping.controller"));
const pingRouter = (0, express_1.Router)();
// module wiring
const pingRepository = new ping_repository_1.default();
const pingService = new ping_service_1.PingService(pingRepository);
const pingController = new ping_controller_1.default(pingService);
// routes related with ping module
pingRouter.get("/", pingController.ping.bind(pingController));
exports.default = pingRouter;
//# sourceMappingURL=ping.routes.js.map