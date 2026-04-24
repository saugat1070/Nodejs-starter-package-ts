"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.genericErrorHandler = exports.appErrorHandler = void 0;
const response_helper_1 = require("../utils/helper/response.helper");
const appErrorHandler = (err, req, res, next) => {
    console.log("Error occurred: ", err);
    (0, response_helper_1.JsonResponse)(res, err.statusCode, false, err.message, null);
};
exports.appErrorHandler = appErrorHandler;
const genericErrorHandler = (err, req, res, next) => {
    console.log("Generic error occurred: ", err);
    (0, response_helper_1.JsonResponse)(res, err.statusCode, false, err.message, null);
};
exports.genericErrorHandler = genericErrorHandler;
//# sourceMappingURL=error.middleware.js.map