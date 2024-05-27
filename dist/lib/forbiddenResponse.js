"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const forbiddenResponse = (error = "forbidden") => {
    return {
        status: {
            code: 403,
            success: false,
        },
        data: null,
        error,
        message: null,
    };
};
exports.default = forbiddenResponse;
//# sourceMappingURL=forbiddenResponse.js.map