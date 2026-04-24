"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const logger_config_1 = require("./logger.config");
dotenv_1.default.config({
    path: ".env"
});
logger_config_1.logger.info("Environment variables loaded successfully");
exports.Env = {
    PORT: Number(process.env.PORT) || 3000,
    NODE_ENV: process.env.NODE_ENV || "development"
};
//# sourceMappingURL=env.config.js.map