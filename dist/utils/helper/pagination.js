"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePaginationMeta = void 0;
const generatePaginationMeta = (totalItems, page, perPage) => {
    const totalPages = Math.max(Math.ceil(Number(totalItems) / Number(perPage)), 1);
    return {
        page: Number(page),
        totalPages,
        perPage: Number(perPage),
        totalItems: Number(totalItems),
    };
};
exports.generatePaginationMeta = generatePaginationMeta;
//# sourceMappingURL=pagination.js.map