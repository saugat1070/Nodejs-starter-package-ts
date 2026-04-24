export declare class AppError extends Error {
    statusCode: number;
    message: string;
    name: string;
    constructor(statusCode: number, message?: string, name?: string);
}
/**
 * Represents an internal server error.
 * Implements the `AppError` interface.
 *
 * @class InternalServerError
 * @extends {AppError}
 */
export declare class InternalServerError extends AppError {
    constructor(message: string);
}
export declare class BadRequestError extends AppError {
    constructor(message: string);
}
export declare class NotFoundError extends AppError {
    constructor(message: string);
}
export declare class UnauthorizedError extends AppError {
    constructor(message: string);
}
export declare class ForbiddenError extends AppError {
    constructor(message: string);
}
export declare class ConflictError extends AppError {
    constructor(message: string);
}
export declare class UnprocessableEntityError extends AppError {
    constructor(message: string);
}
export declare class TooManyRequestsError extends AppError {
    constructor(message: string);
}
export declare class ServiceUnavailableError extends AppError {
    constructor(message: string);
}
export declare class GatewayTimeoutError extends AppError {
    constructor(message: string);
}
export declare class NotImplementedError extends AppError {
    constructor(message: string);
}
export declare class BadGatewayError extends AppError {
    constructor(message: string);
}
export declare class MethodNotAllowedError extends AppError {
    constructor(message: string);
}
export declare class RequestTimeoutError extends AppError {
    constructor(message: string);
}
export declare class PayloadTooLargeError extends AppError {
    constructor(message: string);
}
export declare class UnsupportedMediaTypeError extends AppError {
    constructor(message: string);
}
//# sourceMappingURL=app.error.d.ts.map