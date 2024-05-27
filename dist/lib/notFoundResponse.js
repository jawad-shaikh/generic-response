"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const notFoundResponse = (error = "Not Found") => {
    return {
        status: {
            code: 404,
            success: false,
        },
        data: null,
        error,
        message: null,
    };
};
exports.default = notFoundResponse;
//# sourceMappingURL=notFoundResponse.js.map