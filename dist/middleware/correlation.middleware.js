"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.attachCorrelationId = void 0;
const request_helper_1 = require("../utils/helper/request.helper");
const uuid_1 = require("uuid");
const attachCorrelationId = (req, res, next) => {
    // generate correlation id
    const correlationId = (0, uuid_1.v4)();
    // attach correlation id to request object
    req.headers['x-correlation-id'] = correlationId;
    request_helper_1.asyncLocalStorage.run({ correlationId: correlationId }, () => {
        next();
    });
};
exports.attachCorrelationId = attachCorrelationId;
//# sourceMappingURL=correlation.middleware.js.map