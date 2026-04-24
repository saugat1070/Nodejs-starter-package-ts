"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCorrelationId = exports.asyncLocalStorage = void 0;
const node_async_hooks_1 = require("node:async_hooks");
// instance of async local storage to store async data across the application
exports.asyncLocalStorage = new node_async_hooks_1.AsyncLocalStorage();
// To get the correlation ID from the async local storage
const getCorrelationId = () => {
    const store = exports.asyncLocalStorage.getStore();
    return store?.correlationId || "unknown-correlation-id";
};
exports.getCorrelationId = getCorrelationId;
//# sourceMappingURL=request.helper.js.map