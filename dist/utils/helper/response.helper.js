"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonResponse = JsonResponse;
function JsonResponse(res, statusCode, success, message, data, pagination) {
    return res.status(statusCode).json({
        success,
        message,
        data,
        pagination
    });
}
//# sourceMappingURL=response.helper.js.map