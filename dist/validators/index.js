"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequestQuery = exports.validateRequestBody = void 0;
const logger_config_1 = require("../config/logger.config");
/*
- @param schema: zod schema to validate the request body
- @returns: middleware function to validate the request body against the provided schema
*/
const validateRequestBody = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync(req.body);
            next();
        }
        catch (error) {
            logger_config_1.logger.error("Validation error", { error: error.message });
            res.status(400).json({
                success: false,
                error: "Invalid request body",
                details: error.errors || error.message
            });
        }
    };
};
exports.validateRequestBody = validateRequestBody;
const validateRequestQuery = (schema) => {
    return async (req, res, next) => {
        try {
            await schema.parseAsync(req.query);
            next();
        }
        catch (error) {
            logger_config_1.logger.error("Validation error", { error: error.message });
            res.status(400).json({
                success: false,
                error: "Invalid request query",
                details: error.errors || error.message
            });
        }
    };
};
exports.validateRequestQuery = validateRequestQuery;
//# sourceMappingURL=index.js.map