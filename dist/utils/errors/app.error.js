"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnsupportedMediaTypeError = exports.PayloadTooLargeError = exports.RequestTimeoutError = exports.MethodNotAllowedError = exports.BadGatewayError = exports.NotImplementedError = exports.GatewayTimeoutError = exports.ServiceUnavailableError = exports.TooManyRequestsError = exports.UnprocessableEntityError = exports.ConflictError = exports.ForbiddenError = exports.UnauthorizedError = exports.NotFoundError = exports.BadRequestError = exports.InternalServerError = exports.AppError = void 0;
// class representing a generic application error
class AppError extends Error {
    statusCode;
    message;
    name;
    constructor(statusCode, message, name) {
        super();
        this.statusCode = statusCode;
        this.message = message || '';
        this.name = name || '';
    }
}
exports.AppError = AppError;
/**
 * Represents an internal server error.
 * Implements the `AppError` interface.
 *
 * @class InternalServerError
 * @extends {AppError}
 */
class InternalServerError extends AppError {
    constructor(message) {
        super(500, message, "InternalServerError");
    }
}
exports.InternalServerError = InternalServerError;
/*
 * Represents a Bad Request error (HTTP 400).
 * This error is typically used to indicate that the server cannot process the request
 * due to client-side issues such as invalid input or malformed request syntax.
 *
 * @class BadRequestError
 * @extends {AppError}
 */
class BadRequestError extends AppError {
    constructor(message) {
        super(400, message, "BadRequestError");
    }
}
exports.BadRequestError = BadRequestError;
/*
* Represents a Not Found error (HTTP 404).
* This error is typically used to indicate that the requested resource could not be found on the server.
*
* @class NotFoundError
* @extends {AppError}
*/
class NotFoundError extends AppError {
    constructor(message) {
        super(404, message, "NotFoundError");
    }
}
exports.NotFoundError = NotFoundError;
/*
* Represents an Unauthorized error (HTTP 401).
* This error is typically used to indicate that the request requires user authentication.
*
* @class UnauthorizedError
* @extends {AppError}
*/
class UnauthorizedError extends AppError {
    constructor(message) {
        super(401, message, "UnauthorizedError");
    }
}
exports.UnauthorizedError = UnauthorizedError;
/*
* Represents a Forbidden error (HTTP 403).
* This error is typically used to indicate that the request is not allowed for the user.
*
* @class ForbiddenError
* @extends {AppError}
*/
class ForbiddenError extends AppError {
    constructor(message) {
        super(403, message, "ForbiddenError");
    }
}
exports.ForbiddenError = ForbiddenError;
/*
* Represents a Conflict error (HTTP 409).
* This error is typically used to indicate that the request conflicts with the current state of the server.
*
* @class ConflictError
* @extends {AppError}
*/
class ConflictError extends AppError {
    constructor(message) {
        super(409, message, "ConflictError");
    }
}
exports.ConflictError = ConflictError;
/*
* Represents an Unprocessable Entity error (HTTP 422).
* This error is typically used to indicate that the server cannot process the request due to semantic errors.
*
* @class UnprocessableEntityError
* @extends {AppError}
*/
class UnprocessableEntityError extends AppError {
    constructor(message) {
        super(422, message, "UnprocessableEntityError");
    }
}
exports.UnprocessableEntityError = UnprocessableEntityError;
/*
* Represents a Too Many Requests error (HTTP 429).
* This error is typically used to indicate that the client has sent too many requests in a given amount of time.
*
* @class TooManyRequestsError
* @extends {AppError}
*/
class TooManyRequestsError extends AppError {
    constructor(message) {
        super(429, message, "TooManyRequestsError");
    }
}
exports.TooManyRequestsError = TooManyRequestsError;
/*
* Represents a Service Unavailable error (HTTP 503).
* This error is typically used to indicate that the server is temporarily unable to handle the request.
*
* @class ServiceUnavailableError
* @extends {AppError}
*/
class ServiceUnavailableError extends AppError {
    constructor(message) {
        super(503, message, "ServiceUnavailableError");
    }
}
exports.ServiceUnavailableError = ServiceUnavailableError;
/*
* Represents a Gateway Timeout error (HTTP 504).
* This error is typically used to indicate that the server received an invalid response from an upstream server.
*
* @class GatewayTimeoutError
* @extends {AppError}
*/
class GatewayTimeoutError extends AppError {
    constructor(message) {
        super(504, message, "GatewayTimeoutError");
    }
}
exports.GatewayTimeoutError = GatewayTimeoutError;
/*
* Represents a Not Implemented error (HTTP 501).
* This error is typically used to indicate that the server does not support the functionality required to fulfill the request.
*
* @class NotImplementedError
* @extends {AppError}
*/
class NotImplementedError extends AppError {
    constructor(message) {
        super(501, message, "NotImplementedError");
    }
}
exports.NotImplementedError = NotImplementedError;
/*
* Represents a Bad Gateway error (HTTP 502).
* This error is typically used to indicate that the server received an invalid response from an upstream server.
*
* @class BadGatewayError
* @extends {AppError}
*/
class BadGatewayError extends AppError {
    constructor(message) {
        super(502, message, "BadGatewayError");
    }
}
exports.BadGatewayError = BadGatewayError;
/*
* Represents a Method Not Allowed error (HTTP 405).
* This error is typically used to indicate that the request method is not allowed for the requested resource.
*
* @class MethodNotAllowedError
* @extends {AppError}
*/
class MethodNotAllowedError extends AppError {
    constructor(message) {
        super(405, message, "MethodNotAllowedError");
    }
}
exports.MethodNotAllowedError = MethodNotAllowedError;
/*
* Represents a Request Timeout error (HTTP 408).
* This error is typically used to indicate that the server timed out while waiting for the request.
*
* @class RequestTimeoutError
* @extends {AppError}
*/
class RequestTimeoutError extends AppError {
    constructor(message) {
        super(408, message, "RequestTimeoutError");
    }
}
exports.RequestTimeoutError = RequestTimeoutError;
/*
* Represents a Payload Too Large error (HTTP 413).
* This error is typically used to indicate that the request entity is larger than limits defined by the server.
*
* @class PayloadTooLargeError
* @extends {AppError}
*/
class PayloadTooLargeError extends AppError {
    constructor(message) {
        super(413, message, "PayloadTooLargeError");
    }
}
exports.PayloadTooLargeError = PayloadTooLargeError;
/*
* Represents an Unsupported Media Type error (HTTP 415).
* This error is typically used to indicate that the server refuses to accept the request because the payload format is not supported.
*
* @class UnsupportedMediaTypeError
* @extends {AppError}
*/
class UnsupportedMediaTypeError extends AppError {
    constructor(message) {
        super(415, message, "UnsupportedMediaTypeError");
    }
}
exports.UnsupportedMediaTypeError = UnsupportedMediaTypeError;
//# sourceMappingURL=app.error.js.map